import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { filterProducts } from '../actions/productActions';

function Filter() {
  const dispatch = useDispatch();
  const [searchKey,setSearchKey] = useState('');
  const [sort, setSort] = useState('popular');
  const [category, setCategory] = useState('all');
  
  return (
    <>
    <div>
   <div className="row justify-content-center">
    <div className="col-md-3 mt-2 ml-2">
      <input value={searchKey} onChange={(e)=>{setSearchKey(e.target.value)}} type="text" placeholder='Search Products' className='form-control' />
    </div>
    <div className="col-m-2 mt-4 ml-2">
      <select className='form-control' value={sort} onChange={(e)=>(setSort(e.target.value))}>
        <option value="popular">Popular</option>
        <option value="htl">High to Low</option>
        <option value="lth">Low to High</option>
      </select>
    </div>
    <div className="col-m-2 mt-4 ml-2">
      <select className='form-control' value={category} onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="mobiles">Mobiles</option>
        <option value="games">Games</option>
      </select>
    </div>
    <div className="col-m-2 mt-4 ml-2">
      <button className='btn' onClick={()=>{dispatch(filterProducts(searchKey, sort, category))}}>FILTER</button>
    </div>
   </div>
   </div>
</>
  )
}

export default Filter