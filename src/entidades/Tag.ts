import { Actor } from "./Actor";
import IEntity from "./IEntity";
import { Repository } from "./Repository";

interface TagProps {
  id: string;
  repository: Repository;
  message?: string;
  name: string;
  oid: string;
  tagger: { date: Date; email?: string; name: string; user?: Actor };
  target?: string;
}

export class Tag extends IEntity<TagProps> {
  constructor(props: TagProps) {
    super(props);
  }

  getEntityID(): string {
    return this._props.id;
  }
}
