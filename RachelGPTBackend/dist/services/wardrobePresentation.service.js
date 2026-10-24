import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GEMINI_API_KEY;
const modelFromEnv = process.env.GEMINI_IMAGE_MODEL;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing");
}
if (!modelFromEnv) {
    throw new Error("GEMINI_IMAGE_MODEL is missing");
}
const model = modelFromEnv;
const ai = new GoogleGenAI({ apiKey });
const PRESENTATION_PROMPT = `
Create a photorealistic square (1:1) wardrobe flat-lay image.
Image 1 is the clothing/item source; Image 2 is the exact
background and lighting reference.

Remove people, mannequins, hangers, retail tags, clips, and
unrelated objects. Preserve the item's original colour,
brightness, texture, pattern, shape, and details. Arrange it
naturally for its type: shirts laid flat with naturally
positioned sleeves, trousers and jeans aligned with realistic
leg folds, dresses shaped naturally, and shoes/bags in their
normal display orientation.

Place it on Image 2's warm ivory textured floor. Match its
bright, soft, warm daylight and gentle contact shadows. Keep
realistic fabric grain, natural wrinkles, creases, draping,
and subtle imperfections. Avoid a stiff, overly smooth look.

Use a close, top-down composition. The item should fill most
of the square frame, with minimal empty space above and below,
while keeping the entire item visible. No added objects,
accessories, text, borders, or watermarks.
`;
export async function generateWardrobePresentationImage(originalBuffer, originalMimeType, backgroundBuffer, backgroundMimeType) {
    const response = await ai.models.generateContent({
        model,
        contents: [
            {
                role: "user",
                parts: [
                    { text: PRESENTATION_PROMPT },
                    {
                        inlineData: {
                            mimeType: originalMimeType,
                            data: originalBuffer.toString("base64"),
                        },
                    },
                    {
                        inlineData: {
                            mimeType: backgroundMimeType,
                            data: backgroundBuffer.toString("base64"),
                        },
                    },
                ],
            },
        ],
        config: {
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: {
                aspectRatio: "1:1",
                imageSize: "1K",
            },
        },
    });
    const parts = response.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find((part) => part.inlineData?.data);
    if (!imagePart?.inlineData?.data) {
        const message = parts
            .map((part) => part.text)
            .filter(Boolean)
            .join("\n");
        throw new Error(message || "Gemini returned no presentation image");
    }
    return Buffer.from(imagePart.inlineData.data, "base64");
}
//# sourceMappingURL=wardrobePresentation.service.js.map