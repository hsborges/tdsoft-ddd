export default abstract class IEntity<EntityProps = any> {
  protected _props: EntityProps;

  constructor(props: EntityProps) {
    this._props = props;
  }

  get<K extends keyof EntityProps>(key: K) {
    return this._props[key];
  }

  set(props: Partial<EntityProps>) {
    this._props = Object.assign({}, this._props, props);
  }

  get props() {
    return this._props;
  }

  abstract getEntityID(): string;
}
