import BaseStore from "./store/BaseStore";

const createServerProps = (Store: typeof BaseStore) => {
  return async (params: any) => {
    const query = params?.query || {};

    return {
      props: {
        query,
        cookie: params.req?.headers?.cookie || "",
      },
    };
  };
};

export default createServerProps;
