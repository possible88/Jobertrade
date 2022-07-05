import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Products } from "../models/product";
import { Link, useParams } from "react-router-dom";
import GoBack from "../components/goBack";

const Category = () => {
    const { mobile } = useParams();
    const { vehicles } = useParams();
    const { fashion } = useParams();
    const { computer } = useParams();
    const { electronics } = useParams();
    const { property } = useParams();
    const { agriculture } = useParams();
    const { furniture } = useParams();
    const { health } = useParams();
    const { repair } = useParams();
    const { kids } = useParams();
    const { pets } = useParams();
    const { sports } = useParams();


    let items: any;

    items = mobile || vehicles || fashion || computer || electronics || property || agriculture || furniture || health || repair || kids || pets || sports;
    

    console.log(items);
    
    const [products, setproducts] = useState<Products[]>([]);
  const [page, setPage] = useState(1);
  const [hasEnded, setHasEnded] = useState(false); // to indicate whether or not we've fetched all the records
  const [loading, setLoading] = useState(true);

  const container = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!hasEnded) {
      fetch();
    }

    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [page]);

  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
  }, [products]);

  const trackScrolling = () => {
    if (
        container &&
        container.current &&
        container.current.getBoundingClientRect().bottom <= window.innerHeight
    ) {
      setPage(page + 1);

      document.removeEventListener("scroll", trackScrolling);
    }
  };

  const fetch = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `products/category/${items}?page=${page}`
    );

    if (data.data.length === 0) {
      setHasEnded(true);
    } else {
      setproducts([...products, ...data.data]);
    }

    setLoading(false);
  };

  const renderproducts = () => {
    return products.map((products) => {
      return (
        <div key={products.id}>
                            <Link to={`products/${products.id}/${products.title}`} className='card'>
                                <h6 style={{position: 'absolute', fontSize: 'small', margin: '5px', backgroundColor: '#8B0909', padding: '5px', borderRadius: '20px', color: '#EFEBEB'}}>{products.price}</h6>
                                <img src={products.image} height="200"/>
                                <div className="card-body" style={{backgroundColor: '#fff', height: '75px'}}>
                                    <h6 style={{fontSize: 'small'}}><b>{products.title}</b></h6>
                                </div>
                                <div className="card-footer">
                                    <h6 style={{float: 'right', fontSize: 'small'}}>{products.country}</h6>
                                </div>

                            </Link>
                        </div>

      );
    });
  };

  if (!products) return <div />;

  return (
    <div ref={container}>
        <GoBack/>
         <div className="alllist">
      {renderproducts()}
      {loading && <Loading />}
      {hasEnded && (
        <div className="end-products-msg">
          <p></p>
        </div>
      )}
      </div>
    </div>
  );
};


export default Category;