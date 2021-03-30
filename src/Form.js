////data transfer to about page

import React , {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
//import Header from './Header'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components
const Child = (props) =>{

    useEffect( () => {

        //api calling

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) 
        .then(data => {

            saveUserData(data)
        
        })
        .catch(err=> console.log(err));

    } , [])

    const [object , setFormData ] = useState({});
    const [ allUserData , saveUserData ] = useState([]) 

    const saveData = () =>{
       // console.log(object)
       props.history.push({

        pathname : "/About" ,

        data : object

    });
    }

    return(
        <>
         
            {/* <Header object={object} /> */}
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

            </table>

           <h2>This data is coming form child component</h2>
            <form onSubmit={ (e) => e.preventDefault() }>
                
                <input type="text" value={object.firstname} onChange= { (e) => setFormData({ ...object,  firstname : e.target.value }) }  />

                <input type="text" value={object.lastname} onChange= { (e) => setFormData({ ...object,  lastname : e.target.value }) }  />
                
                <input type="text" value={object.email} onChange= { (e) => setFormData({ ...object,  email : e.target.value }) }  />

             
                <button onClick= { () =>saveData(object) }>SubmitDetails</button>
                
            </form>
        
        </>
    )
}

export default Child;