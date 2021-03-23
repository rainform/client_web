export default class UserStatus {
  isAttendLastEvent: boolean;

  constructor(isAttendLastEvent = false) {
    this.isAttendLastEvent = isAttendLastEvent;
  }
}
