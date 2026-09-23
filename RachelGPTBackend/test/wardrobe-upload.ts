import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

/*
 * ---------------------------------------------------------
 * Environment
 * ---------------------------------------------------------
 */

const API_URL = "http://localhost:3000";

const ACCESS_TOKEN = process.env.TEST_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  throw new Error("TEST_ACCESS_TOKEN is missing from .env");
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_URL or SUPABASE_ANON_KEY is missing from .env");
}

/*
 * ---------------------------------------------------------
 * Supabase client
 *
 * This is only for the test client.
 *
 * The real frontend will eventually do this same upload
 * directly to Supabase Storage.
 * ---------------------------------------------------------
 */

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/*
 * ---------------------------------------------------------
 * Test image
 * ---------------------------------------------------------
 */

const imagePath = path.join(process.cwd(), "test", "checkshirt.jpg");

const fileName = "checkshirt.jpg";
const contentType = "image/jpeg";

/*
 * ---------------------------------------------------------
 * Main
 * ---------------------------------------------------------
 */

async function main() {
  /*
   * STEP 1
   *
   * Ask our backend for permission to upload.
   */

  console.log("\nRequesting upload information...");

  const uploadUrlResponse = await fetch(`${API_URL}/api/wardrobe/upload-url`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },

    body: JSON.stringify({
      fileName,
      contentType,
    }),
  });

  const uploadUrlData = await uploadUrlResponse.json();

  console.log("Upload URL response:", uploadUrlData);

  if (!uploadUrlResponse.ok) {
    throw new Error(
      uploadUrlData?.message || "Failed to get upload information",
    );
  }

  const { wardrobeItemId, storagePath, token } = uploadUrlData.upload;

  /*
   * ---------------------------------------------------------
   * STEP 2
   *
   * Read the actual image from disk.
   * ---------------------------------------------------------
   */

  console.log("\nReading image:", imagePath);

  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image does not exist: ${imagePath}`);
  }

  const imageBuffer = fs.readFileSync(imagePath);

  console.log(`Image size: ${(imageBuffer.length / 1024).toFixed(2)} KB`);

  /*
   * ---------------------------------------------------------
   * STEP 3
   *
   * Upload the actual image directly to Supabase Storage.
   *
   * The backend gave us:
   *
   * - storagePath
   * - signed upload token
   *
   * The backend does NOT receive the image.
   * ---------------------------------------------------------
   */

  console.log("\nUploading image to Supabase Storage...");

  const { data, error } = await supabase.storage
    .from("Wardrobe")
    .uploadToSignedUrl(storagePath, token, imageBuffer, {
      contentType,
    });

  if (error) {
    console.error("Supabase signed upload error:", error);

    throw error;
  }

  /*
   * ---------------------------------------------------------
   * STEP 4
   *
   * Upload succeeded.
   * ---------------------------------------------------------
   */

  console.log("\nImage uploaded successfully!");

  console.log("Supabase upload result:", data);

  console.log("Wardrobe Item ID:", wardrobeItemId);

  console.log("Storage Path:", storagePath);

  console.log("\nThe image is now in Supabase Storage.");

  console.log("Next step: call complete/complete-batch.");
}

/*
 * ---------------------------------------------------------
 * Error handling
 * ---------------------------------------------------------
 */

main().catch((error) => {
  console.error("\nUpload test failed:");

  console.error(error);

  process.exit(1);
});
