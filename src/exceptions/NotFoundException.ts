export default class NotFoundException extends Error {
  constructor(id?: number | string) {
    super(`Entity with identifier ${id} does not exist`);
    Error.captureStackTrace(this, NotFoundException);
  }
}
