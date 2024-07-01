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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_users_dto_1 = require("./dto/create.users.dto");
const update_users_dto_1 = require("./dto/update.users.dto");
const auth_service_1 = require("../auth/auth.service");
const jwt_1 = require("@nestjs/jwt");
let UsersController = class UsersController {
    constructor(usersService, authService, jwtService) {
        this.usersService = usersService;
        this.authService = authService;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const user = await this.usersService.create(createUserDto);
        const encryptedUser = this.authService.simpleEncrypt(JSON.stringify(user));
        return { encryptedUser: encodeURIComponent(encryptedUser) };
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async findOneCodigo(token) {
        const decryptedData = this.authService.simpleDecrypt(decodeURIComponent(token));
        console.log('Decrypted Data:', decryptedData);
        const payload = this.jwtService.decode(decryptedData);
        if (typeof payload !== 'object' || payload === null) {
            throw new Error('Invalid token payload');
        }
        const userId = payload.sub;
        return this.usersService.findOneCode(userId);
    }
    async update(token, updateUserDto) {
        const decryptedData = this.authService.simpleDecrypt(decodeURIComponent(token));
        const payload = this.jwtService.decode(decryptedData);
        if (typeof payload !== 'object' || payload === null) {
            throw new Error('Invalid token payload');
        }
        const userId = payload.sub;
        return this.usersService.update(userId, updateUserDto);
    }
    async remove(token) {
        const decryptedData = this.authService.simpleDecrypt(decodeURIComponent(token));
        const payload = this.jwtService.decode(decryptedData);
        if (typeof payload !== 'object' || payload === null) {
            throw new Error('Invalid token payload');
        }
        const userId = payload.sub;
        return this.usersService.remove(userId);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUserDTO]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneCodigo", null);
__decorate([
    (0, common_1.Patch)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_users_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService,
        jwt_1.JwtService])
], UsersController);
//# sourceMappingURL=users.controller.js.map