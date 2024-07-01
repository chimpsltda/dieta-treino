"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosDiarioService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
let DadosDiarioService = class DadosDiarioService {
    constructor(databaseservice) {
        this.databaseservice = databaseservice;
    }
    async insert(createDadoDiarioDto) {
        const data = new Date(createDadoDiarioDto.data_atual);
        data.setHours(0, 0, 0, 0);
        createDadoDiarioDto.data_atual = data;
        const dadosexistente = await this.findOneData(createDadoDiarioDto.data_atual);
        console.log(dadosexistente);
        if (dadosexistente) {
            return this.databaseservice.dadosDiario.update({
                where: {
                    codigo: (await dadosexistente).codigo,
                },
                data: createDadoDiarioDto
            });
        }
        else {
            return this.databaseservice.dadosDiario.create({
                data: createDadoDiarioDto
            });
        }
    }
    async findOneCode(id) {
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0);
        return this.databaseservice.dadosDiario.findUnique({
            where: {
                codigo_usuario: id,
                data_atual: hoje,
            },
        });
    }
    async findOneData(data_atual) {
        const data = new Date(data_atual);
        data.setHours(0, 0, 0, 0);
        return this.databaseservice.dadosDiario.findUnique({
            where: {
                data_atual: data,
            }
        });
    }
    async showall() {
        return this.databaseservice.dadosDiario.findMany();
    }
};
exports.DadosDiarioService = DadosDiarioService;
exports.DadosDiarioService = DadosDiarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], DadosDiarioService);
//# sourceMappingURL=dados.diario.service.js.map