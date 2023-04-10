import { Repository, Stargazer, User } from "./entidades";
import {
  ActorsRepositorio,
  RepositoriesRepositorio,
  ResourcesRepositorio,
} from "./repositorios";

import { faker } from "@faker-js/faker";

export default async function seed(): Promise<void> {
  const owner = await ActorsRepositorio.getInstance().create(
    new User({ id: "tdsoft_2023_1", login: "tdsoft" })
  );

  const repo = await RepositoriesRepositorio.getInstance().create(
    new Repository({
      id: "tdsoft_ddd",
      name: "tdsoft_ddd",
      name_with_owner: "tdsoft/tdsoft_ddd",
      owner: owner,
    })
  );

  for (let index = 0; index < 1000; index++) {
    const fakeUser = await ActorsRepositorio.getInstance().create(
      new User({ id: faker.datatype.uuid(), login: faker.internet.userName() })
    );

    await ResourcesRepositorio.getInstance().create(
      new Stargazer({
        repository: repo,
        user: fakeUser,
        starred_at: faker.date.between(new Date(2000, 1, 1), new Date()),
      })
    );
  }
}
