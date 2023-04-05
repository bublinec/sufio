import { FiTrash2 } from '@react-icons/all-files/fi/FiTrash2';
import { useRemoveCartItem } from '../../lib/redux-store/hooks/useRemoveCartItem';

export interface RemoveProductControllerProps {
  productId: number;
}

export const RemoveProductController = (
  props: RemoveProductControllerProps
) => {
  const { productId } = props;

  const removeCartItem = useRemoveCartItem();

  return (
    <div
      className="text-lg cursor-pointer transition-all duration-300 hover:text-red-700 py-1 px-2 rounded-md"
      onClick={() => removeCartItem(productId)}
    >
      <FiTrash2 />
    </div>
  );
};
