import { Enroll } from "../../entities/Enroll";
import { client } from "../../prisma/client";
import { IEnrollRepository } from "../IEnrollRepository";
import { hash } from 'bcryptjs';

export class PostgresEnrollRepository implements IEnrollRepository {
  async findByUserId(uid: string): Promise<Enroll> {
    const enroll = await client.enroll.findFirst({
      where: {
        userId: uid
      }
    });

    return enroll;
  }

  async save(enroll: Enroll): Promise<Enroll> {
    // const passwordHash = await hash(enroll.passwordMaster, 8);
    const enrollCreated = await client.enroll.create({
      data: {
        publicKey: enroll.publicKey,
        userId: enroll.userId,
      },
    });

    return enrollCreated;
  }
}