import React, {useEffect, useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Button} from "@material-ui/core";
import {ArrowBackRounded} from "@material-ui/icons";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {Products} from "../models/product";
import axios from "axios";
import Filter from "../components/Filter";
import Loading from '../components/Loading';
import GoBack from '../components/goBack';
import { Product } from '../models/Products';
import SeachFilter from '../components/SeachFilter';


const Search = () => {

//     const [products, setProducts] = useState<Products[]>([]);
//     const [filters, setFilters] = useState({
//         s:'',
//         page: 1
//     });
//  const navigate = useNavigate();
//  const [lastPage, setLastPage] = useState(0)




//     useEffect(  () => {
//         (
//             async () => {
//                 const arr = [];

//                 if (filters.s) {
//                     arr.push(`s=${filters.s}`);
//                 }

//                 if (filters.page) {
//                     arr.push(`page=${filters.page}`);
//                 }

//                 const {data} = await axios.get(`products/search?${arr.join('&')}`);
//                setProducts(filters.page === 1 ? data.data : [...products, ...data.data]);
//                 setLastPage(data.last_page);
//             }
//         )();
//     }, [filters]);

//     return (
//         <>
//         <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{backgroundColor: 'white'}}>
//             <Button onClick={() => navigate(-1)} startIcon={<ArrowBackRounded/>}  style={{border: 'none', fontSize: '20px', padding: '5px', margin: '5px',
//                 backgroundColor: 'white'}}>

//             </Button>
//         </header>
// <div className="container" style={{top: '5px', position: 'relative'}}>
//     <Filter products={products} filters={filters} setFilters={setFilters} lastPage={lastPage}/>
// </div>
//         </>
//     );

const [product, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search_name, setText] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async () => {
      // Add your submit logic here
      console.log('Submitted:', search_name);
      try {
        const response = await axios.post(`client/search/create`, {
          search_name,
        });
        if (response.status === 201) {
          setRedirect(true);
        } else {
          throw console.log(`${JSON.stringify(response.data)}`);
        }
      } catch (error: any) {
        console.log(`${JSON.stringify(error.response.data)}`);
        // setIsLoading(false);
      }
    };

    useEffect(() => {
      // Fetch products based on the category
      axios
        .get<Product[]>('client/view/post')
        .then((res) => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, []);

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

    if (redirect) {
      return <Navigate to={`/search/${search_name}`}/>;
  }


  
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
              /><br/><br/>
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
      <div className="row">
       <Button onClick={() => setText('')} style={{width: '20%'}}>Clear</Button>
      <input type="text" placeholder="Search......" 
       className="form-control" style={{width: '50%'}} value={search_name} onChange={event => setText(event.target.value)}/>
       <Button onClick={handleSubmit} style={{width: '10%'}}>Submit</Button>
       <SeachFilter />
       </div>        
      <div  className="product-card" style={{marginLeft: '40px'}}>
      <div className="row">
        {product.map((item) => (
            renderProduct(item)
        ))}
      </div>
      </div>
      </>
    );
};

export default Search;