import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseClientService implements OnModuleInit {
  private readonly prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = this.getClient();
  }

  get repo() {
    return this.prismaClient;
  }

  private getClient() {
    return new PrismaClient();
  }

  async onModuleInit() {
    await this.prismaClient.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.prismaClient.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
