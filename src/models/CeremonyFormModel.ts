// --------------- type model interface 抽象的名詞

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

export interface AttendInfoModel {
  name: string;
  gender: string;
  age: string;
  attendDate: string;
  leaveDate: string;
  note: string;
}

export interface CeremonyFormModel {
  personalInformation: PersonalInformationModel;
  longevityBoards: Array<LongevityBoardModel>;
  prayBoards: Array<PrayBoardModel>;
  AttendInfoList: Array<AttendInfoModel>;
}

// --------------- class object 實體化的名詞 會動的

export class PersonalInformation implements PersonalInformationModel {
  name: string;

  address: string;

  phone: string;

  telephone: string;

  email: string;

  line: string;

  wechat: string;

  constructor(name: string, address: string, phone: string, telephone: string, email: string, line: string, wechat: string) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.telephone = telephone;
    this.email = email;
    this.line = line;
    this.wechat = wechat;
  }
}

export class LongevityBoard implements LongevityBoardModel {
  streamId: string;

  name: string;

  constructor(name: string) {
    this.name = name;
    this.streamId = '';
  }
}

export class PrayBoards implements PrayBoardModel {
  registerName: string;

  prayType: string;

  prayDetail: string;

  constructor(registerName: string, prayType: string, prayDetail: string) {
    this.registerName = registerName;
    this.prayType = prayType;
    this.prayDetail = prayDetail;
  }
}

export class AttendInfo implements AttendInfoModel {
  name: string;

  gender: string;

  age: string;

  attendDate: string;

  leaveDate: string;

  note: string;

  constructor(name: string, gender: string, age: string, attendDate: string, leaveDate: string, note: string) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.attendDate = attendDate;
    this.leaveDate = leaveDate;
    this.note = note;
  }
}

export class CeremonyForm implements CeremonyFormModel {
  personalInformation: PersonalInformationModel;

  longevityBoards: LongevityBoardModel[];

  prayBoards: PrayBoardModel[];

  AttendInfoList: AttendInfoModel[];

  constructor() {
    this.personalInformation = new PersonalInformation('', '', '', '', '', '', '');
    this.longevityBoards = [
      new LongevityBoard('peoplename'),
    ];
    this.prayBoards = [
      new PrayBoards('registerName', 'prayType', 'prayDetail'),
    ];
    this.AttendInfoList = [
      new AttendInfo('', '', '', '', '', ''),
    ];
  }
}
