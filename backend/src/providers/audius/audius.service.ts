import {
  Injectable,
  BadRequestException,
  BadGatewayException,
} from '@nestjs/common';

import { AudiusClient } from './audius.client';
import { AudiusUsersResponse } from './audius.types';

@Injectable()
export class AudiusService {
  constructor(private readonly audiusClient: AudiusClient) { }


  async searchUsers(query: string) {
    if (!query || !query.trim()) {
      throw new BadRequestException('Search query cannot be empty');
    }

    try {
      return await this.audiusClient.get<AudiusUsersResponse>(
        `/v1/users/search?query=${encodeURIComponent(query.trim())}`,
      );
    } catch (error) {
      throw new BadGatewayException('Audius API request failed');
    }
  }

    async getUserTracks(userId: string) {
    if (!userId || !userId.trim()) {
      throw new BadRequestException('User ID cannot be empty');
    }

    try {
      return await this.audiusClient.get<unknown>(
        `/v1/users/${encodeURIComponent(userId.trim())}/tracks`,
      );
    } catch (error) {
      throw new BadGatewayException('Audius API request failed');
    }
  }
  
}