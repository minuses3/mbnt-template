import { makeObservable } from "mobx";
import BaseStore from "@/store/BaseStore";

class Store extends BaseStore {
  constructor() {
    super();
    makeObservable(this);
  }
}

export default Store;
