import styles from './my-react-lib-two.module.css';

/* eslint-disable-next-line */
export interface MyReactLibTwoProps {}

export function MyReactLibTwo(props: MyReactLibTwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyReactLibTwo!</h1>
    </div>
  );
}

export default MyReactLibTwo;
