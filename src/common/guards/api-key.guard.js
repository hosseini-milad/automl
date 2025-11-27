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
exports.ApiKeyGuard = void 0;
const common_1 = require("@nestjs/common");
const clients_service_1 = require("../../clients/clients.service");
let ApiKeyGuard = class ApiKeyGuard {
    constructor(clientsService) {
        this.clientsService = clientsService;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const apiKey = req.headers['x-api-key'];
        if (!apiKey)
            return false;
        const client = await this.clientsService.findByApiKey(apiKey);
        if (!client)
            return false;
        req.client = client;
        await this.clientsService.incrementRequest(client._id.toString());
        return true;
    }
};
exports.ApiKeyGuard = ApiKeyGuard;
exports.ApiKeyGuard = ApiKeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [clients_service_1.ClientsService])
], ApiKeyGuard);
