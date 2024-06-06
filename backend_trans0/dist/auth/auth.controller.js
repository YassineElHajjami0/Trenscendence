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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const local_auth_guard_1 = require("./guards/local-auth.guard");
const public_decorator_1 = require("./decorators/public.decorator");
const forty_two_auth_guard_1 = require("./guards/forty-two-auth.guard");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const user_validation_pipe_1 = require("./pipes/user.validation.pipe");
const google_auth_guard_1 = require("./guards/google-auth.guard");
const users_service_1 = require("../users/users.service");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    setCookie(res, bearer_token) {
        if (!bearer_token)
            bearer_token = '';
        res.cookie(res.cookie('user_token', bearer_token, {
            expires: new Date(Date.now() + 3600000),
        }));
    }
    async login(user, req, res) {
        const bearer_token = await this.authService.login(req.user);
        if (req.user.twoFA) {
            return { user: req.user };
        }
        this.setCookie(res, bearer_token);
        return {
            user_token: bearer_token,
            user: req.user,
        };
    }
    async signup(createUserDto, res) {
        const user = await this.authService.signUp(createUserDto);
        const bearer_token = await this.authService.login(user);
        this.setCookie(res, bearer_token);
        return {
            user_token: bearer_token,
            user: user,
        };
    }
    async logout(res) {
        this.setCookie(res);
        return {};
    }
    async fortyTwoAuth() {
        return {};
    }
    async fortyTwoAuthRedirect(req, res) {
        const createUserDto = {
            username: req.user.username,
            email: req.user.email,
            password: req.user.password,
        };
        const cookies = await this.authService.signUpWithProvider(createUserDto);
        const userData = {
            loggedUser: cookies.uid,
            userToken: cookies.bearer_token,
        };
        res.cookie('userData', JSON.stringify(userData));
        return {
            user_token: cookies.bearer_token,
            user: cookies.uid,
        };
    }
    async googleAuth() {
        console.log('FIRST');
        return {};
    }
    async googleAuthRedirect(req, res) {
        console.log('THIRD');
        const createUserDto = {
            username: req.user.username,
            email: req.user.email,
            password: req.user.password,
        };
        const cookies = await this.authService.signUpWithProvider(createUserDto);
        const userData = {
            loggedUser: cookies.uid,
            userToken: cookies.bearer_token,
        };
        res.cookie('userData', JSON.stringify(userData));
        return {
            user_token: cookies.bearer_token,
            user: cookies.uid,
        };
    }
    async isTokenExpired(req) {
        console.log(req.user);
        if (req.user)
            return { expired: true };
        return { expired: true };
    }
    async register(body) {
        const { otpAuthUrl } = await this.authService.generateTwoFactorAuthenticationSecret(body);
        const qrCodeDataURL = await this.authService.generateQrCodeDataURL(otpAuthUrl);
        console.log(qrCodeDataURL);
        return qrCodeDataURL;
    }
    async authenticate(res, body) {
        const isCodeValid = this.authService.isTwoFactorCodeValid(body);
        if (!isCodeValid) {
            throw new common_1.UnauthorizedException('Wrong authentication code');
        }
        const bearer_token = await this.authService.login(body);
        this.setCookie(res, bearer_token);
        return { userToken: bearer_token, user: body };
    }
};
exports.AuthController = AuthController;
__decorate([
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "setCookie", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('signup'),
    (0, common_1.UsePipes)(new user_validation_pipe_1.CustomValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(forty_two_auth_guard_1.FortyTwoGuard),
    (0, common_1.Get)('login-42'),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "fortyTwoAuth", null);
__decorate([
    (0, common_1.UseGuards)(forty_two_auth_guard_1.FortyTwoGuard),
    (0, common_1.Get)('fortyTwo/redirect'),
    (0, public_decorator_1.Public)(),
    (0, common_1.Redirect)('http://localhost:5252/', 302),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "fortyTwoAuthRedirect", null);
__decorate([
    (0, common_1.Get)('google'),
    (0, common_1.UseGuards)(google_auth_guard_1.GoogleGuard),
    (0, public_decorator_1.Public)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('google/redirect'),
    (0, common_1.UseGuards)(google_auth_guard_1.GoogleGuard),
    (0, public_decorator_1.Public)(),
    (0, common_1.Redirect)('http://localhost:5252/', 302),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthRedirect", null);
__decorate([
    (0, common_1.Get)('tokens'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "isTokenExpired", null);
__decorate([
    (0, common_1.Post)('2fa/turn-on'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('2fa'),
    (0, public_decorator_1.Public)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authenticate", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map