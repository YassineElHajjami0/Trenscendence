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
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const otplib_1 = require("otplib");
const qrcode_1 = require("qrcode");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUserId(uid) {
        const user = await this.usersService.validateUserId(uid);
        return user;
    }
    async validateUser(username, pass) {
        const user = await this.usersService.validateUser(username, pass);
        return user;
    }
    async login(user) {
        const payload = {
            username: user.username,
            sub: user.uid,
            role: user.role,
        };
        return this.jwtService.sign(payload);
    }
    async signUp(createUserDto) {
        const user = await this.usersService.create(createUserDto);
        return user;
    }
    async signUpWithProvider(createUserDto) {
        let user = await this.usersService.findByEmail(createUserDto.email);
        if (!user) {
            user = await this.signUp(createUserDto);
        }
        const bearer_token = await this.login(user);
        return {
            uid: user.uid,
            bearer_token: bearer_token,
        };
    }
    async fortyTwoLogin(user) {
        if (!user) {
            return 'no user found';
        }
        const payload = { user };
        return this.jwtService.sign(payload);
    }
    generateRandomPassword(length) {
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
    async generateTwoFactorAuthenticationSecret(user) {
        const secret = otplib_1.authenticator.generateSecret();
        const otpAuthUrl = otplib_1.authenticator.keyuri(user.email, 'Transcendance', secret);
        await this.usersService.setTwoFaSecret(secret, user.uid);
        await this.usersService.turnOnTwoFA(user.uid);
        return {
            secret,
            otpAuthUrl,
        };
    }
    async generateQrCodeDataURL(otpAuthUrl) {
        return (0, qrcode_1.toDataURL)(otpAuthUrl);
    }
    isTwoFactorCodeValid(body) {
        return otplib_1.authenticator.verify({
            token: body.twoFaCode,
            secret: body.twoFASecret,
        });
    }
    async loginWith2fa(userWithoutPsw) {
        const payload = {
            email: userWithoutPsw.email,
            isTwoFactorAuthenticationEnabled: !!userWithoutPsw.twoFA,
            isTwoFactorAuthenticated: true,
        };
        return {
            email: payload.email,
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map