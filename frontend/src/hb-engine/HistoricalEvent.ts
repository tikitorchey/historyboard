import { TimeStamp, HistoricalEventID, ProjectID } from "./HBTypes"

type TimeLineInfo   = { timestamp: Date };
type AdditionalInfo = { characters: string[], images: string[], memos: string[] };

export class HistoricalEvent{

  // 必須プロパティ
  private _heID : HistoricalEventID;
  private _pjID : ProjectID;    // イベントが所属するプロジェクトのID
  dateInfo      : TimeStamp;    // レコードの更新日時などツール上の管理用情報　年表上のイベントの発生日時ではない

  // 任意プロパティ
  header  ?: string;                    // イベントのタイトルを示すテキスト
  body    ?: string;                    // イベントの説明を示すテキスト
  timeLineInfo    ?: TimeLineInfo;      // 年表上のイベントの発生日時などの情報を集約したオブジェクト
  additionalInfo  ?: AdditionalInfo;    // イベントに関する補足情報を集約したオブジェクト

  constructor(heID: HistoricalEventID, pjID: ProjectID, date: Date){
    this._heID = heID;
    this._pjID = pjID;
    this.dateInfo       = { created: date, upadted: date, updatedHistory: [] };
    this.additionalInfo = { characters: [], images: [], memos: [] };
  }

  get heID(){
    return this._heID;
  }

  get pjid(){
    return this._pjID;
  }

}
export default HistoricalEvent;