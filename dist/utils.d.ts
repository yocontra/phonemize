/**
 * Utility functions for phoneme format conversion
 */
/**
 * Convert IPA phonetic notation to ARPABET format
 * @param ipa - IPA phonetic string
 * @returns ARPABET formatted string
 */
export declare function ipaToArpabet(ipa: string): string;
/**
 * Convert ARPABET phonetic notation to IPA format
 * @param arpabet - ARPABET phonetic string
 * @returns IPA formatted string
 */
export declare function arpabetToIpa(arpabet: string): string;
/**
 * Convert Chinese IPA tone marks to arrow format
 * @param ipa - IPA string with Chinese tone marks
 * @returns IPA string with arrow tone symbols
 */
export declare function convertChineseTonesToArrows(ipa: string): string;
/**
 * Convert pinyin syllable to Zhuyin (Bopomofo) notation
 * @param pinyin - Pinyin syllable with tone number (e.g., "zhong1", "wen2")
 * @returns Zhuyin notation with tone number (e.g., "ㄓㄨㄥ1", "ㄨㄣ2")
 */
export declare function pinyinToZhuyin(pinyin: string): string;
/**
 * Convert Chinese IPA arrow format back to Unicode tone marks
 * @param ipa - IPA string with arrow tone symbols
 * @returns IPA string with Unicode tone marks
 */
export declare function convertChineseTonesToUnicode(ipa: string): string;
export declare function resolveJson<T>(data: {
    default: T;
} | T): T;
