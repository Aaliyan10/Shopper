let productList = [];

export async function fetchProductList() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        productList = await response.json();
        return productList; 
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

export default productList;
