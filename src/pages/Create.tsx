import React, {SyntheticEvent, useState} from 'react';
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Swal from "sweetalert2"
import CurrencyFormat from 'react-currency-format';
import { Navigate } from 'react-router-dom';

const Create = () => {

    const [productInput , setProduct] = useState({
        category : '',
        title : '',
        description : '',
        Itemcondition : '',
        state : '',
        country : '',
        price : '',

    });
    const [err, setErr] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleInput = (e: any) => {
        e.persist();
        setProduct({...productInput, [e.target.name]:e.target.value});
    }

    let ready: any[] = [];

    const handleImage = (e: any) => {
        // reseting the ready array back to empty
        ready = []
        let prepare = e.target.files;
        for(let i=0; i < prepare.length; i++ ) {
            ready.push(prepare[i])
        }
    }




    const submit = async (e:SyntheticEvent) => {

        e.preventDefault();

        const formData = new FormData();
        formData.append("category", productInput.category)
        formData.append("title", productInput.title)
        formData.append("description", productInput.description)
        formData.append("Itemcondition", productInput.Itemcondition)
        formData.append("state", productInput.state)
        formData.append("country", productInput.country)
        formData.append("price", productInput.price)
    
        for(let i=0; i<ready.length; i++) {
            formData.append("image[]", ready[i])
        }
        console.log(formData.getAll("image[]"))

        await axios.post('products', formData).then(response => {
            Swal.fire("Success",response.data.message,"success");
            setRedirect(true);
            window.location.reload();
})
            .catch(error => {
                setErr(error.response.data.message)

            });

    };

    if (redirect) {
        return <Navigate to={'/'}/>;
    }
    return (
        <Wrapper>
            <div className="col-12 col-md-6" style={{marginLeft: 'auto', marginRight: 'auto', display: 'inline-block'}}>
                <form onSubmit={submit} encType="multipart/form-data">

                    <div className="form-floating mb-4">
                        <select className="form-control" name="category" required id="form6Example3" onChange={handleInput} value={productInput.category}>
                            <option></option>
                            <option value="mobile">mobile phone</option>
                            <option value="computer">computer</option>
                            <option value="property">property</option>
                            <option value="electronics">electronics</option>
                            <option value="vehicles">vehicles</option>
                            <option value="furniture">furniture & appliances
                            </option>
                            <option value="fashion">fashion</option>
                            <option value="health">health & beauty
                            </option>
                            <option value="repair">repair & construction
                            </option>
                            <option value="agriculture">agriculture & food
                            </option>
                            <option value="kids">kids</option>
                            <option value="pets">pets</option>
                            <option value="sports">sports</option>
                        </select>
                        <label className="form-label" htmlFor="form6Example3">Category</label>
                    </div>


                    <div className="form-floating mb-4">
                        <input type="text" id="form6Example4" name="title" placeholder="" className="form-control" onChange={handleInput} value={productInput.title}/>
                        <label className="form-label" htmlFor="form6Example4">Title</label>
                    </div>


                    <div className="form-floating mb-4">
                        <select className="form-control" name="Itemcondition" required id="form6Example5" onChange={handleInput} value={productInput.Itemcondition}>
                            <option></option>
                            <option value="Brand New">Brand New</option>
                            <option value="Used">Used</option>
                        </select>
                        <label className="form-label" htmlFor="form6Example5">Condition</label>
                    </div>


                    <div className="form-floating mb-4">
                        <input type="text" id="form6Example6" name="state" placeholder="" className="form-control" onChange={handleInput} value={productInput.state}/>
                        <label className="form-label" htmlFor="form6Example6">State</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input type="text" id="form6Example7" name="country" placeholder="" className="form-control" onChange={handleInput} value={productInput.country}/>
                        <label className="form-label" htmlFor="form6Example7">Country</label>
                    </div>

                    <div className="form-floating mb-4">
                        <textarea  id="form6Example8" name="description" placeholder="" className="form-control"  rows={4} onChange={handleInput} value={productInput.description}/>
                        <label className="form-label" htmlFor="form6Example8">Description</label>
                    </div>


                    <div className="form-floating mb-4">
                        <CurrencyFormat thousandSeparator={true} prefix={'₦'} type="text" className="form-control" name="price" id="form6Example7" required onChange={handleInput} value={productInput.price}/>
                        <label className="form-label" htmlFor="form6Example7">Price</label>
                    </div>
                    <input type="file" accept="image/*" name="image[]" id="contained-button-file" onChange={handleImage} multiple/>
                    <div className="text-center text-md-left">
                        <p style={{textAlign: 'center', fontWeight: 'bold'}}>{err}</p>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Post AD</button>
                    </div>
                </form>
            </div>

        </Wrapper>
    );
};

export default Create;