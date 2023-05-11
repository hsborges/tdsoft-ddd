import { Repository, User } from "./entidades";
import { ActorsRepositorio, RepositoriesRepositorio } from "./repositorios";

import consola from "consola";
import { pickBy } from "lodash";

import { actors } from "../data/actors_202305081744.json";
import { repositories } from "../data/repositories_202305081745.json";

function removeNulls(actor: Record<string, any>): Record<string, any> {
  return pickBy(actor, (value) => value !== null);
}

export default async function seed(): Promise<void> {
  consola.info("Seeding database...");
  for (const actor of actors) {
    await ActorsRepositorio.getInstance().create(
      new User(removeNulls(actor) as any)
    );
  }

  consola.info(`${actors.length} actors seeded`);
  consola.info("Seeding repositories...");

  for (const repo of repositories) {
    const owner = await ActorsRepositorio.getInstance().read(repo.owner);

    if (!owner) throw new Error("Owner not found");

    await RepositoriesRepositorio.getInstance().create(
      new Repository(removeNulls({ ...repo, owner }) as any)
    );
  }

  consola.info(`${repositories.length} repositories seeded`);
  consola.success("Database seeded");
}

if (require.main === module) seed();
