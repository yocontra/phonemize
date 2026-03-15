import { G2PProcessor } from "./g2p";
declare class KoreanG2PModel implements G2PProcessor {
    readonly id = "ko-g2p";
    readonly name = "Korean G2P Processor";
    readonly supportedLanguages: string[];
    predict(word: string, language?: string, pos?: string): string | null;
    addPronunciation(word: string, pronunciation: string): void;
    private decomposeRomajaSyllable;
    private processKorean;
}
export default KoreanG2PModel;
