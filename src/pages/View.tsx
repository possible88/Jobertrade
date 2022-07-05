import React, {SyntheticEvent, useEffect, useState} from 'react';
import axios from "axios";
import {Products} from "../models/product";
import {User} from "../models/User";
import {Link, Navigate, useParams} from 'react-router-dom';
import GoBack from "../components/goBack";
import '../view.css';
import Divider from "@mui/material/Divider";
import { Images } from '../models/Image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CurrencyFormat from 'react-currency-format';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };

const View = () => {
    const [products, setProducts] = useState(new Products());
    const [photo, setPhoto] = useState<Images[]>([]);
    const { id } = useParams();

    const [user, setUser] = useState(new User());
    const [redirect, setRedirect] = useState(false);
    const [productInput , setProduct] = useState({
        price : '',

    });

    const [err, setErr] = useState('');

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    console.log({id})

    const handleInput = (e: any) => {
        e.persist();
        setProduct({...productInput, [e.target.name]:e.target.value});
    }


    const submit = async (e:SyntheticEvent) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("price", productInput.price)
    
        await axios.put(`products/${id}`, formData).then(response => {
            Swal.fire("Success",response.data.message,"success");

        })
            .catch(error => {
                setErr(error.response.data.message)

            });

    };

    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get('user');
                setUser(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.user_name,
                    data.country,
                    data.profile_pic,
                    data.phone,
                ));
            }
        )();
    }, []);



    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get(`products/${id}`);
                setProducts(new Products(
                    data.id,
                    data.title,
                    data.description,
                    data.condition,
                    data.state,
                    data.country,
                    data.image,
                    data.price,
                    data.added_by,
                    data.first_name,
                    data.last_name,
                    data.email,
                ));
                // setlLastPage(data.meta.last_page);
            }
        )();
    }, []);


    useEffect(  () => {
        (
            async () => {
                const {data} = await axios.get(`products/photo/${id}`);
                setPhoto(data.data);
                // setlLastPage(data.meta.last_page);
                console.log(data.data)
            }
        )();
    }, []);

//     const picimage = photo.image;
//     const picid = photo.id;

// console.log(picimage)
// console.log(picid)



    const del = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this record')) {
            await axios.delete(`products/${id}`)
            .then(response => {
                setRedirect(true);
            });
        }
    }

    const user_name = products.added_by;

    // console.log(user_name)

    let message;



    if (user.user_name != user_name) {
        message = ( <Link to={`/message/${user_name}`}><button className="btn btn-primary btn-sm"><span
            data-feather="message-square">Message</span></button></Link>)
    }

    let edit;


    if (user.user_name == user_name) {
        edit = (<button className="btn btn-primary btn-sm" onClick={handleOpen}><span
            data-feather="message-square">Edit</span></button>)
    }

    let dele;

    if (user.user_name == user_name) {
      dele = ( <a href="#" onClick={() => del(products.id)}><button className="btn btn-primary btn-sm"><span
            data-feather="message-square">Delete</span></button></a>)
    }

    if (redirect) {
        return <Navigate to={'/'}/>;
    }


    return (


            <div className="container">

                <GoBack/>
                        <div className=" row">
                            <div className="preview col-12 col-lg-8 col-xxl-9 d-flex">
                            <div className="card flex-fill" style={{boxShadow:'none'}}>
                            {/* <!-- Carousel wrapper --> */}
                  
                          <OwlCarousel items={1} autoplay ={true} loop>
                          {photo.map(photo => {
                        return(       
                <div>
                    <img src={photo.image} alt={photo.image} className="lazyload" />
                  
                </div>
                  )})}
            </OwlCarousel>
                                
                           </div>
                            </div>
                            <div className="details col-12 col-lg-4 col-xxl-3 d-flex">
                            <div className="card flex-fill w-100" style={{boxShadow:'none'}}>
                                <div className="card-header">
                                {message}
                                {edit}
                                {dele}
                                </div>
                                <h6 className="list-group-item"><strong>Name:</strong><Link to={`/profile/${products.added_by}`}> {products.first_name} {products.last_name}</Link></h6>
                                <h6 className="list-group-item"><strong>Email:</strong> {products.email}</h6>
                                <h6 className="list-group-item">{products.title}</h6>
                                <h6 className="list-group-item">{products.description}</h6>
                                <h6 className="list-group-item"><strong>Price:</strong> {products.price}</h6>
                                <h6 className="list-group-item"><strong>Location:</strong> {products.state}  {products.country}
                                </h6>
                                <h6 className="list-group-item"><strong>Condition:</strong> {products.condition}
                                </h6>


</div>

                            </div>

                            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit Price
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form onSubmit={submit}>
          <div className="form-floating mb-4">
                        <CurrencyFormat thousandSeparator={true} prefix={'₦'} type="text" className="form-control" name="price" id="form6Example7" required onChange={handleInput} value={productInput.price}/>
                        <label className="form-label" htmlFor="form6Example7">Price</label>
                    </div>
                    <div className="text-center text-md-left">
                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>{err}</p>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Save</button>
                    </div>
                    </form>
          </Typography>
        </Box>
      </Modal>
                        </div>
            </div>

    );
};

export default View;