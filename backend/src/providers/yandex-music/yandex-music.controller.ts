import { Controller, Get, Query, Param } from '@nestjs/common';
import { YandexMusicService } from './yandex-music.service';

@Controller('yandex-music')
export class YandexMusicController {
  constructor(private readonly yandexMusicService: YandexMusicService) { }

  
}