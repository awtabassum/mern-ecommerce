import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {registerNewUser} from '../actions/userActions'

function Registerscreen() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');

    const dispatch = useDispatch();

    const register = (e) => {
      e.preventDefault();
      if (password==cpassword) {
        const user = {
          name: name,
          email:email,
          password:password,
        }
        dispatch(registerNewUser(user))
        // dispatch(registerNewUser())
        
      } else {
        alert("password not matched")
      }
    }
  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-5 card p-3' style={{marginTop:'150px'}}>
             <div className='div'>
              <h2 className='text-center m-3'>Register</h2>
              <form action="">
              <input type='text' placeholder='name' className='form-control' value={name} required onChange={(e)=>{setname(e.target.value)}}/>
              <input type='text' placeholder='email' className='form-control' value={email} required onChange={(e)=>{setemail(e.target.value)}}/>
              <input type='text' placeholder='password' className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
              <input type='text' placeholder='confirm password' className='form-control' value={cpassword} required onChange={(e)=>{setcpassword(e.target.value)}}/>
              <div className='text-right'>
              <button className='btn mt-3' onClick={register}>REGISTER</button>
              </div>
              </form>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Registerscreen