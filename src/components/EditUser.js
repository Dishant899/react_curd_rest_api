import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export default function ListUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        getUser();
    }, []);
    function getUser() {
        axios.get(`http://localhost/restapi/index.php`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.id = id;
        axios.put(`http://localhost/restapi/index.php`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });

    }
    return (
        <div>
            <h1>Edit user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>First Name: </label>
                            </th>
                            <td>
                                <input value={inputs.FIRST_NAME} type="text" name="FIRST_NAME" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Last Name: </label>
                            </th>
                            <td>
                                <input value={inputs.LAST_NAME} type="text" name="LAST_NAME" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input value={inputs.EMAIL} type="text" name="EMAIL" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Phone: </label>
                            </th>
                            <td>
                                <input value={inputs.PHONE} type="number" name="PHONE" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Image URL: </label>
                            </th>
                            <td>
                                <input value={inputs.IMAGE_URL} type="text" name="IMAGE_URL" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}