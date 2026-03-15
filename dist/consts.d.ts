/**
 * Phonemization constants and mappings
 */
export declare const PUNCTUATION = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
/**
 * Core ARPABET to IPA mapping
 */
export declare const ARPABET_TO_IPA: Record<string, string>;
/**
 * Stress level mappings
 */
export declare const IPA_STRESS_MAP: Record<string, string>;
/**
 * Chinese tone mapping from Unicode tone marks to arrow symbols
 */
export declare const CHINESE_TONE_TO_ARROW: Record<string, string>;
/**
 * Reverse mappings for conversion utilities
 */
export declare const IPA_TO_ARPABET: Record<string, string>;
export declare const IPA_TO_STRESS: Record<string, string>;
/**
 * Pinyin initials (聲母) to Zhuyin mapping
 */
export declare const PINYIN_INITIALS_TO_ZHUYIN: Record<string, string>;
/**
 * Pinyin finals (韻母) to Zhuyin mapping
 */
export declare const PINYIN_FINALS_TO_ZHUYIN: Record<string, string>;
