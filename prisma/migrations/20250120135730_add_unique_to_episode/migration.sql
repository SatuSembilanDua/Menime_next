/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Episode_link_key" ON "Episode"("link");
