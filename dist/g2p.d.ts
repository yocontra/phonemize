/**
 * Abstract G2P (Grapheme-to-Phoneme) Processor Interface
 *
 * This module provides an abstraction layer for different G2P engines,
 * allowing dynamic registration and usage of language-specific processors.
 */
export interface G2PProcessor {
    /**
     * Unique identifier for this G2P processor
     */
    readonly id: string;
    /**
     * Human-readable name for this G2P processor
     */
    readonly name: string;
    /**
     * Languages this processor can handle
     * Array of ISO 639-1 language codes (e.g., ['en', 'zh', 'ja'])
     */
    readonly supportedLanguages: string[];
    /**
     * Predict phonemes for a given word
     *
     * @param word - Word to convert to phonemes
     * @param language - Language code (optional, for disambiguation)
     * @param pos - Part of speech (optional, for homograph disambiguation)
     * @returns Phoneme string in IPA format, or null if cannot process
     */
    predict(word: string, language?: string, pos?: string): string | null;
    /**
     * Add a custom pronunciation for a word
     *
     * @param word - Word to add pronunciation for
     * @param pronunciation - IPA pronunciation string
     */
    addPronunciation(word: string, pronunciation: string): void;
}
declare class G2PRegistry {
    private processors;
    private languageMap;
    /**
     * Register a G2P processor
     *
     * @param processor - G2P processor to register
     */
    register(processor: G2PProcessor): void;
    /**
     * Get processor by ID
     *
     * @param id - Processor ID
     * @returns G2P processor or undefined
     */
    getProcessor(id: string): G2PProcessor | undefined;
    /**
     * Get processors that support a specific language
     *
     * @param language - Language code
     * @returns Array of processors that support the language
     */
    getProcessorsForLanguage(language: string): G2PProcessor[];
    /**
     * Get all registered processors
     *
     * @returns Array of all registered processors
     */
    getAllProcessors(): G2PProcessor[];
    /**
     * Find the best processor for a given word and language
     *
     * @param word - Word to process
     * @param language - Language code (optional)
     * @returns Best matching processor or null
     */
    findBestProcessor(word: string, language?: string): G2PProcessor | null;
    /**
     * Clear all registered processors
     */
    clear(): void;
    /**
     * Get all supported languages
     *
     * @returns Array of supported language codes
     */
    getSupportedLanguages(): string[];
}
export declare const g2pRegistry: G2PRegistry;
/**
 * Detect the language of the given text based on Unicode character ranges
 *
 * @param text - Text to detect language for
 * @returns Language code or null if not detected
 */
export declare function detectLanguage(text: string): string | null;
/**
 * Use a specific G2P processor by instance
 *
 * @param processor - G2P processor instance to use
 */
export declare function useG2P(processor: G2PProcessor): void;
/**
 * Get the best G2P processor for a word
 *
 * @param word - Word to process
 * @param language - Language code (optional)
 * @returns G2P processor or null
 */
export declare function getG2PProcessor(word: string, language?: string): G2PProcessor | null;
/**
 * Predict phonemes using the best available processor
 *
 * @param word - Word to convert
 * @param language - Language code (optional)
 * @param pos - Part of speech (optional)
 * @returns Phoneme string or null if no processor can handle it
 */
export declare function predictPhonemes(word: string, language?: string, pos?: string): string | null;
/**
 * Get all registered processor IDs
 *
 * @returns Array of processor IDs
 */
export declare function getRegisteredProcessorIds(): string[];
/**
 * Get processors that support a specific language
 *
 * @param language - Language code
 * @returns Array of processors that support the language
 */
export declare function getProcessorsForLanguage(language: string): G2PProcessor[];
/**
 * Get all supported languages
 *
 * @returns Array of supported language codes
 */
export declare function getSupportedLanguages(): string[];
export {};
