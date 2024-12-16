import Image from "next/image";
import styles from "./page.module.css";
import Todo from "./Component/Utility/page";
import ReduxProvider from "./Component/ReduxProvider";

export default function Home({ children }: any) {
  return (
      <Todo />
  );
}
