-- CreateTable
CREATE TABLE "Twitt" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Twitt_pkey" PRIMARY KEY ("id")
);
