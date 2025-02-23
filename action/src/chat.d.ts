export declare class Chat {
    private openai;
    private isAzure;
    constructor(apikey: string);
    private generatePrompt;
    codeReview: (patch: string, student_prompt: string) => Promise<string | null>;
}
