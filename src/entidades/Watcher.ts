import { User } from "./Actor";
import IEntity from "./IEntity";
import { Repository } from "./Repository";

interface WatcherProps {
  user: User;
  repository: Repository;
}

export class Watcher extends IEntity<WatcherProps> {
  constructor(props: WatcherProps) {
    super(props);
  }

  getEntityID(): string {
    return (
      this._props.repository.getEntityID() + this._props.user.getEntityID()
    );
  }
}
