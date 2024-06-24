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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./constants");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(loginAuthDto) {
        const user = await this.usersService.findOneEmail(loginAuthDto.email);
        if (!user || user.senha !== loginAuthDto.senha) {
            throw new common_1.UnauthorizedException();
        }
        const payload = { email: user.email, sub: user.codigo };
        const token = await this.jwtService.signAsync(payload, {
            secret: constants_1.jwtConstants.secret,
        });
        const encryptedToken = this.simpleEncrypt(token);
        return { access_token: encodeURIComponent(encryptedToken) };
    }
    simpleEncrypt(text) {
        return text.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
    }
    simpleDecrypt(encryptedText) {
        return encryptedText.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map