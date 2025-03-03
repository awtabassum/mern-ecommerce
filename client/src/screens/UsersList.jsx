
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getAllUsers} from '../actions/userActions'
import Loader from '../components/Loader';
import Error from '../components/Error';

function UsersList() {

// const usersDetails = useSelector((state) => state.users.usersData )
const {usersData, status} = useSelector((state) => state.users)
console.log("Users Data from Redux:", usersData);

// const {users, loading, error} = usersDetails;
// console.log("Users Data from Redux:", usersData);
//   console.log("Data Type:", typeof(usersData));
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(getAllUsers())
}, [dispatch])
// console.log("Status:", status, "Users Data:", usersData);
const loading = status ==='loading';
const error = status === 'failed';
  return (
    <>
    <h2>Users List</h2>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {loading && (<Loader />)}
        {error && (<Error error='something went wrong'/>)}
        {/* {usersData && (usersData.map(user=>{
          return <tr>
            <td>{user._id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td><i className="far fa-trash-alt"></i></td>
          </tr>
        }))} */}

        {/* {usersData && Array.isArray(usersData) && usersData.map(user => (
  <tr key={user._id}>
    <td>{user._id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td><i className="far fa-trash-alt"></i></td>
  </tr>
))} */}

{/* {Array.isArray(usersData) && usersData?.length > 0 ? (

  usersData.map(user => ( */}

  {usersData && Array.isArray(usersData) && usersData.length > 0 ? (
    usersData.map((user) => (
    <tr key={user._id}>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td><i className="far fa-trash-alt" onClick={()=>{dispatch(deleteUser(user._id))}}></i></td>
    </tr>
  ))
) : (
  !loading && !error && <tr><td colSpan="4">No users found</td></tr>
)}


      </tbody>
    </table>
    </>
  )
}

export default UsersList

