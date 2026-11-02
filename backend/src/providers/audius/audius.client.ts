import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AudiusClient {
private readonly baseUrl: string;
private readonly apiKey: string;

constructor(private readonly configService: ConfigService) {
  this.apiKey = this.configService.getOrThrow<string>('AUDIUS_API_KEY');
  this.baseUrl = this.configService
  .getOrThrow<string>('AUDIUS_BASE_URL')
  .replace(/\/+$/, '');
}

async get<T>(path: string): Promise<T> {
    const url = new URL(path, this.baseUrl);
    const response = await fetch(url, {
      headers: {
        'X-API-Key': this.apiKey,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Audius API: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
}
}