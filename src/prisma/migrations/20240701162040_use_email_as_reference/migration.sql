/*
  Warnings:

  - You are about to drop the column `codigo_usuario` on the `dados_diario` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email,data_atual]` on the table `dados_diario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `dados_diario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "dados_diario" DROP CONSTRAINT "dados_diario_codigo_usuario_fkey";

-- DropIndex
DROP INDEX "dados_diario_codigo_usuario_data_atual_key";

-- AlterTable
ALTER TABLE "dados_diario" DROP COLUMN "codigo_usuario",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "dados_diario_email_data_atual_key" ON "dados_diario"("email", "data_atual");

-- AddForeignKey
ALTER TABLE "dados_diario" ADD CONSTRAINT "dados_diario_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
