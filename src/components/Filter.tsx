import React from 'react';
import {Link} from "react-router-dom";
import {Products} from "../models/product";
import { Filters } from '../models/filters';

const Filter = (props: {products: Products[],
    filters: Filters,
    setFilters: (filters: Filters) => void,
    lastPage: number
}) => {

    const search = (s: string) => {
        props.setFilters({
            ...props.filters,
            page: 1,
            s
        });
    }

    const load = () => {
        props.setFilters({
            ...props.filters,
            page: props.filters.page + 1
        })
    }

    let button;

    if (props.filters.page != props.lastPage) {
        button = (
          <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary" onClick={load}>Load More</button>
            </div>
        )
    }

    return (
        <>
            <input type="text" placeholder="Search......" onChange={event => search(event.target.value)} className="form-control"/>
                <div className="alllist">
                    {props.products.map(products => {
                        return(

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

                        )})
                    }
                </div>
            {button}
        </>
    );
};

export default Filter;