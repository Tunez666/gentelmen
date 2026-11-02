import { Module } from '@nestjs/common';
import { AudiusService } from './audius.service';
import { AudiusClient } from './audius.client';
import { AudiusController } from './audius.controller';

@Module({
  controllers: [AudiusController],
  providers: [AudiusService, AudiusClient],
  exports: [AudiusService],
})
export class AudiusModule {}