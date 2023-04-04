import { useQuery } from "react-query";
import { fetchProducts } from "../api/fetchProducts";
import { Product } from "@sufio/models";

export const useProductsQuery = () => {
  return useQuery<Product[]>({
    queryKey: 'products',
    queryFn: () => fetchProducts(),
  });
}