/*
  Warnings:

  - A unique constraint covering the columns `[link_anime]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Anime_link_anime_key" ON "Anime"("link_anime");
