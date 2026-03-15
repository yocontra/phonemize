export interface POSResult {
    word: string;
    pos: string;
    confidence: number;
}
export declare class SimplePOSTagger {
    /**
     * Check if a word is likely a noun based on its endings
     */
    private isLikelyNoun;
    /**
     * Tag a single word with its most likely POS
     */
    tagWord(word: string, context?: string[]): POSResult;
    /**
     * Tag multiple words in sequence with context
     */
    tagWords(words: string[]): POSResult[];
    /**
     * Simple sentence-level POS tagging
     */
    tagSentence(text: string): POSResult[];
}
export declare const simplePOSTagger: SimplePOSTagger;
