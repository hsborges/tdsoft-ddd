import { Actor } from "./Actor";
import IEntity from "./IEntity";

interface RepositoryProps {
  id: string;
  code_of_conduct?: string;
  created_at?: Date;
  default_branch?: string;
  description?: string;
  forks?: number;
  homepage_url?: string;
  is_archived?: boolean;
  issues?: number;
  license_info?: string;
  mirror_url?: string;
  name?: string;
  name_with_owner: string;
  open_graph_image_url?: string;
  owner: Actor;
  primary_language?: string;
  pushed_at?: Date;
  pull_requests?: number;
  releases?: number;
  repository_topics?: Array<string>;
  stargazers?: number;
  tags?: number;
  updated_at?: Date;
  url?: string;
  vulnerability_alerts?: number;
  watchers?: number;
}

export class Repository extends IEntity<RepositoryProps> {
  constructor(props: RepositoryProps) {
    super(props);
  }

  getEntityID(): string {
    return this._props.id;
  }
}
