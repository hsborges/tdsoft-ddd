import { Actor } from "../entidades";
import { AbstractRepositorio } from "./AbstractRepositorio";

export class ActorsRepositorio extends AbstractRepositorio<Actor> {
  private static instance: ActorsRepositorio;

  private constructor() {
    super();
  }

  public static getInstance(): ActorsRepositorio {
    if (!ActorsRepositorio.instance) {
      ActorsRepositorio.instance = new ActorsRepositorio();
    }
    return ActorsRepositorio.instance;
  }

  async findByLogin(login: string): Promise<Actor | undefined> {
    for (const actor of this.database.values()) {
      if (actor.get("login") === login) return actor;
    }
  }
}
