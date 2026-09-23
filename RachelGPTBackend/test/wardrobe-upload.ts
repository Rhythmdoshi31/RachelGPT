import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const API_URL = "http://localhost:3000";

const ACCESS_TOKEN = process.env.TEST_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  throw new Error("TEST_ACCESS_TOKEN is missing from .env");
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error(
    "SUPABASE_URL or SUPABASE_ANON_KEY is missing from .env"
  );
}

const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

/*
 * ---------------------------------------------------------
 * Images to upload
 * ---------------------------------------------------------
 *
 * Put your 3 images inside test/
 */

const files = [
  {
    fileName: "brownsambas.jpg",
    contentType: "image/jpeg",
  },
  {
    fileName: "beigestripe.jpg",
    contentType: "image/jpeg",
  },
  {
    fileName: "olivejeans.jpg",
    contentType: "image/jpeg",
  },
];

async function main() {
  /*
   * ---------------------------------------------------------
   * STEP 1
   * Ask backend for upload credentials for all 3 images.
   * ---------------------------------------------------------
   */

  console.log("\nRequesting batch upload information...");

  const uploadUrlResponse = await fetch(
    `${API_URL}/api/wardrobe/upload-urls`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },

      body: JSON.stringify({
        files,
      }),
    }
  );

  const uploadUrlData = await uploadUrlResponse.json();

  console.log(
    "Upload URL response:",
    uploadUrlData
  );

  if (!uploadUrlResponse.ok) {
    throw new Error(
      uploadUrlData?.message ||
        "Failed to get upload information"
    );
  }

  const uploads = uploadUrlData.uploads;

  if (!Array.isArray(uploads)) {
    throw new Error(
      "Backend did not return an uploads array"
    );
  }

  /*
   * ---------------------------------------------------------
   * STEP 2
   * Upload all 3 actual images directly to Supabase.
   * ---------------------------------------------------------
   */

  const completedUploads = [];

  for (const upload of uploads) {
    const file = files[upload.index];

    const imagePath = path.join(
      process.cwd(),
      "test",
      file.fileName
    );

    console.log(
      `\nReading ${file.fileName}...`
    );

    if (!fs.existsSync(imagePath)) {
      throw new Error(
        `Image does not exist: ${imagePath}`
      );
    }

    const imageBuffer = fs.readFileSync(imagePath);

    console.log(
      `Size: ${(imageBuffer.length / 1024).toFixed(2)} KB`
    );

    console.log(
      `Uploading ${file.fileName}...`
    );

    const { data, error } = await supabase.storage
      .from("Wardrobe")
      .uploadToSignedUrl(
        upload.storagePath,
        upload.token,
        imageBuffer,
        {
          contentType: file.contentType,
        }
      );

    if (error) {
      console.error(
        `Failed to upload ${file.fileName}:`,
        error
      );

      throw error;
    }

    console.log(
      `${file.fileName} uploaded successfully`,
      data
    );

    completedUploads.push({
      wardrobeItemId: upload.wardrobeItemId,
      storagePath: upload.storagePath,
    });
  }

  /*
   * ---------------------------------------------------------
   * STEP 3
   * Tell backend all 3 images were uploaded.
   *
   * Backend will verify that every Storage object actually
   * exists before creating database records.
   * ---------------------------------------------------------
   */

  console.log(
    "\nCompleting batch upload..."
  );

  const completeResponse = await fetch(
    `${API_URL}/api/wardrobe/complete-batch`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },

      body: JSON.stringify({
        uploads: completedUploads,
      }),
    }
  );

  const completeData =
    await completeResponse.json();

  console.log(
    "\nComplete batch response:",
    completeData
  );

  if (!completeResponse.ok) {
    throw new Error(
      completeData?.message ||
        "Failed to complete batch upload"
    );
  }

  /*
   * ---------------------------------------------------------
   * STEP 4
   * Print the IDs we'll use for batch Gemini analysis.
   * ---------------------------------------------------------
   */

  console.log(
    "\n========================================"
  );

  console.log(
    "BATCH UPLOAD SUCCESSFUL"
  );

  console.log(
    "========================================\n"
  );

  console.log(
    "Wardrobe Item IDs:"
  );

  for (const upload of completedUploads) {
    console.log(
      upload.wardrobeItemId
    );
  }

  console.log(
    "\nUse these IDs with:"
  );

  console.log(
    "POST /api/wardrobe/analyze-batch"
  );
}

main().catch((error) => {
  console.error(
    "\nBatch upload test failed:"
  );

  console.error(error);

  process.exit(1);
});