/*
  Warnings:

  - You are about to drop the column `calorias_consumidas` on the `dados_diario` table. All the data in the column will be lost.
  - You are about to drop the column `frequencia_academia` on the `dados_diario` table. All the data in the column will be lost.
  - You are about to drop the column `tempo_exercicio` on the `dados_diario` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "dados_diario_codigo_usuario_data_atual_key";

-- AlterTable
ALTER TABLE "dados_diario" DROP COLUMN "calorias_consumidas",
DROP COLUMN "frequencia_academia",
DROP COLUMN "tempo_exercicio";
