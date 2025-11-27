import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ClientsService } from '../../clients/clients.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private clientsService: ClientsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) return false;

    const client = await this.clientsService.findByApiKey(apiKey);
    if (!client) return false;

    req.client = client;
    await this.clientsService.incrementRequest(client._id.toString());

    return true;
  }
}
