import { User } from "./Actor";
import IEntity from "./IEntity";
import { Repository } from "./Repository";

interface StargazerProps {
  user: User;
  repository: Repository;
  starred_at: Date;
}

export class Stargazer extends IEntity<StargazerProps> {
  constructor(props: StargazerProps) {
    super(props);
  }

  getEntityID(): string {
    return (
      this._props.repository.getEntityID() +
      this._props.user.getEntityID() +
      this._props.starred_at.toISOString()
    );
  }
}
