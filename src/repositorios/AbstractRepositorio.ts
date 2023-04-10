import IEntity from "../entidades/IEntity";

export abstract class AbstractRepositorio<T extends IEntity> {
  protected database: Map<string, T>;

  constructor() {
    this.database = new Map();
  }

  public async create(entity: T): Promise<T> {
    if (this.database.has(entity.getEntityID()))
      throw new Error("Entity already exists");
    this.database.set(entity.getEntityID(), entity);
    return entity;
  }

  public async read(entityID: string): Promise<T | undefined> {
    return this.database.get(entityID);
  }

  public async udpate(entity: T): Promise<T> {
    this.database.set(entity.getEntityID(), entity);
    return entity;
  }

  public async delete(entity: T): Promise<boolean> {
    return this.database.delete(entity.getEntityID());
  }
}
