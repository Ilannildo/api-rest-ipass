import { Enroll } from "../entities/Enroll";

export type IEnrollRepository = {
  findByUserId?(uid: string):Promise<Enroll>;
  save(enroll: Enroll): Promise<Enroll>;
}