import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GoBack from '../components/goBack';
import { Job } from '../models/Job';
import { User } from '../models/User';

const Viewjob = () => {

    const [jobs, setJobs] = useState(new Job());
   
    const { id } = useParams();

    const [user, setUser] = useState(new User());

  
    console.log({id})

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
                const {data} = await axios.get(`jobs/${id}`);
                setJobs(new Job(
                    data.id,
                    data.title,
                    data.description,
                    data.company,
                    data.website,
                    data.period,
                    data.job_nature,
                    data.skill,
                    data.education,
                    data.state,
                    data.country,
                    data.payment,
                ));
                // setlLastPage(data.meta.last_page);
            }
        )();
    }, []);




    return (
        <div className="container">

                <GoBack/>
                        <div className=" row">
                            <div className="preview col-12 col-lg-8 col-xxl-9 d-flex">
                            <div className="card flex-fill" style={{boxShadow:'none'}}>
                            <h6 className="list-group-item">Job Title: {jobs.title}</h6>
                                <h6 className="list-group-item">Job description: {jobs.description}</h6>
                                <h6 className="list-group-item">Education + Experience: {jobs.education}</h6>
                                <h6 className="list-group-item">Required Knowledge, Skills and Abilities: {jobs.skill}  {jobs.country}</h6>
                                
                           </div>
                            </div>
                            <div className="details col-12 col-lg-4 col-xxl-3 d-flex">
                            <div className="card flex-fill w-100" style={{boxShadow:'none'}}>
                                <div className="card-header">
                                
                                </div>
                                
                                <h6 className="list-group-item">Job Nature: {jobs.job_nature}</h6>
                                <h6 className="list-group-item">Job Period: {jobs.period}</h6>
                                <h6 className="list-group-item">Payment: {jobs.payment}</h6>
                                <h6 className="list-group-item">Location: {jobs.state}  {jobs.country}
                                </h6>
                                <h6 className="list-group-item">Company: {jobs.company}
                                </h6>
                                <h6 className="list-group-item">Website: {jobs.website}
                                </h6>


</div>

                            </div>
                        </div>
            </div>
    );
};

export default Viewjob;