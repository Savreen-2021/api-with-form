//data goes to same page

import React , {useState} from "react";
import Bar from './Bar';
import {Link} from 'react-router-dom';

const Form = () => {
    // useEffect( () => {

    //     //api calling

    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json()) 
    //     .then(data => {

    //         saveUserData(data)
        
    //     })
    //     .catch(err=> console.log(err));

    // } , [])
    const[object, setFormData] = useState({})

    const saveData = () =>{console.log(object)}

    // const [ allUserData , saveUserData ] = useState([]) 

    // const saveData = () =>{
    //     console.log(object)
    // }
    

    return(
        <>
{/* 

         <table>
                
                <th>Name</th>
                       <th>Email</th>
                        <th>Username</th>
                    <tbody>
                        {
                            allUserData.map( (value,index)=>{
                                return(
                                    <tr>
                                    <td>
                                    {value.name}
                                    </td> 
                                    <td>
                                    {value.email}
                                    </td> 
                                    <td>
                                    {value.username}
                                    </td> 
                                     </tr>
                                )
    
                            } )
                        }
                        
                    </tbody>
    
                </table> */}

        <Bar object={object}/>
            <h2>Fill your details over here</h2>
            <form onSubmit={ (e) =>e.preventDefault()}>
                <input type = "text" value={object.firstname} placeholder = "Name" onChange= {(e) =>setFormData({...object, firstname : e.target.value}) } ></input><br/>

                <input type = "text" value={object.lastname}  placeholder = "Lastname" onChange= {(e) =>setFormData({...object, lastname : e.target.value}) } ></input><br/>

                <input type = "text" value={object.email}  placeholder = "Email" onChange= {(e) =>setFormData({...object, email : e.target.value}) } ></input><br/>

               <Link to= "./About"> <button onClick= { () =>saveData() }>SubmitDetails</button></Link>
                
            </form>
            
        </>
    )
}

export default Form;