export interface PersonalInformationModel {
  name: string;
  address: string;
  phone: string;
  telephone: string;
  email: string;
  line: string;
  wechat: string;
}

export interface LongevityBoardModel {
  streamId: string; // e.g. 15_2 15_3
  name: string;
}

export interface PrayBoardModel {
  registerName: string;
  prayType: string;
  prayDetail: string;
}

export interface CeremonyModel {
  name: string;
  gender: string;
  age: string;
  attendDate: string;
  leaveDate: string;
  note: string;
}

export interface FormModel {
  personalInformation: PersonalInformationModel;
  longevityBoards: Array<LongevityBoardModel>;
  prayBoards: Array<PrayBoardModel>;
  ceremonyList: Array<CeremonyModel>;
}
