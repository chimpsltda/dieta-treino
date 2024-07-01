"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDadoDiarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_dados_diario_dto_1 = require("./create.dados.diario.dto");
class UpdateDadoDiarioDto extends (0, swagger_1.OmitType)(create_dados_diario_dto_1.CreateDadoDiarioDTO, ['codigo']) {
}
exports.UpdateDadoDiarioDto = UpdateDadoDiarioDto;
//# sourceMappingURL=update.dados.diairo.dto.js.map