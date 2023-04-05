import React, { ReactNode } from 'react';
import { Toast, ToastProps } from './Toast';

interface ToastContextValue {
  showToast: (props: ToastProps) => void;
}

export const ToastContext = React.createContext<ToastContextValue | null>(null);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = React.useState<ReactNode | null>(null);

  const toastContextValue = React.useMemo(() => {
    const showToast = (props: ToastProps) => {
      setToast(<Toast {...props} />);
      setTimeout(() => setToast(null), 3000);
    };

    return { showToast };
  }, []);

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
      {toast}
    </ToastContext.Provider>
  );
};
