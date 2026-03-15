import { G2PProcessor } from "./g2p";
declare class RussianG2PModel implements G2PProcessor {
    readonly id = "ru-g2p";
    readonly name = "Russian G2P Processor";
    readonly supportedLanguages: string[];
    predict(word: string, language?: string, pos?: string): string | null;
    private processRussian;
    addPronunciation(word: string, pronunciation: string): void;
}
export default RussianG2PModel;
