import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf () {
  const { toasts } = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id })  => {
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast variant={variant} id={id}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

// It depends on provider, use memo for this one.
export default React.memo(ToastShelf);
