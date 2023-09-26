import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { Product } from '../models/Products';
import axios from 'axios';
import GoBack from '../components/goBack';

export default function FilterDetail() {
    const { name } = useParams();
    const { negotiation } = useParams();
    const { condition } = useParams();
    const { brand } = useParams();
    console.log(name);
    console.log(brand);
    console.log(condition);
    console.log(negotiation);


    const [product, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Fetch products based on the category
      axios
        .get<Product[]>(`client/product?title=${name}&brand=${brand}&itemcondition=${condition}&negotiation=${negotiation}`)
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, [name, brand, condition, negotiation]);

    const handleProductViewSubmit = async (id: number) => {
      console.log('Submitted:', id);
      const product_id = id;
      try {
        const response = await axios.post('client/view/post/create', {
          product_id,
        });
        if (response.status === 201) {
          console.log('Post request successful');
          // Handle success, if needed
        } else {
          console.log('Post request failed with status:', response.status);
          // Handle failure, if needed
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      }
    };
  
  
    const renderProduct = (item: Product) => (
      <div key={item.id} className="product-container" style={{ width: '140px', margin: '5px' }}>
            <div  className="product-card1">
            <Link to={`/${item.Category}/${item.id}/${item.Title}`}  onClick={() => {
          handleProductViewSubmit(item.id);
        }}>
              <img
                src={item.images[0]?.image}
                alt={item.Category}
                className="product-image"
              /><br/><br />
              <h5 style={{ fontSize: '12px', fontWeight: 'bold', color: 'black'}}>{item.Title.slice(0, 19)}</h5>
                <h6 style={{ fontSize: '12px', color: 'black'}}>{'₦'}{item.Price}</h6>
                </Link>
                </div>
          </div>
    );
  
    if (loading) {
      return <Loading />; // You can replace this with your loading component
    }
  
  return (
    <>
      <GoBack/>
      <div  className="product-card" style={{marginLeft: '40px'}}>
      <div className="row">
        {product.map((item) => (
            renderProduct(item)
        ))}
      </div>
      </div>
      </>
  )
}
