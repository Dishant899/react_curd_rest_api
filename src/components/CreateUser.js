import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        inputs.PHONE = parseInt(inputs.PHONE)
        console.log(`inputs: ${JSON.stringify(inputs)}`)
        axios.post('http://localhost/restapi/index.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    
    return (
        <div>
            <h1>Create user</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>First Name: </label>
                            </th>
                            <td>
                                <input type="text" name="FIRST_NAME" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Last Name: </label>
                            </th>
                            <td>
                                <input type="text" name="LAST_NAME" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input type="text" name="EMAIL" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Phone: </label>
                            </th>
                            <td>
                                <input type="number" name="PHONE" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Image URL: </label>
                            </th>
                            <td>
                                <input type="text" name="IMAGE_URL" onChange={handleChange} />
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
