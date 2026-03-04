/**
 * Chinese Grapheme-to-Phoneme (G2P) conversion system
 * Converts Chinese text to International Phonetic Alphabet (IPA) notation
 */
import { G2PProcessor } from "./g2p";
/**
 * Result interface for Chinese pinyin conversion
 */
export interface ChinesePinyinResult {
    /** Original pinyin with tone number */
    pinyin: string;
    /** Tone number (1-5, 0 for neutral) */
    tone: number;
    /** IPA representation with tone marks */
    ipa: string;
    /** Original Chinese character */
    word: string;
}
declare class G2PModel implements G2PProcessor {
    readonly id = "zh-g2p";
    readonly name = "Chinese G2P Processor";
    readonly supportedLanguages: string[];
    predict(word: string, language?: string, pos?: string): string | null;
    /**
     * Convert Chinese text to IPA phonetic notation
     * @param text - Chinese text to convert
     * @returns Space-separated IPA string
     */
    textToIPA(text: string): string;
    /**
     * Convert Chinese text to Zhuyin (Bopomofo) notation
     * @param text - Chinese text to convert
     * @returns Space-separated Zhuyin string with tone numbers
     */
    textToZhuyin(text: string): string;
    /**
     * Convert Chinese text to detailed pinyin analysis results
     * @param text - Chinese text to convert
     * @returns Array of detailed conversion results
     */
    textToPinyinResults(text: string): ChinesePinyinResult[];
    /**
     * Convert pinyin syllable to IPA with tone
     * @param pinyin - Pinyin syllable (without tone)
     * @param tone - Tone number (1-5)
     * @returns IPA string with tone marks
     */
    private pinyinToIPA;
    /**
     * Decompose pinyin into initial and final components
     * @param pinyin - Complete pinyin syllable
     * @returns Object with initial and final parts
     */
    private decomposePinyin;
    /**
     * Parse pinyin string with tone number
     * @param pinyinWithTone - Pinyin with tone number suffix
     * @returns Object with syllable and tone
     */
    private parsePinyinWithTone;
    /**
     * Check if a character is Chinese
     * @param char - Character to check
     * @returns True if character is Chinese
     */
    private isChinese;
    addPronunciation(word: string, pronunciation: string): void;
}
export default G2PModel;
