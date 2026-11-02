export interface AudiusUser {
  id: string;
  name: string;
  handle: string;
  track_count: number;
  album_count: number;
  follower_count: number;
  is_verified: boolean;
}

export interface AudiusUsersResponse {
  data: AudiusUser[];
}