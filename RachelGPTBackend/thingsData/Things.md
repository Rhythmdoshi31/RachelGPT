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