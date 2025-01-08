import { TimeStamp, ProjectID, ProjectName } from "./HBTypes"
import { HistoricalEvent } from "./HistoricalEvent"

export class Project{

  // 必須プロパティ
  private _id         : ProjectID;
  dateInfo            : TimeStamp;
  historicalEvents    : HistoricalEvent[];
  // chronologies     : Chronology[];    現Termでは不使用

  // 任意プロパティ
  name ?: ProjectName;

  constructor(id: ProjectID, date: Date){
    this._id              = id;
    this.dateInfo         = { created: date, upadted: date, updatedHistory: [] };
    this.historicalEvents = [];
    // this.chronologies  = []:   現Termでは不使用
  }

  get id(){
    return this._id;
  }
  
}

export default Project;