import React, {useState, useEffect} from 'react'
import "../App.css"
import axios from "axios"

const ViewUser = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();
    useEffect(() => {
        fetchUser();
    },[])

    const fetchUser = async () => {
        try {
            const res = await axios.get("https://userapp6.onrender.com/users");
            console.log(res.data);
            setUsers(res.data);
        } catch (error) {
            console.log("Data fetching error", error.message);
            setError(error.message);
        }
    }

  return (
    <div className='content'>
        <h1>List of Users</h1>
        <table>
            <thead>
                <tr>
                    <th>Sr.No.</th>
                    <th>User Email</th>
                    <th>User Name</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>#</td>
                    <td>
                        <input type="email" placeholder='Enter User Email' />
                    </td>
                    <td>
                        <input type="text" placeholder='Enter Name of User' />
                    </td>
                    <td>
                        <select name="role">
                            <option value="Student">Student</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </td>
                    <td>
                        <button className='addUser'>Add User</button>
                    </td>
                </tr>
            </thead>
            <tbody>
                {error || users.map((user,index) => (
                    <tr key={user.email}>
                        <td>{++index}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
                        </td>
                    </tr>
                ))}
                {/* <tr>
                    <td>1</td>
                    <td>tanisha@gmail.com</td>
                    <td>Tanisha</td>
                    <td>Student</td>
                    <td>
                        <button className='edit'>Edit</button>
                        <button className='delete'>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>riya@gmail.com</td>
                    <td>Riya</td>
                    <td>Student</td>
                    <td>
                        <button className='edit'>Edit</button>
                        <button className='delete'>Delete</button>
                    </td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default ViewUser