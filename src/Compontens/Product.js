import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Product = () => {
    const  products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const {id,title,image,price,category} = product;
        return (
            <div className='container ' key={id}>
            <Link to={`/product/${id}`} >
            <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{price}</p>
        <p class="card-text"><small class="text-muted">{price}</small></p>
        <p class="card-text"><small class="text-muted">{category}</small></p>
      </div>
    </div>
  </div>
</div>
            </Link>
            
            
        </div>
        );

    });
        
   
    return <>{ renderList }</>;
};

export default Product;