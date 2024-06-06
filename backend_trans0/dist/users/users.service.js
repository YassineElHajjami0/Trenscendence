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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("../database/database.service");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async validateUserId(uid) {
        const user = await this.findOne(uid);
        return user;
    }
    async validateUser(username, pass) {
        const user = await this.findUserByUsername(username);
        if (!user) {
            throw new common_1.HttpException('Invalid Username', common_1.HttpStatus.BAD_REQUEST);
        }
        const isMatch = await bcrypt.compare(pass, user?.password);
        if (isMatch) {
            const { password, ...result } = user;
            return result;
        }
        throw new common_1.HttpException('Invalid password', common_1.HttpStatus.BAD_REQUEST);
    }
    async create(createUserDto) {
        createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
        try {
            const user = await this.databaseService.t_User.create({
                data: createUserDto,
            });
            return user;
        }
        catch (err) {
            return err.message;
        }
    }
    async findAll() {
        const users = await this.databaseService.t_User.findMany({});
        return users;
    }
    async findOne(uid) {
        const user = await this.databaseService.t_User.findFirst({
            where: { uid },
        });
        if (user) {
            if (user.avatar == '')
                user.avatar = 'default.png';
            const finalUser = {
                ...user,
                oldPassword: '',
                newPassword: '',
                confirmedPassword: '',
            };
            return finalUser;
        }
        return user;
    }
    async findOneName(username) {
        const user = await this.databaseService.t_User.findFirst({
            where: { username },
        });
        if (!user) {
            throw new common_1.HttpException('no Username', common_1.HttpStatus.NOT_FOUND);
        }
        return user;
    }
    async findUserByUsername(username) {
        const user = await this.databaseService.t_User.findFirst({
            where: { username },
        });
        return user;
    }
    async findByEmail(email) {
        const user = await this.databaseService.t_User.findFirst({
            where: { email },
        });
        return user;
    }
    async update(uid, updateUserDto) {
        console.log('updateUserDto : ', updateUserDto);
        if (updateUserDto.newPassword &&
            updateUserDto.confirmedPassword &&
            updateUserDto.oldPassword) {
            const userInDb = await this.findOne(uid);
            const user = await this.validateUser(userInDb.username, updateUserDto.oldPassword);
            if (!user) {
                throw new common_1.BadRequestException('Incorrect old password');
            }
            updateUserDto.password = await bcrypt.hash(updateUserDto.newPassword, 10);
            const { newPassword, oldPassword, confirmedPassword, ...result } = updateUserDto;
            return this.databaseService.t_User.update({
                where: { uid },
                data: result,
            });
        }
        return this.databaseService.t_User.update({
            where: { uid },
            data: updateUserDto,
        });
    }
    async setTwoFaSecret(twoFASecret, uid) {
        this.update(uid, { twoFASecret });
    }
    async remove(uid) {
        return this.databaseService.t_User.delete({ where: { uid } });
    }
    async turnOnTwoFA(uid) {
        this.update(uid, { twoFA: true });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], UsersService);
//# sourceMappingURL=users.service.js.map