"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let CustomValidationPipe = class CustomValidationPipe {
    async transform(value, metadata) {
        if (metadata.type === 'body' && metadata.metatype) {
            const obj = (0, class_transformer_1.plainToClass)(metadata.metatype, value);
            const errors = await (0, class_validator_1.validate)(obj);
            if (errors.length > 0) {
                console.log(errors[0]);
                throw new common_1.BadRequestException({
                    message: errors[0].constraints[Object.keys(errors[0].constraints)[0]],
                    error: 'Bad Request',
                    statusCode: 400,
                });
            }
        }
        return value;
    }
};
exports.CustomValidationPipe = CustomValidationPipe;
exports.CustomValidationPipe = CustomValidationPipe = __decorate([
    (0, common_1.Injectable)()
], CustomValidationPipe);
//# sourceMappingURL=user.validation.pipe.js.map