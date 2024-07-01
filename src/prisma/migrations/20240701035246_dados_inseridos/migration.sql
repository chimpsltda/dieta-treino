-- CreateTable
CREATE TABLE "dados_diario" (
    "codigo" SERIAL NOT NULL,
    "agua_consumida" DOUBLE PRECISION NOT NULL,
    "peso_atual" DOUBLE PRECISION NOT NULL,
    "codigo_usuario" INTEGER NOT NULL,

    CONSTRAINT "dados_diario_pkey" PRIMARY KEY ("codigo")
);

-- AddForeignKey
ALTER TABLE "dados_diario" ADD CONSTRAINT "dados_diario_codigo_usuario_fkey" FOREIGN KEY ("codigo_usuario") REFERENCES "users"("codigo") ON DELETE RESTRICT ON UPDATE CASCADE;
