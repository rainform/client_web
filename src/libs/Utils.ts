export default class Utils {
  static toObject(obj: any): object {
    return JSON.parse(JSON.stringify(obj));
  }
}
