import { action, observable } from "mobx";

export default class BaseStore {
  constructor() {
    // makeObservable(this);
  }

  query: Record<string, string> = {};
  @observable hasInit = false;
  @action setHasInit = () => {
    this.hasInit = true;
  };

  copyState = <T extends BaseStore>(store: T) => {
    const a = Object.assign(this, store);
    return a;
  };

  initData = async () => {};
}
