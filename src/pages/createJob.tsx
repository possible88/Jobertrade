import React, {SyntheticEvent, useState} from 'react';
import Wrapper from '../components/Wrapper';
import axios from "axios";
import CurrencyFormat from 'react-currency-format';
import { Navigate } from 'react-router-dom';

const CreateJob = () => {
    const [jobInput , setJob] = useState({
        title: '',
        description: '',
        company: '',
        website: '',
        period: '',
        jobnature: '',
        skill: '',
        education: '',
        state: '',
        country: '',
        payment: '',

    });
    const [err, setErr] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleInput = (e: any) => {
        e.persist();
        setJob({...jobInput, [e.target.name]:e.target.value});
    }

    const submit =  async (e: SyntheticEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", jobInput.title)
        formData.append("description", jobInput.description)
        formData.append("company", jobInput.company)
        formData.append("website", jobInput.website)
        formData.append("period", jobInput.period)
        formData.append("jobnature", jobInput.jobnature)
        formData.append("skill", jobInput.skill)
        formData.append("education", jobInput.education)
        formData.append("state", jobInput.state)
        formData.append("country", jobInput.country)
        formData.append("payment", jobInput.payment)


        const response = await axios.post(`jobs`, formData).then(response => {
            setErr(response.data.message);
            console.log(response.data.message);
            setRedirect(true);
            window.location.reload();
        })
            .catch(error => {
                setErr(error.response.data.message);

            });


    };

    if (redirect) {
        return <Navigate to={'/'}/>;
    }

    return (
        <Wrapper>
                <div className="col-md-9 mb-md-0 mb-5">
                    <div className="card" style={{boxShadow:'none', backgroundColor: 'transparent'}}>
                        <form onSubmit={submit}>


                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" name="title" className="form-control" onChange={handleInput} value={jobInput.title} required/>
                                            <label className="form-label" htmlFor="form6Example4">Job Title</label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-floating mb-0">
                                        <textarea id="form6Example4" className="form-control" name="description" onChange={handleInput} value={jobInput.description} required/>
                                        <label className="form-label" htmlFor="form6Example4">Job Description</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">


                                <div className="col-md-6">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control" name="company" onChange={handleInput} value={jobInput.company} required/>
                                        <label className="form-label" htmlFor="form6Example4">Company Name</label>
                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control" name="website" onChange={handleInput} value={jobInput.website} required/>
                                        <label className="form-label" htmlFor="form6Example4">Company Website</label>
                                    </div>
                                </div>


                            </div>


                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control" name="country" onChange={handleInput} value={jobInput.country} required/>
                                        <label className="form-label" htmlFor="form6Example4">Country</label>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control" name="state" onChange={handleInput} value={jobInput.state} required/>
                                        <label className="form-label" htmlFor="form6Example4">State</label>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control" name="period" onChange={handleInput} value={jobInput.period} required/>
                                        <label className="form-label" htmlFor="form6Example4">Job Period</label>
                                    </div>
                                </div>
                            </div>


                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-floating mb-0">
                                        <CurrencyFormat thousandSeparator={true} prefix={'₦'} type="text" id="form6Example4" className="form-control" name="payment" onChange={handleInput} value={jobInput.payment} required/>
                                        <label className="form-label" htmlFor="form6Example4">Payment</label>
                                    </div>
                                </div>



                                <div className="col-md-6">

                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control"name="skill" onChange={handleInput} value={jobInput.skill} required/>
                                        <label className="form-label" htmlFor="form6Example4">Required Knowledge, Skills and Abilities</label>
                                    </div>
                                </div>



                                <div className="col-md-12">
                                    <div className="form-floating mb-0">
                                        <input type="text" id="form6Example4" className="form-control" name="education" onChange={handleInput} value={jobInput.education} required/>
                                        <label className="form-label" htmlFor="form6Example4">Education + Experience</label>
                                    </div>
                                </div>

                            </div>


                            <div className="row">


                                <div className="col-md-12">

                                    <div className="form-floating mb-0">
                                    <select className="form-control"  id="form6Example3" name="jobnature" onChange={handleInput} value={jobInput.jobnature} required>
                                        <option></option>
                                        <option value="Full time">Full time</option>
                                        <option value="Part time">Part time</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <label className="form-label" htmlFor="form6Example3">Job nature</label>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center text-md-left">
                                <p style={{textAlign: 'center', fontWeight: 'bold'}}>{err}</p>
                                <button type="submit" className="btn btn-primary btn-block mb-4">Post AD</button>
                            </div>

                </form>

                    </div>
            </div>

        </Wrapper>
    );
};

export default CreateJob;