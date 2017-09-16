export default class ListUtils {
  static hasResults<T>(list: T[]): boolean {
    return typeof list === "object" && !!list && list.length ? list.length > 0 : false;
  }

  static isEmpty<T>(list: T[]): boolean {
    return !ListUtils.hasResults(list);
  }

  static head<T>(list: T[]): T {
    return ListUtils.hasResults(list) ? list[0] : null;
  }
}
