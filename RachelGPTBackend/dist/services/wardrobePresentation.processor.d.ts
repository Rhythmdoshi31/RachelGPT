interface PresentationItem {
    id: string;
    userId: string;
    primaryImagePath: string;
    presentationJobToken: string;
}
export declare function processWardrobePresentationBatch(items: PresentationItem[]): Promise<void>;
export {};
