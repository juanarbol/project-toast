import React from 'react';
import useEscKey from '../../hooks/useEscKey';

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleDismiss = (id) => {
    const nextToastList = [...toasts].filter(toast => toast.id !== id)
    setToasts(nextToastList)
  }
  React.useCallback(handleDismiss, [toasts])

  const handleEsc = React.useCallback(() => setToasts([]), [])
  useEscKey(handleEsc)

  return (
    <ToastContext.Provider value={{ toasts, setToasts, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
