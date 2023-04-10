import { Actor } from "./Actor";
import IEntity from "./IEntity";
import { Repository } from "./Repository";

interface ReleaseProps {
  id: string;
  repository: Repository;
  author?: Actor;
  created_at: Date;
  description?: string;
  is_draft: boolean;
  is_prerelease: boolean;
  mentions: number;
  name?: string;
  published_at?: Date;
  reaction_groups: Record<string, number>;
  reactions: number;
  release_assets: number;
  tag?: string;
  tag_commit?: string;
  tag_name: string;
  updated_at: Date;
}

export class Release extends IEntity<ReleaseProps> {
  constructor(props: ReleaseProps) {
    super(props);
  }

  getEntityID(): string {
    return this._props.id;
  }
}
