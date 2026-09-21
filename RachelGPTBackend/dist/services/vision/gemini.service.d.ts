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
export declare function analyzeClothingImage(imageBuffer: Buffer, mimeType: string): Promise<ClothingAnalysis>;
