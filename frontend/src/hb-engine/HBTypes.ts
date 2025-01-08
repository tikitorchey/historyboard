// 全体
export type TimeStamp = { created?: Date, upadted?: Date, updatedHistory: Date[] };

// プロジェクト関連
export type ProjectID   = "pj_${number}";
export type ProjectName = string;

// イベント関連
export type HistoricalEventID = "heid_${number}";