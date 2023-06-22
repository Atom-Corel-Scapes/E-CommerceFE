import React, { useEffect } from 'react'

import {useSelector,useDispatch} from 'react-redux';

import { useNavigate} from 'react-router-dom';

import {productlist} from '../Redux/productslice.js';

import'./Display.css'

function Display() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const{menu,loading}=useSelector((state)=>state.product);
    useEffect(()=>{
        dispatch(productlist());
    },[]);

    const handleSubmit=(e)=>{
      e.preventDefault();
      dispatch(productlist(e.target.elements[0].value));
    }


  return (
    <div className='background'>
<h1>ProductList</h1>
<form onSubmit={handleSubmit}></form>
<div>
  {loading && <div  >products are loading please wait..</div>}
      {
        !loading && menu.length > 0 && menu.map((item)=>(
          <div key={item.id}>
            <img src={item.productUrl} className='img'/>
            <div className='name'>{item.productName}</div>
            <div className='price'>${item.productPrice}</div>
            </div>
        ))
    
      }
      </div>
      

    </div>
  )
}

export default Display