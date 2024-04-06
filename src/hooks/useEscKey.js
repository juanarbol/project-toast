import React from 'react';

export default function useEscKey (callback) {
  React.useEffect(() => {
    const handleEscPress = (e) => {
      e.code === 'Escape' && callback(event)
    }

    window.document.addEventListener('keydown', handleEscPress)
    return () => window.document.removeEventListener('keydown', handleEscPress)
  }, [callback])
}
