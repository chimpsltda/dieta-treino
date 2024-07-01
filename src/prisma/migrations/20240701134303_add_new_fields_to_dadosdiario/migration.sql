/*
  Warnings:

  - A unique constraint covering the columns `[codigo_usuario,data_atual]` on the table `dados_diario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "dados_diario" ADD COLUMN     "calorias_consumidas" INTEGER,
ADD COLUMN     "frequencia_academia" INTEGER,
ADD COLUMN     "tempo_exercicio" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "dados_diario_codigo_usuario_data_atual_key" ON "dados_diario"("codigo_usuario", "data_atual");
