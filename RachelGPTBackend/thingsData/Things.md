## Onboarding Flow

Welcome to Rachel
        ↓
What's your style?
        ↓
What colors do you like?
        ↓
What colors do you avoid?
        ↓
What fits do you prefer?
        ↓
What occasions do you dress for?
        ↓
What are you experimenting with?
        ↓
How do you want to look?
        ↓
Complete

#### This will create a complete data that we will send to an endpoint

POST /api/onboarding/style
GET  /api/onboarding/style

#### Personas related routes

GET  /api/personas
POST /api/personas/select
GET  /api/personas/active

### WARDROBE

POST /api/wardrobe/upload-url
        ↓
Backend gives token + path
        ↓
Client uploads directly to Supabase
        ↓
POST /api/wardrobe/complete
        ↓
Backend creates DB records

Wardrobe/
└── 35b4c56a-c263-400a-b54a-ee9e1971715d/
    └── e22784b0-4588-484c-9610-865c0a9d5900/
        └── 1789906280133.jpg

POST /api/wardrobe/upload-urls --> gives storage path (TO STORE IMAGES)

GET /api/wardrobe?page=1&limit=20 --> data with primaryImagePath (TO GET IMAGES)

POST /api/wardrobe/complete

POST /api/wardrobe/complete-batch --> database batch completion

GET http://localhost:3000/api/wardrobe/e2415209-2219-4df1-b687-eda6bb8ac695 --> get single item when user clicks on one item

PATCH http://localhost:3000/api/wardrobe/e2415209-2219-4df1-b687-eda6bb8ac695 --> update a single item

DELETE http://localhost:3000/api/wardrobe/e2415209-2219-4df1-b687-eda6bb8ac695 --> delete an item (setting isArchived as true and not removing a row)

### VISION AI

POST /api/wardrobe/:id/analyze --> sending to gemini to analyze the image

POST http://localhost:3000/api/wardrobe/upload-urls --> uploading to object storage

POST http://localhost:3000/api/wardrobe/complete --> create single wardrobe item

checkshirt.jpg
      ↓
/upload-url
      ↓
signed upload token
      ↓
uploadToSignedUrl()
      ↓
Supabase Storage ✅
      ↓
/complete
      ↓
PostgreSQL ✅
      ↓
/:id/analyze
      ↓
Storage download() ✅
      ↓
Gemini Vision ✅
      ↓
structured analysis ✅
      ↓
analysisStatus = completed ✅


POST /api/wardrobe/analyze-batch --> after this, this gives that batch processing has started onlyy

PERODICALLY DO - until the analysis of all items go from pending to completed 

GET /api/wardrobe/analysis-status?ids=id1,id2,id3

#### FRONTEND WILL BE LIKE ---
Select images
     ↓
POST /api/wardrobe/upload-urls
     ↓
Upload images directly to Supabase
     ↓
POST /api/wardrobe/complete-batch
     ↓
Receive wardrobeItemIds
     ↓
POST /api/wardrobe/analyze-batch
     ↓
202 Accepted
     ↓
Show "Analyzing your wardrobe..."
     ↓
Poll /api/wardrobe/analysis-status
     ↓
allCompleted === true
     ↓
Use returned analysis data
     ↓
Show wardrobe



### Since supabase auth works directly, instead of using loginn and signup routes, we will just use ensureProfile route to make sure user is in both supabae and the database


### IMAGE BUCKET STORAGE FOR avatar-images 

generated/female/image12145.webp	Female avatar with a particular combination of customizations
generated/male/image22145.webp	Male avatar with a particular combination of customizations

For generated images, we'll use this digit order:
1. Gender: 1 = female, 2 = male.
2. Hairstyle: 1–5.
3. Face shape: 1–5.
4. Skin tone: 1–5.
5. Body type: 1–5.

{
  "gender": "FEMALE",
  "hairstyle": null,
  "faceShape": null,
  "skinTone": null,
  "bodyType": null,
  "imageCode": "image1",
  "imagePath": "defaults/image1.png",
  "version": 1
}

### Avatar routes

GET /api/avatar/ (getAvatar)
POST /api/avatar (saveAvatar)


POST /api/wardrobe/upload-urls



Direct uploads to Supabase Storage, with a small concurrency limit to avoid loading 50 images into memory at once.



POST /api/wardrobe/complete-batch



POST /api/wardrobe/analyze-batch



GET /api/wardrobe/analysis-status?ids=... until analysis finishes.