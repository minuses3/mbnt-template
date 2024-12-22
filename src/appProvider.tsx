import BaseStore from "./store/BaseStore";
import React from "react";
import { observer, Provider } from "mobx-react";
import useStore from "@/store/useStore";

interface State {
  store: BaseStore;
}

const appProvider = ({
  params,
  Comp,
  Store,
}: {
  params: any;
  Store: typeof BaseStore;
  Comp: () => React.JSX.Element;
}) => {
  const { store } = params;
  let store1 = new Store();
  if (!store) {
    console.log("csr");
    store1?.initData().then(() => {
      // csr 需要标记数据是否请求完成
      store1.setHasInit();
    });
  } else {
    store1.copyState(store);
  }

  const Wrap = observer(() => {
    let { hasInit } = useStore();
    return hasInit ? <Comp></Comp> : null;
  });

  class App extends React.Component {
    state: State = {
      store: store1,
    };

    render() {
      return (
        <Provider store={this.state.store}>
          <Wrap></Wrap>
        </Provider>
      );
    }
  }

  return <App />;
};
export default appProvider;
