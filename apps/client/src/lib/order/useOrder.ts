import { useLocation } from 'react-router-dom';

export const useOrder = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const items = JSON.parse(searchParams.get('items') || '[]');
  const total = Number(searchParams.get('total'));

  return { items, total };
};
