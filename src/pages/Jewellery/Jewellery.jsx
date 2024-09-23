import React,{useState,useEffect} from 'react'
import { fetchProductList } from "../../common/productList";
import Card from '../../common/Card/Card';
import "../../common/product_css/product.css";
import Filter from '../../common/SortBy/Filter';

  
const Jewellery = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [jewelery,setJewelery]=useState([]);

  useEffect(() => {
    fetchProductList()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
  }, []);
  useEffect(() => {
    const items = products.filter((item) => item.category === "jewelery");
    setJewelery(items);
  }, [products]);
  
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <Filter products={jewelery} setProducts={setJewelery} />
    <div id="container">
       {jewelery.map((entry,index) => (
        <Card
          key={`jewelery-${entry.id}`}
          title={entry.title}
          imgUrl={entry.image}
          price={entry.price}
          rating={entry.rating}
          id={entry.id}

        />
      ))}
    </div>
    </div>
  )
}

export default Jewellery
