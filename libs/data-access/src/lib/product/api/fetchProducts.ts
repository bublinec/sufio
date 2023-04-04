export const fetchProducts = async () => {
  try {
    const response = await fetch('data/products.json');
    const data = await response.json();

    // add tiemout to simulate api call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
};