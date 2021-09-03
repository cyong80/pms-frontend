import { FC } from 'react'
import styles from "./Hamburger.module.css";

interface Props {
    onToggle?: () => void;
    isOpen: boolean;
    fixed?: boolean;
    dark?: boolean;
    left?: boolean;
}

const Hamburger:FC<Props> = ({isOpen, fixed=false, dark=false, left=false, ...props}:Props)=> {
    const leftStyle = left ? styles.left : styles.right;
    const darkStyle = dark ? styles.dark : '';
    return (<>
    <button
    aria-label="Open Menu"
    className={`${isOpen && !fixed ? styles.opend : ""} ${styles.hamburger}`}
    onClick={props.onToggle}>
    <div className={`${leftStyle} ${darkStyle} ${styles.wrapper}`}>
      <i className={styles.line}></i>
      <i className={styles.line}></i>
      <i className={styles.line}></i>
    </div>
  </button>
    </>);
}

export default Hamburger