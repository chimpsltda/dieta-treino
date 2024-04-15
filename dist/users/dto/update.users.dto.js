"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_users_dto_1 = require("./create.users.dto");
class UpdateUserDto extends (0, swagger_1.OmitType)(create_users_dto_1.CreateUserDTO, ['codigo']) {
}
exports.UpdateUserDto = UpdateUserDto;
//# sourceMappingURL=update.users.dto.js.map