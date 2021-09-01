import {FC, MouseEventHandler} from 'react'
import {Button } from "antd"
import styles from "./Hamburger.module.css";
interface Props {
    toggle: MouseEventHandler<HTMLElement>;
    isOpen: boolean;
    isMini: boolean;
    dark?: boolean | null;
    left?: boolean | null;
}

const Hamburger:FC<Props> = (props:Props)=> {
    const leftStyle = props.left ? styles.left : styles.right;
    const darkStyle = props.dark ? styles.dark : '';
    return (<>
    <Button
    type="text"
    aria-label="Open Menu"
    onClick={props.toggle}
    className={props.isOpen && !props.isMini ? styles["sidenav-opend"] : ""}
  >
    <div className={`${leftStyle} ${darkStyle} ${styles["sidenav-toggler-inner"]}`}>
      <i className={styles["sidenav-toggler-line"]}></i>
      <i className={styles["sidenav-toggler-line"]}></i>
      <i className={styles["sidenav-toggler-line"]}></i>
    </div>
  </Button>
    </>);
}

Hamburger.defaultProps = {
    left: false
}


export default Hamburger