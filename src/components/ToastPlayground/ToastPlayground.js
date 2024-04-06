import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider/ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState('notice')
  const [message, setMessage] = React.useState('')

  const { setToasts } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form onSubmit={e => e.preventDefault()}>
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} 
              required
              onChange={e => setMessage(e.target.value)}
              value={message}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
          {VARIANT_OPTIONS.map((variantText) => {
            return (
              <label htmlFor={`variant-${variantText}`} key={variantText}>
                <input
                  id={`variant-${variantText}`}
                  type="radio"
                  name="variant"
                  value={variantText}
                  checked={variant === variantText}
                  onChange={e => setVariant(e.target.value)}
                />
              {variantText}
              </label>
            )
          })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button
              type="submit"
              disabled={!message}
              onClick={e => {
                setMessage('')
                setVariant('notice')
                setToasts((prev) => [...prev, { message, variant, id: crypto.randomUUID() }])
              }}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
