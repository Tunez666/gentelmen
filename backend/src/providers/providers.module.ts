import { Module } from '@nestjs/common';
import { AudiusModule } from './audius/audius.module';
import { YandexMusicModule } from './yandex-music/yandex-music.module';

@Module({
  imports: [AudiusModule, YandexMusicModule],
  exports: [AudiusModule, YandexMusicModule],
})
export class ProvidersModule {}