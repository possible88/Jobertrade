import React, {useEffect, useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Button} from "@material-ui/core";
import {ArrowBackRounded} from "@material-ui/icons";
import {Link, useNavigate} from "react-router-dom";
import {Products} from "../models/product";
import axios from "axios";
import Filter from "../components/Filter";


const Search = () => {

    const [products, setProducts] = useState<Products[]>([]);
    const [filters, setFilters] = useState({
        s:'',
        page: 1
    });
 const navigate = useNavigate();
 const [lastPage, setLastPage] = useState(0)




    useEffect(  () => {
        (
            async () => {
                const arr = [];

                if (filters.s) {
                    arr.push(`s=${filters.s}`);
                }

                if (filters.page) {
                    arr.push(`page=${filters.page}`);
                }

                const {data} = await axios.get(`products/search?${arr.join('&')}`);
               setProducts(filters.page === 1 ? data.data : [...products, ...data.data]);
                setLastPage(data.last_page);
            }
        )();
    }, [filters]);

    return (
        <>
        <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{backgroundColor: 'white'}}>
            <Button onClick={() => navigate(-1)} startIcon={<ArrowBackRounded/>}  style={{border: 'none', fontSize: '20px', padding: '5px', margin: '5px',
                backgroundColor: 'white'}}>

            </Button>
        </header>
<div className="container" style={{top: '5px', position: 'relative'}}>
    <Filter products={products} filters={filters} setFilters={setFilters} lastPage={lastPage}/>
</div>
        </>
    );
};

export default Search;