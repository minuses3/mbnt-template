import { MobXProviderContext } from "mobx-react";
import { useContext } from "react";
import BaseStore from "@/store/BaseStore";

function useStore<T extends BaseStore>() {
  // @ts-ignore
  const { store } = useContext<{ store: T }>(MobXProviderContext);
  return (store || {}) as T;
}

export default useStore;
