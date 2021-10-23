-- CreateTable
CREATE TABLE "tb_users" (
    "uid" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "givenName" TEXT NOT NULL,
    "familyName" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "tb_refresh_token" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "tb_refresh_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_enroll" (
    "uid" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_enroll_pkey" PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_email_key" ON "tb_users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_name_key" ON "tb_users"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tb_refresh_token_userId_key" ON "tb_refresh_token"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "tb_enroll_userId_key" ON "tb_enroll"("userId");

-- AddForeignKey
ALTER TABLE "tb_refresh_token" ADD CONSTRAINT "tb_refresh_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_enroll" ADD CONSTRAINT "tb_enroll_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
