/*
  Warnings:

  - Added the required column `sub` to the `tb_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_users" ADD COLUMN     "sub" TEXT NOT NULL,
ALTER COLUMN "givenName" DROP NOT NULL,
ALTER COLUMN "familyName" DROP NOT NULL,
ALTER COLUMN "photo" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT true;
