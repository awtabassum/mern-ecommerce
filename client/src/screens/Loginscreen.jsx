import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../actions/userActions'
import Error from '../components/Error';
import Loader from '../components/Loader';

function Loginscreen() {
    // const loginuser = useSelector(state=>state.user)
    // const { status } = loginuser;
    // const loading = status === 'idle';
    // const error = status === 'failed';
    
    const { userData, status } = useSelector(state => state.users);
    const loading = status === 'loading';
    const error = status === 'failed';


    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    
    const dispatch = useDispatch();

    const login = (e) => {
      e.preventDefault();
      
        const user = {
          email:email,
          password:password,
        }
        dispatch(loginUser(user))     
    }
useEffect(() => {
  if (localStorage.getItem('currentUser')) {
    window.location.href='/'
  }
}, [])


  return (
    <div>
        <div className='row justify-content-center'>
            <div className='col-md-4 card p-3' style={{marginTop:'150px'}}>
             <div className='div'>
              <h2 className='text-center m-3'>LOGIN</h2>
              {error && (<Error error='invalid credentials'/>)}
              {loading && (<Loader />)}
              <form action="">
              <input type='text' placeholder='email' className='form-control' value={email} required onChange={(e)=>{setemail(e.target.value)}}/>
              <input type='text' placeholder='password' className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
              
              <div className='text-right'>
              <button className='btn mt-3' onClick={login}>LOGIN</button>
              </div>
              </form>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Loginscreen