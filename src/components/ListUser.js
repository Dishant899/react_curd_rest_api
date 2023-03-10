import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/restapi/index.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/restapi/index.php/${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <div>
            <h1>List Users</h1>
            <table align="center" id="users_table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.FIRST_NAME}</td>
                            <td>{user.LAST_NAME}</td>
                            <td>{user.EMAIL}</td>
                            <td>{user.PHONE}</td>
                            <td>
                                <Link class="edit-button" to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button class="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}