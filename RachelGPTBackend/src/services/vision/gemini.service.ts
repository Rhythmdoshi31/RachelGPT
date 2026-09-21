import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing");
}

const ai = new GoogleGenAI({
  apiKey,
});

export interface ClothingAnalysis {
  category: string;
  subcategory: string | null;

  attributes: {
    colors: string[];
    pattern: string | null;
    material: string | null;
    fit: string | null;
    sleeve: string | null;
    collar: string | null;
    length: string | null;
    style: string[];
    formality: string | null;
    season: string[];
    occasions: string[];
    details: string[];
  };
}

export async function analyzeClothingImage(
  imageBuffer: Buffer,
  mimeType: string
): Promise<ClothingAnalysis> {
  const base64Image =
    imageBuffer.toString("base64");

  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",

    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              mimeType,
              data: base64Image,
            },
          },
          {
            text: `
You are a professional clothing and wardrobe analysis system.

Analyze the clothing item in this image.

Your task is to identify ONLY what can reasonably be determined from the visual appearance of the image.

Do not invent information that cannot be visually determined.

For example:
- Do not claim exact material composition unless visually obvious.
- Do not claim a specific brand unless clearly visible.
- Do not infer the user's gender, identity, or personal characteristics.
- If an attribute cannot be determined, return null.
- If there are multiple visible colors, include all important colors.
- Focus on the clothing item itself.

Return the analysis using the provided JSON schema.

Pay particular attention to:
- clothing category
- specific subcategory
- visible colors
- pattern
- apparent material
- fit
- sleeve type
- collar/neckline
- length
- style
- formality
- suitable seasons based on the garment
- suitable occasions based on the garment
- distinctive visible details
            `,
          },
        ],
      },
    ],

    config: {
      responseMimeType: "application/json",

      responseSchema: {
        type: "object",
        properties: {
          category: {
            type: "string",
          },

          subcategory: {
            type: ["string", "null"],
          },

          attributes: {
            type: "object",
            properties: {
              colors: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              pattern: {
                type: ["string", "null"],
              },

              material: {
                type: ["string", "null"],
              },

              fit: {
                type: ["string", "null"],
              },

              sleeve: {
                type: ["string", "null"],
              },

              collar: {
                type: ["string", "null"],
              },

              length: {
                type: ["string", "null"],
              },

              style: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              formality: {
                type: ["string", "null"],
              },

              season: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              occasions: {
                type: "array",
                items: {
                  type: "string",
                },
              },

              details: {
                type: "array",
                items: {
                  type: "string",
                },
              },
            },

            required: [
              "colors",
              "pattern",
              "material",
              "fit",
              "sleeve",
              "collar",
              "length",
              "style",
              "formality",
              "season",
              "occasions",
              "details",
            ],
          },
        },

        required: [
          "category",
          "subcategory",
          "attributes",
        ],
      },
    },
  });

  if (!response.text) {
    throw new Error(
      "Gemini returned an empty response"
    );
  }

  return JSON.parse(
    response.text
  ) as ClothingAnalysis;
}