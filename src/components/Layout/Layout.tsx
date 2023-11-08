import { PropsWithChildren } from "react"
import Header from "../Header/Header"
import styles from "./Layout.module.css"

const Layout = (props: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layout__main}>{props.children}</main>
    </div>
  )
}

export default Layout
