"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const database_module_1 = require("./database/database.module");
const items_module_1 = require("./items/items.module");
const notifications_module_1 = require("./notifications/notifications.module");
const achievements_module_1 = require("./achievements/achievements.module");
const friends_module_1 = require("./friends/friends.module");
const auth_module_1 = require("./auth/auth.module");
const match_history_module_1 = require("./match-history/match-history.module");
const jwt_auth_guard_1 = require("./auth/guards/jwt-auth.guard");
const roles_guard_1 = require("./auth/guards/roles.guard");
const core_1 = require("@nestjs/core");
const channel_module_1 = require("./channel/channel.module");
const message_module_1 = require("./message/message.module");
const user_items_module_1 = require("./user-items/user-items.module");
const serve_static_module_1 = require("@nestjs/serve-static/dist/serve-static.module");
const path_1 = require("path");
const upload_module_1 = require("./upload/upload.module");
const user_validation_pipe_1 = require("./auth/pipes/user.validation.pipe");
const platform_express_1 = require("@nestjs/platform-express");
const user_achievement_module_1 = require("./user-achievement/user-achievement.module");
const channels_module_1 = require("./channels/channels.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            platform_express_1.MulterModule.register({
                dest: './public',
            }),
            serve_static_module_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            users_module_1.UsersModule,
            database_module_1.DatabaseModule,
            notifications_module_1.NotificationsModule,
            achievements_module_1.AchievementsModule,
            items_module_1.ItemsModule,
            friends_module_1.FriendsModule,
            auth_module_1.AuthModule,
            match_history_module_1.MatchHistoryModule,
            channel_module_1.ChannelModule,
            message_module_1.MessageModule,
            user_items_module_1.UserItemsModule,
            upload_module_1.UploadModule,
            user_achievement_module_1.UserAchievementModule,
            channels_module_1.ChannelsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtAuthGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            {
                provide: core_1.APP_PIPE,
                useClass: user_validation_pipe_1.CustomValidationPipe,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map