import { G2PProcessor } from "./g2p";
export interface HomographEntry {
    pronunciation: string;
    pos: string;
}
export interface HomographDict {
    [word: string]: HomographEntry[];
}
export declare class G2PModel implements G2PProcessor {
    private dictionary;
    private homographs;
    private disableDict;
    readonly id = "en-g2p";
    readonly name = "English G2P Processor";
    readonly supportedLanguages: string[];
    constructor(options?: {
        disableDict?: boolean;
    });
    predict(word: string, language?: string, pos?: string): string | null;
    private predictInternal;
    private matchPos;
    private wellKnown;
    private tryMorphologicalAnalysis;
    private tryDecomposition;
    private syllabify;
    private assignStress;
    private isSyllableHeavy;
    private isLikelyCompound;
    private syllableToIPA;
    addPronunciation(word: string, pronunciation: string): void;
}
export default G2PModel;
