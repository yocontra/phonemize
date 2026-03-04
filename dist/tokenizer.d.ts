/**
 * Text tokenization and phoneme processing system
 * Handles language detection, preprocessing, and format conversion
 */
/**
 * Configuration options for tokenizer behavior
 */
export interface TokenizerOptions {
    /** Remove stress markers from output */
    stripStress?: boolean;
    /**
     * Output format (IPA, ARPABET, or Zhuyin)
     *
     * Note: Non-chinese in zhuyin format will be converted to IPA
     **/
    format?: "ipa" | "arpabet" | "zhuyin";
    /** Token separator in output string */
    separator?: string;
    /** Convert non-Latin text to ASCII approximation */
    anyAscii?: boolean;
    /** Chinese tone format: 'unicode' (˧˩˧) or 'arrow' (↓↗↘→). Only applies when format is 'ipa' */
    toneFormat?: "unicode" | "arrow";
}
/**
 * Individual phoneme token with metadata
 */
export interface PhonemeToken {
    /** IPA or ARPABET phoneme string */
    phoneme: string;
    /** Original word/text */
    word: string;
    /** Position in original text */
    position: number;
}
/**
 * Language segment for multilingual processing
 */
interface LanguageSegment {
    text: string;
    language: string;
    startIndex: number;
}
/**
 * Preprocessing result with language information
 */
interface PreprocessResult {
    text: string;
    languageMap: Record<string, string>;
    segments: LanguageSegment[];
}
/**
 * Main tokenizer class for phoneme processing
 */
export declare class Tokenizer {
    protected readonly options: Required<TokenizerOptions>;
    constructor(options?: TokenizerOptions);
    /**
     * Preprocess text with language detection and segmentation
     */
    protected _preprocess(text: string): PreprocessResult;
    /**
     * Detect languages for words and create character-level segments
     */
    private _detectLanguagesAndSegment;
    /**
     * Apply anyAscii conversion while preserving Chinese text
     */
    private _applyAnyAscii;
    /**
     * Fast character-level language detection
     */
    private _detectCharLanguage;
    /**
     * Post-process phonemes for format conversion and cleanup
     */
    protected _postProcess(phonemes: string): string;
    private _predict;
    /**
     * Core token processing method that handles both simple and detailed tokenization
     */
    private _processTokens;
    /**
     * Core tokenization method - converts text to phoneme array
     */
    tokenize(text: string): string[];
    /**
     * Smart tokenization using efficient regex patterns
     */
    private _smartTokenize;
    /**
     * Convert text to phoneme string with specified separator
     */
    tokenizeToString(text: string): string;
    /**
     * Convert text to detailed phoneme tokens with metadata
     */
    tokenizeToTokens(text: string): PhonemeToken[];
}
export {};
