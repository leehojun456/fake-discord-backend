export class CreateChannelDto {
  name: string;
  description: string;
  type: number;
  serverId: number;
  parentId?: number | null;
  position?: number | null;
}
