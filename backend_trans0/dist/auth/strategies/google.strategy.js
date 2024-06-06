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
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth2_1 = require("passport-google-oauth2");
const auth_service_1 = require("../auth.service");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth2_1.Strategy, 'google') {
    constructor(authService) {
        super({
            clientID: '93931900633-fh47s9vlc3kgr0v235u6baudv916h2pc.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope: ['profile', 'email'],
        });
        this.authService = authService;
    }
    async validate(_accessToken, _refreshToken, profile, done) {
        console.log('SECOND');
        const { name, emails } = profile;
        console.log('-------NAME', name);
        console.log('-------EMAILS', emails);
        const user = {
            username: `${name.givenName}_${name.familyName}`,
            email: emails[0].value,
            password: this.authService.generateRandomPassword(10),
            strategy: 'google',
        };
        done(null, user);
        return user;
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], GoogleStrategy);
//# sourceMappingURL=google.strategy.js.map