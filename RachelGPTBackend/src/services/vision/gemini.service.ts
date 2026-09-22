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

/**
 * Errors that are generally temporary and worth retrying.
 */
function isRetryableGeminiError(error: unknown): boolean {
  const errorText =
    error instanceof Error
      ? error.message
      : String(error);

  return (
    errorText.includes("429") ||
    errorText.includes("500") ||
    errorText.includes("502") ||
    errorText.includes("503") ||
    errorText.includes("504") ||
    errorText.includes("RESOURCE_EXHAUSTED") ||
    errorText.includes("UNAVAILABLE") ||
    errorText.includes("INTERNAL")
  );
}

/**
 * Wait for a specified amount of time.
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  );
}

/**
 * Analyze a clothing image using Gemini Vision.
 */
export async function analyzeClothingImage(
  imageBuffer: Buffer,
  mimeType: string
): Promise<ClothingAnalysis> {
  const base64Image =
    imageBuffer.toString("base64");

  const MAX_ATTEMPTS = 3;

  let lastError: unknown;

  for (
    let attempt = 1;
    attempt <= MAX_ATTEMPTS;
    attempt++
  ) {
    try {
      console.log(
        `Gemini clothing analysis attempt ${attempt}/${MAX_ATTEMPTS}`
      );

      const response =
        await ai.models.generateContent({
          model: "gemini-3.5-flash-lite",

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
You are a professional wardrobe analysis system.

Analyze ONLY the primary clothing item shown in the image.

Your goal is to produce structured, visually grounded metadata that can later be used by a personal styling system to search a user's wardrobe and generate outfits.

IMPORTANT RULES:

1. VISUAL EVIDENCE ONLY
Only report information that can reasonably be determined from the image.

Do not guess hidden or invisible properties.

If an attribute cannot be determined with reasonable confidence, return null for that field.

For array fields, return an empty array when there are no confidently identifiable values.

2. DO NOT INVENT DETAILS
Never invent:
- brand
- fabric composition
- exact material
- garment technology
- price
- country of manufacture
- designer
- product model
- hidden construction
- information that cannot be visually observed

Do not identify a brand unless its logo or name is clearly visible.

3. MATERIAL
Be especially conservative with material.

Do NOT assume cotton, polyester, wool, linen, denim, leather, silk, etc. simply because the garment commonly uses that material.

Only provide a material when there are strong visual cues supporting it.

If the exact material cannot be determined reliably, return null.

4. COLORS
Identify the important visible colors of the clothing item.

Use common color names such as:
- black
- white
- navy blue
- light blue
- beige
- brown
- maroon
- olive green
- grey

Do not list tiny insignificant color variations.

If there are multiple major colors, include all of them.

5. PATTERN
Describe the visible pattern only.

Examples:
- solid
- striped
- checked
- plaid
- floral
- geometric
- graphic
- textured
- camouflage

If no meaningful pattern is visible, use "solid" when appropriate.

6. CATEGORY
Identify the broad clothing category.

Use a sensible clothing category such as:
- tops
- bottoms
- outerwear
- dresses
- footwear
- accessories

7. SUBCATEGORY
Identify the most specific visually supported garment type.

Examples:
- t-shirt
- polo shirt
- shirt
- hoodie
- sweatshirt
- sweater
- jeans
- chinos
- trousers
- shorts
- jacket
- blazer

Do not invent a more specific type when the image does not support it.

8. FIT
Only describe visible fit characteristics.

Examples:
- slim
- regular
- relaxed
- oversized

If fit cannot reasonably be determined, return null.

9. SLEEVE
Describe the visible sleeve type.

Examples:
- sleeveless
- short sleeve
- three-quarter sleeve
- long sleeve

If not applicable or not determinable, return null.

10. COLLAR / NECKLINE
Describe the visible collar or neckline.

Examples:
- crew neck
- v-neck
- polo collar
- spread collar
- button-down collar
- mandarin collar

If not visible or not applicable, return null.

11. LENGTH
Describe the visible garment length.

Examples:
- cropped
- regular
- long
- knee length
- ankle length

Only use a value appropriate for the garment.

12. STYLE
Identify visually supported style characteristics.

Examples:
- casual
- sporty
- minimal
- streetwear
- formal
- smart casual
- classic
- preppy
- rugged

Only include styles that are reasonably supported by the garment.

13. FORMALITY
Estimate the garment's general formality based on the garment itself.

Use:
- casual
- smart casual
- formal

Do not base this on the user's identity or assumed lifestyle.

14. SEASON
Suggest seasons in which the garment would generally be suitable based on visible characteristics such as coverage, weight, sleeve length, and construction.

Use:
- spring
- summer
- fall
- winter

Do not assume a climate or location.

15. OCCASIONS
Suggest reasonable occasions based on the garment itself.

Examples:
- casual
- college
- work
- office
- party
- travel
- outdoor
- dinner
- formal event

Do not infer the user's actual activities.

16. DETAILS
Include only distinctive visible construction or design details.

Examples:
- button placket
- chest pocket
- contrast collar
- zipper
- embroidery
- graphic print
- ribbed cuffs
- drawstring

Do not include generic properties already represented by other fields.

17. UNCERTAINTY
When uncertain, prefer null or a conservative general description rather than guessing.

The quality of this data is more important than filling every field.

Return ONLY the requested JSON object using the provided schema.
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

      const analysis = JSON.parse(
        response.text
      ) as ClothingAnalysis;

      return analysis;
    } catch (error) {
      lastError = error;

      console.error(
        `Gemini analysis attempt ${attempt} failed:`,
        error
      );

      // Don't retry permanent errors.
      if (!isRetryableGeminiError(error)) {
        throw error;
      }

      // Stop after the final attempt.
      if (attempt === MAX_ATTEMPTS) {
        break;
      }

      /*
       * Exponential backoff:
       *
       * Attempt 1 fails → wait 1 second
       * Attempt 2 fails → wait 2 seconds
       * Attempt 3 fails → give up
       */
      const delay = 1000 * 2 ** (attempt - 1);

      console.log(
        `Retrying Gemini in ${delay}ms...`
      );

      await sleep(delay);
    }
  }

  throw (
    lastError instanceof Error
      ? lastError
      : new Error(
          "Gemini analysis failed after retries"
        )
  );
}

