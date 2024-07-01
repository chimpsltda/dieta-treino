/*
  Warnings:

  - A unique constraint covering the columns `[codigo_usuario,data_atual]` on the table `dados_diario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `calorias_consumidas` to the `dados_diario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequencia_academia` to the `dados_diario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempo_exercicio` to the `dados_diario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "dados_diario" ADD COLUMN     "calorias_consumidas" INTEGER NOT NULL,
ADD COLUMN     "frequencia_academia" INTEGER NOT NULL,
ADD COLUMN     "tempo_exercicio" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "dados_diario_codigo_usuario_data_atual_key" ON "dados_diario"("codigo_usuario", "data_atual");
