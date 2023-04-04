export const fetchProducts = async () => {
  try {
    const response = await fetch('data/products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
};