import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {setCartCount}= props
    return (
        <div>
                <div className="card border p-3 m-3">
                    <img src={props.product.image} alt="" />
                   <h2>{props.product.title.slice(0,10)}</h2>
                   <div className='d-flex justify-content-around m-2 gap-3'>
                   <button onClick={setCartCount} className='btn btn-info'>Add to cart</button>
                    <button className='btn btn-success'>Delate</button>
                    {/* <button className='btn btn-danger '>Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                   </div>
            </div>
        </div>
    );
};
//   141 mint
export default Product;