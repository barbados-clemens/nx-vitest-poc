// importing other comps seem to break stuff 🤔
import {MyReactLibTwo} from "@nx-vitest-package-scripts/my-react-lib-two";
import styles from './my-react-lib.module.css';

/* eslint-disable-next-line */
export interface MyReactLibProps {
  name?: string;
}

export function MyReactLib(props: MyReactLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyReactLib!</h1>
      <MyReactLibTwo/>
    </div>
  );
}

export default MyReactLib;
