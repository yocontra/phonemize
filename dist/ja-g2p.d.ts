import { G2PProcessor } from "./g2p";
declare class JapaneseG2PModel implements G2PProcessor {
    readonly id = "ja-g2p";
    readonly name = "Japanese G2P Processor";
    readonly supportedLanguages: string[];
    predict(word: string, language?: string, pos?: string): string | null;
    addPronunciation(word: string, pronunciation: string): void;
    private processJapanese;
}
export default JapaneseG2PModel;
