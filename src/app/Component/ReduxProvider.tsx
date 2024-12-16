"use client";

import { Provider } from "react-redux";
import Store from "../Component/Store/page";

export default function ReduxProvider({ children }: any) {
  return <Provider store={Store}>{children}</Provider>;
}
