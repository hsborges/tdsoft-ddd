import IEntity from "./IEntity";

class Test extends IEntity<{ id: number; optional?: string }> {
  getEntityID(): string {
    return this.get("id").toString();
  }
}

describe("IEntity", () => {
  test("get", () => {
    const entity = new Test({ id: 1 });
    expect(entity.get("id")).toBe(1);
    expect(entity.get("optional")).toBe(undefined);
    expect(typeof entity.get("id")).toBe("number");
  });

  test("set", () => {
    const entity = new Test({ id: 1 });
    entity.set({ id: 2, optional: "test" });
    expect(entity.get("id")).toBe(2);
    expect(entity.get("optional")).toBe("test");
  });
});
