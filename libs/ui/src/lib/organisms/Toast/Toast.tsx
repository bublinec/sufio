import React from 'react';

export interface ToastProps {
  title: string;
  description?: string;
  status?: 'success' | 'error' | 'warning' | 'info';
}

export const Toast: React.FC<ToastProps> = ({
  title,
  description,
  status = 'success',
}) => {
  const statusClasses = {
    success: 'bg-green-700',
    error: 'bg-red-700',
    warning: 'bg-yellow-700',
    info: 'bg-blue-700',
  };

  return (
    <div
      className={`fixed bottom-4 left-4 p-4 px-8 rounded-md text-white ${statusClasses[status]}`}
      role="alert"
    >
      <div className="flex justify-between">
        <h4 className="font-semibold">{title}</h4>
      </div>
      {description && <p className="mt-2">{description}</p>}
    </div>
  );
};
