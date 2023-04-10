import IEntity from "./IEntity";

interface ActorProps {
  id: string;
  login: string;
  avatar_url?: string;
}

interface UserProps extends ActorProps {
  bio?: string;
  company?: string;
  created_at?: Date;
  email?: string;
  followers?: number;
  following?: number;
  location?: string;
  name?: string;
  repositories?: number;
  starred_repositories?: number;
  twitter_username?: string;
  updated_at?: Date;
  website_url?: string;
}

interface OrganizationProps extends ActorProps {
  created_at?: Date;
  description?: string;
  email?: string;
  location?: string;
  name?: string;
  repositories?: number;
  twitter_username?: string;
  updated_at?: Date;
  website_url?: string;
}

interface BotProps extends ActorProps {
  created_at?: Date;
  database_id?: number;
  updated_at?: Date;
}

interface MannequinProps extends ActorProps {
  created_at?: Date;
  database_id?: number;
  email?: string;
  updated_at?: Date;
}

export abstract class Actor<
  T extends ActorProps = ActorProps
> extends IEntity<T> {
  constructor(props: T) {
    super(props);
  }

  getEntityID(): string {
    return this._props.id;
  }
}

export class User extends Actor<UserProps> {
  constructor(props: UserProps) {
    super(props);
  }
}

export class Organization extends Actor<OrganizationProps> {
  constructor(props: OrganizationProps) {
    super(props);
  }
}

export class Bot extends Actor<BotProps> {
  constructor(props: BotProps) {
    super(props);
  }
}

export class Mannequin extends Actor<MannequinProps> {
  constructor(props: MannequinProps) {
    super(props);
  }
}
