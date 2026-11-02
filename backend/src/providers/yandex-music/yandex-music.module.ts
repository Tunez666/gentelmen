import { Module } from '@nestjs/common';
import { YandexMusicService } from './yandex-music.service';
import { YandexMusicClient } from './yandex-music.client';
import { YandexMusicController } from './yandex-music.controller';

@Module({
  controllers: [YandexMusicController],
  providers: [YandexMusicService, YandexMusicClient],
  exports: [YandexMusicService],
})
export class YandexMusicModule {}