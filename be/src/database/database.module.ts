import { Global, Module } from '@nestjs/common';
import { DatabaseClientService } from './database-client.service';

@Global()
@Module({
  providers: [DatabaseClientService],
  exports: [DatabaseClientService]
})
export class DatabaseModule {}
