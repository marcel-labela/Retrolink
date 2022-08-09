-- CreateTable
CREATE TABLE "IssueRequest" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "IssueRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IssueRequest_id_key" ON "IssueRequest"("id");
