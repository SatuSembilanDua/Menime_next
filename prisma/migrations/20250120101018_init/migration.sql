-- CreateTable
CREATE TABLE "Anime" (
    "id_anime" TEXT NOT NULL,
    "judul_anime" TEXT NOT NULL,
    "link_anime" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "sts" INTEGER NOT NULL,
    "src" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "studio" TEXT,
    "season" TEXT,
    "tags" TEXT,
    "ket_sts" INTEGER NOT NULL,
    "display" INTEGER NOT NULL,
    "gambar" TEXT NOT NULL,

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id_anime")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id_episode" TEXT NOT NULL,
    "id_anime" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "eps" TEXT NOT NULL,
    "judul" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "id_eps" INTEGER NOT NULL,
    "vid" TEXT NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id_episode")
);

-- CreateTable
CREATE TABLE "Meta" (
    "id" SERIAL NOT NULL,
    "hash" TEXT NOT NULL,
    "command" TEXT NOT NULL,
    "status" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Meta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Riwayat" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Riwayat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Meta_hash_key" ON "Meta"("hash");

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_id_anime_fkey" FOREIGN KEY ("id_anime") REFERENCES "Anime"("id_anime") ON DELETE RESTRICT ON UPDATE CASCADE;
