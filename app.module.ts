// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { ModelsModule } from './models/models.module';
import { RequestsModule } from './requests/requests.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/ml_platform'),
    UsersModule,
    ClientsModule,
    ModelsModule,
    RequestsModule,
    SubscriptionsModule,
    AuthModule,
  ],
})
export class AppModule {}
