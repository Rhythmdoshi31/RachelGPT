import "dotenv/config";
import fs from "node:fs";
import path from "node:path";

const API_URL = "http://localhost:3000";

const ACCESS_TOKEN = process.env.TEST_ACCESS_TOKEN;

if (!ACCESS_TOKEN) {
  throw new Error("TEST_ACCESS_TOKEN is missing from .env");
}

const imagePath = path.join(
  process.cwd(),
  "test",
  "redtshirt.jpg"
);

const fileName = "redtshirt.jpg";
const contentType = "image/jpeg";

async function main() {
  /*
   * STEP 1
   * Ask our backend for permission to upload.
   */
  const uploadUrlResponse = await fetch(
    `${API_URL}/api/wardrobe/upload-url`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        fileName,
        contentType,
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
      "Failed to get upload information"
    );
  }

  const {
    wardrobeItemId,
    storagePath,
    token,
  } = uploadUrlData.upload;

  /*
   * STEP 2
   * Read the actual image.
   */
  const imageBuffer = fs.readFileSync(imagePath);

  /*
   * STEP 3
   * Upload directly to Supabase Storage.
   *
   * The backend gave us the signed upload token.
   */
  const supabaseUrl = process.env.SUPABASE_URL;

  if (!supabaseUrl) {
    throw new Error("SUPABASE_URL is missing");
  }

  const uploadResponse = await fetch(
    `${supabaseUrl}/storage/v1/object/upload/sign/Wardrobe/${storagePath}?token=${encodeURIComponent(token)}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": contentType,
      },
      body: imageBuffer,
    }
  );

  const uploadResponseText =
    await uploadResponse.text();

  console.log(
    "Storage upload status:",
    uploadResponse.status
  );

  console.log(
    "Storage upload response:",
    uploadResponseText
  );

  if (!uploadResponse.ok) {
    throw new Error(
      "Image upload to Supabase Storage failed"
    );
  }

  console.log("\nImage uploaded successfully!");
  console.log("Wardrobe Item ID:", wardrobeItemId);
  console.log("Storage Path:", storagePath);
}

main().catch((error) => {
  console.error("\nUpload test failed:");
  console.error(error);
  process.exit(1);
});