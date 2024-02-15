import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    EmployeesModule,
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // 1 seconds
        limit: 3,
      },
      {
        name: 'long',
        ttl: 60000, // 1 minute
        limit: 100,
      },
      // In above example, we have defined two throttling groups, short and long. How it works is that if a user makes more than 3 requests in 1 second, they will be throttled. If they make more than 100 requests in 1 minute, they will be throttled.
    ]),
    MyLoggerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
