import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { Job } from "../models/Job";

const Jobs = () => {
    const [jobs, setjobs] = useState<Job[]>([]);
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
    }, [jobs]);
  
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
        `jobs?page=${page}`
      );
  
      if (data.data.length === 0) {
        setHasEnded(true);
      } else {
        setjobs([...jobs, ...data.data]);
      }
  
      setLoading(false);
    };
  
    const renderjobs = () => {
      return jobs.map((jobs) => {
        return (
          <div key={jobs.id}>
                            <Link to={`../jobs/${jobs.id}/${jobs.title}`} className='card flex-fill w-100' style={{margin: '5px'}}>
                                  <div className="card-header">
                                  <h6 style={{fontSize: 'small', margin: '5px', padding: '5px'}}><strong>{jobs.title}</strong></h6>
                                  </div>
                                  <div className="card-body" style={{backgroundColor: '#fff', height: '75px'}}>
                                      <h6 style={{fontSize: 'small'}}><b>Payment: </b>{jobs.payment}</h6>
                                      <h6 style={{fontSize: 'small'}}><b>Company: </b>{jobs.company}</h6>
                                  </div>
                                  <div className="card-footer">
                                      <h6 style={{float: 'right', fontSize: 'small'}}>{jobs.state}{jobs.country}</h6>
                                  </div>
  
                              </Link>
                          </div>
  
        );
      });
    };
  
    if (!jobs) return <div />;
  
    return (
      <div ref={container}>
        {renderjobs()}
        {loading && <Loading />}
        {hasEnded && (
          <div className="end-jobs-msg">
            <p></p>
          </div>
        )}
      </div>
    );
  };
  

export default Jobs;