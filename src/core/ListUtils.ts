export default {
  hasResults<T>(list: T[]): boolean {
    return typeof list === "object" && !!list && list.length ? list.length > 0 : false;
  },
  isEmpty<T>(list: T[]): boolean {
    return !this.hasResults(list);
  },
  head<T>(list: T[]): T {
    return this.hasResults(list) ? list[0] : null;
  }
};
