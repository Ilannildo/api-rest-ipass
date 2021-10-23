import { User } from "./User";

export class RefreshToken {
  public readonly id?: string;

  public expiresIn: number;
  public user: User;
  public userId: string;

  constructor(
    props: Omit<RefreshToken, 'id'>,
  ) {
    Object.assign(this, props);
  }
}