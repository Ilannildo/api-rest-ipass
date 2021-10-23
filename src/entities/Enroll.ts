import { User } from "./User"

export class Enroll {
  public uid?: string;
  public publicKey?: string;
  public passwordMaster: string;
  // public user: User;
  public userId: string;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(
    props: Enroll
  ) {
    Object.assign(this, props);
  }
}