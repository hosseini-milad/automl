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
exports.ModelSchema = exports.MLModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let MLModel = class MLModel {
};
exports.MLModel = MLModel;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MLModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MLModel.prototype, "businessId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MLModel.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'training' }),
    __metadata("design:type", String)
], MLModel.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MLModel.prototype, "filePath", void 0);
exports.MLModel = MLModel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], MLModel);
exports.ModelSchema = mongoose_1.SchemaFactory.createForClass(MLModel);
