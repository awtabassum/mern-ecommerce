import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "../components/Loader"
import Error from "../components/Error"
import {updateUser} from "../actions/userActions"

function Profilescreen() {
    const loginState = useSelector(state => state.user)
    // const currentUser = loginState.currentUser
    // const currentUser = loginState?.userData
    const { currentUser } = useSelector((state) => state.user) || {}; // Safe access
    const updateUserState = useSelector(state=>state.updateUser)
    
        // const [name, setname] = useState(currentUser.name);
        // const [email, setemail] = useState(currentUser.email);

        const [name, setname] = useState(currentUser?.name || '');
        const [email, setemail] = useState(currentUser?.email || '');
  
    
        const [password, setpassword] = useState('');
        const [cpassword, setcpassword] = useState('');

        useEffect(() => {
          if (currentUser) {
              setname(currentUser.name);
              setemail(currentUser.email);
          }
      }, [currentUser])

        const dispatch = useDispatch()
        const update = (e) => {
        e.preventDefault()
        if (password === cpassword) {
           
            const updatedUserData  = {
                name:name,
                email:email,
                password:password,
         }
         dispatch(updateUser(currentUser._id, updatedUserData));
        }
         else {
            alert("Password not matched with Confirm Password")
         }
         
        }
        console.log("Redux state:", currentUser);
console.log("LocalStorage:", localStorage.getItem("currentUser"));

  return (
    <>
    <h1>Profilescreen</h1>
    <div className='row justify-content-center'>
            <div className='col-md-5 card p-3' style={{marginTop:'150px'}}>
             <div className='div'>
              <h2 className='text-center m-3'>Update</h2>
              <form action="">
              <input type='text' placeholder='name' className='form-control' value={name} required onChange={(e)=>{setname(e.target.value)}}/>
              <input type='text' placeholder='email' className='form-control' value={email} required onChange={(e)=>{setemail(e.target.value)}}/>
              <input type='text' placeholder='password' className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
              <input type='text' placeholder='confirm password' className='form-control' value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>
              <div className='text-right'>
              <button className='btn mt-3' onClick={update}>UPDATE</button>
              </div>
              </form>
             </div>
            </div>
        </div>
    </>
  )
}

export default Profilescreen