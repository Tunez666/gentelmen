import {
  Injectable,
  BadRequestException,
  BadGatewayException,
} from '@nestjs/common';

import { YandexMusicClient } from './yandex-music.client';

@Injectable()
export class YandexMusicService {
  constructor(private readonly yandexMusicClient: YandexMusicClient) { }


  
  
}