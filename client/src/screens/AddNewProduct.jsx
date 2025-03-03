import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

function AddNewProduct() {
  const [name, setName] = useState("")
const [price, setPrice] = useState()
const [countInStock, setcountInStock] = useState()
const [image, setImage] = useState("")
const [category, setCategory] = useState("")
const [description, setDescription] = useState("")

const dispatch = useDispatch()

const addProduct = (e) => {
    e.preventDefault()
    const product = {
        name: name,
        price: price,
        countInStock: countInStock,
        image:image,
        category:category,
        description:description
    }
}
  return (
    <>
    <div className = "row justify-content-center">
    <div className = "col-md-7 card p-3" style={{marginTop:"150px"}}>
     <div className = "div">
     <h2 className="text-center m-3">Add Product</h2>
     <form action="">
      <input type="text" placeholder="name" className="form-control" value={name} required onChange={(e)=>{setName(e.target.value)}}/>
      <input type="text" placeholder="price" className="form-control" value={price} required onChange={(e)=>{setPrice(e.target.value)}}/>
      <input type="text" placeholder="description" className="form-control" value={description} required onChange={(e)=>{setDescription(e.target.value)}}/>
      
      <input type="text" placeholder="image" className="form-control" value={image} required onChange={(e)=>{setImage(e.target.value)}}/>
      <input type="text" placeholder="category" className="form-control" value={category} required onChange={(e)=>{setCategory(e.target.value)}}/>
      <input type="text" placeholder="countInStock" className="form-control" value={countInStock} required onChange={(e)=>{setcountInStock(e.target.value)}}/>
      <button type="submit" className="btn btn-primary mt-3">Add Product</button>

     </form>
     </div>
    </div>
    </div>
    </>
  )
}

export default AddNewProduct