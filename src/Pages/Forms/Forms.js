import "./Forms.css";
import {useState} from "react";

function Forms()
{
    const pre=(e)=>{
        e.preventDefault();
    }

    const [data,setData] =useState(
        {
            firstName:"Suriya Prakash A ",
            age:22
        }
    );

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        });
    }   

    return(
        <>
        <table className="table-container">
            <tr>
                <th>Name</th>
                <td>{data.firstName}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{data.age}</td>
            </tr>
        </table>

        <form action="" className="form-container" method="get" onsubmit={pre}>
            <label>
                <input type="text" name="firstName" placeholder="suriya" value={data.firstName} onChange={handleChange} /><br/>
                <input type="number" name="age" placeholder="25" value={data.age} onChange={handleChange} /><br />
                <input type="submit" value="Submit"/>
            </label>
        </form>
        </>
    )
}

export default Forms;