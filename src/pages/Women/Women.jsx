import React,{useState,useEffect} from 'react'
import { fetchProductList } from "../../common/productList";
import Card from '../../common/Card/Card';
import "../../common/product_css/product.css";
import Filter from "../../common/SortBy/Filter";

const Women = () => {
  const [products, setProducts] = useState([]);
  const [women,setWomen]=useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchProductList()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
  }, []);
  useEffect(() => {
    const items = products.filter((item) => item.category === "women's clothing");
    setWomen(items);
  }, [products]);

  
  if (loading) {
    return <div className="loader"></div>;
  }
  return (
    <div>
      <Filter products={women} setProducts={setWomen}/>
    <div id="container">
    {women.map((entry,index) => (
     <Card
       key={`women-${entry.id}`}
       title={entry.title}
       imgUrl={entry.image}
       price={entry.price}
       rating={entry.rating}
       id={entry.id}
     />
   ))}
 </div>
 </div>
  );
};

export default Women;
