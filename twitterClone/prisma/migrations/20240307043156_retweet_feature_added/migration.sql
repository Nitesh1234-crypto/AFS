-- CreateTable
CREATE TABLE "Retweet" (
    "id" SERIAL NOT NULL,
    "retweetby" INTEGER NOT NULL,
    "tweetid" INTEGER NOT NULL,

    CONSTRAINT "Retweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Retweet" ADD CONSTRAINT "Retweet_retweetby_fkey" FOREIGN KEY ("retweetby") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retweet" ADD CONSTRAINT "Retweet_tweetid_fkey" FOREIGN KEY ("tweetid") REFERENCES "Twitt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
