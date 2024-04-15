"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAuthDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_users_dto_1 = require("../../users/dto/create.users.dto");
class LoginAuthDTO extends (0, swagger_1.PickType)(create_users_dto_1.CreateUserDTO, ['email', 'senha']) {
}
exports.LoginAuthDTO = LoginAuthDTO;
//# sourceMappingURL=login.auth.dto.js.map