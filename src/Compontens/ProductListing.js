import React , {useEffect,useCallback,useMemo} from 'react';
import axios, { Axios } from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsAtions';
import Product from './Product';

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const reponse = await axios.get("https://fakestoreapi.com/products")
        .catch((err) =>{
            console.log("Err:",err);

        });
        dispatch(setProducts(reponse.data));
    };
    useEffect(() =>{
        fetchProducts();
    },[]);
    console.log("Products:",products);
    return (
        <div className='container'>

           <Product></Product>
        </div>
    );
};

export default ProductListing;