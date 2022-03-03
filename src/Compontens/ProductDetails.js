import React,{useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { selectProduct,rremoveSelectedProduct, removeSelectedProduct } from '../redux/actions/productsAtions';

const ProductDetails = () => {
    const {productId} = useParams();
    let product = useSelector((state)=> state.product);
    const {image,title,price,category,discription} = product;
    const dispatch = useDispatch();
    const fetchProductsDetail = async(id) =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
       .catch((err)=> {
           console.log("Error:",err);

       })
       dispatch(selectProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !=="") fetchProductsDetail(productId);
        return()=>{
            dispatch(removeSelectedProduct());
        
        };
    },[productId]);
    return (
        <div className='container'>
            {Object.keys(product).length===0?(
                <div>...loading</div>
            ):(
                <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text"> ${price}</p>
        <p class="card-text"><small class="text-muted">{category}</small></p>
        <p class="card-text"><small class="text-muted">{discription}</small></p>
      </div>
    </div>
  </div>
</div>
            

            )}
            
        </div>
    );
};

export default ProductDetails;