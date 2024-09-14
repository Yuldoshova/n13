import { BaseException } from "./base.exception.js";

export class ForbiddenException extends BaseException {

  constructor(message) {
    super();
    this.statusCode = 403;
    this.name = "Forbidden Exception";
    this.message = message;
  }

}
