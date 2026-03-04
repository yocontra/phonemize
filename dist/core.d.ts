/**
 * Phonemize Library - Main API
 *
 * A comprehensive text-to-phoneme conversion library supporting:
 * - IPA (International Phonetic Alphabet) output
 * - ARPABET phonetic notation
 * - Number and abbreviation expansion
 */
import { Tokenizer, TokenizerOptions, PhonemeToken } from "./tokenizer";
import { useG2P } from "./g2p";
export type { TokenizerOptions, PhonemeToken };
export { Tokenizer, useG2P };
export type { G2PProcessor } from "./g2p";
/**
 * Convert text to phonetic representation
 *
 * @param text - Input text to convert
 * @param options - Configuration options with returnArray flag
 * @returns Array of phoneme tokens with metadata
 */
export declare function phonemize(text: string, options: TokenizerOptions & {
    returnArray: true;
}): PhonemeToken[];
/**
 * Convert text to phonetic representation
 *
 * @param text - Input text to convert
 * @param options - Configuration options
 * @returns Space-separated phoneme string
 */
export declare function phonemize(text: string, options?: TokenizerOptions): string;
/**
 * Convert text to phonetic representation (legacy array format)
 *
 * @param text - Input text to convert
 * @param returnArray - If true, return array format
 * @returns Array of phoneme tokens
 */
export declare function phonemize(text: string, returnArray: true): PhonemeToken[];
/**
 * Convert text to International Phonetic Alphabet (IPA) notation
 *
 * @param text - Input text to convert
 * @param options - Configuration options (format will be overridden to 'ipa')
 * @returns IPA phonetic string
 *
 * @example
 * ```typescript
 * toIPA("hello world") // "həloʊ wɝld"
 * toIPA("中文", { anyAscii: false }) // "ʈʂʊŋ˥˥ wən˧˥"
 * ```
 */
export declare function toIPA(text: string, options?: Omit<TokenizerOptions, "format">): string;
/**
 * Convert text to ARPABET phonetic notation
 *
 * @param text - Input text to convert
 * @param options - Configuration options (format will be overridden to 'arpabet')
 * @returns ARPABET phonetic string
 *
 * @example
 * ```typescript
 * toARPABET("hello world") // "HH AH L OW W ER L D"
 * toARPABET("testing", { stripStress: true }) // "T EH S T IH NG"
 * ```
 */
export declare function toARPABET(text: string, options?: Omit<TokenizerOptions, "format">): string;
/**
 * Convert text to Zhuyin (Bopomofo) notation
 * Chinese characters are converted to Zhuyin with tone numbers,
 * non-Chinese characters are converted to IPA as fallback.
 *
 * @param text - Input text to convert
 * @param options - Configuration options (format will be overridden to 'zhuyin')
 * @returns Zhuyin phonetic string with tone numbers
 *
 * @example
 * ```typescript
 * toZhuyin("中文") // "ㄓㄨㄥ1 ㄨㄣ2"
 * toZhuyin("中文 hello") // "ㄓㄨㄥ1 ㄨㄣ2 həˈloʊ"
 * toZhuyin("測試", { stripStress: true }) // "ㄘㄜ4 ㄕ4"
 * ```
 */
export declare function toZhuyin(text: string, options?: Omit<TokenizerOptions, "format">): string;
/**
 * Add custom pronunciation to the internal dictionary
 *
 * @param word - Word to add pronunciation for
 * @param pronunciation - IPA pronunciation string
 *
 * @example
 * ```typescript
 * addPronunciation("github", "ɡɪthʌb");
 * toIPA("github") // "ɡɪthʌb"
 * ```
 */
export declare function addPronunciation(word: string, pronunciation: string, language?: string): void;
/**
 * Create a custom tokenizer instance with specific configuration
 *
 * @param options - Tokenizer configuration options
 * @returns Configured Tokenizer instance
 *
 * @example
 * ```typescript
 * const tokenizer = createTokenizer({
 *   format: "ipa",
 *   stripStress: true,
 *   separator: "-"
 * });
 *
 * const result = tokenizer.tokenizeToString("hello");
 * ```
 */
export declare function createTokenizer(options?: TokenizerOptions): Tokenizer;
/**
 * Phonemize library default export
 * Provides all core functions and classes for CommonJS compatibility
 */
declare const phonemizer: {
    readonly phonemize: typeof phonemize;
    readonly toIPA: typeof toIPA;
    readonly toARPABET: typeof toARPABET;
    readonly toZhuyin: typeof toZhuyin;
    readonly addPronunciation: typeof addPronunciation;
    readonly createTokenizer: typeof createTokenizer;
    readonly useG2P: typeof useG2P;
    readonly Tokenizer: typeof Tokenizer;
};
export default phonemizer;
