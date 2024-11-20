-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "option" TEXT NOT NULL DEFAULT 'none',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "subtitle" TEXT,
    "language" TEXT,
    "category" TEXT,
    "demographic" TEXT,
    "topic" TEXT,
    "context" TEXT,
    "comment" TEXT,
    "vidurl" TEXT,
    "thumbnail" TEXT NOT NULL DEFAULT '/profileimg.jpg',
    "thumbimg" TEXT NOT NULL DEFAULT '/profileimg.jpg',
    "nation" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
