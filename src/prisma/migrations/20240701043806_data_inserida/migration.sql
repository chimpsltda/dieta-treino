/*
  Warnings:

  - A unique constraint covering the columns `[data_atual]` on the table `dados_diario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "dados_diario" ADD COLUMN     "data_atual" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "dados_diario_data_atual_key" ON "dados_diario"("data_atual");
