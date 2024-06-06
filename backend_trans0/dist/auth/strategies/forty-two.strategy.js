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
exports.FortyTwoStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_42_1 = require("passport-42");
const auth_service_1 = require("../auth.service");
let FortyTwoStrategy = class FortyTwoStrategy extends (0, passport_1.PassportStrategy)(passport_42_1.Strategy, 'FortyTwo') {
    constructor(authService) {
        super({
            clientID: 'u-s4t2ud-2eb7839586c2db3c5cb771db02b6ee638d6ae43d54ac0db84c2a8fdbfb61e654',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/fortyTwo/redirect/',
            Scope: ['profile'],
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile) {
        const { login, email } = profile._json;
        const user = {
            username: login,
            email: email,
            password: this.authService.generateRandomPassword(10),
            strategy: '42',
        };
        return user;
    }
};
exports.FortyTwoStrategy = FortyTwoStrategy;
exports.FortyTwoStrategy = FortyTwoStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], FortyTwoStrategy);
//# sourceMappingURL=forty-two.strategy.js.map