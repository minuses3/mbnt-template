import { InferGetServerSidePropsType } from "next";

import appProvider from "@/appProvider";
import Store from "@/biz/Home/store";
import Home from "@/biz/Home";
import createServerProps from "@/createServerProps";

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  return appProvider({
    params: props,
    Store,
    Comp: Home,
  });
}

export const getServerSideProps = createServerProps(Store);
