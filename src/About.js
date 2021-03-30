
// import React, {useState,useEffect} from 'react';
// import Bar from './Bar';

// const About=(props)=>{
//     console.log(props.location.data);
//     useEffect( () => {

//         //api calling

//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json()) 
//         .then(data => {

//             saveUserData(data)
//             console.log(data);
        
//         })
//         .catch(err=> console.log(err));

//     } , [])
    
//     const[object, setFormData] = useState({});
    
//     const [ allUserData , saveUserData ] = useState([]) 

//         return(
//             <div style=
//             {{marginTop:"100px"}
//             }>

//                  <Bar object={object}/>
//                 <h1> {object} </h1>
//                 <table>
                
//                 <th>Name</th>
//                        <th>Email</th>
//                         <th>Username</th>
//                     <tbody>
//                         {
//                             allUserData.map( (value,index)=>{
//                                 return(
//                                     <tr>
//                                     <td>
//                                     {value.name}
//                                     </td> 
//                                     <td>
//                                     {value.email}
//                                     </td> 
//                                     <td>
//                                     {value.username}
//                                     </td> 
//                                      </tr>
//                                 )
    
//                             } )
//                         }
                        
//                     </tbody>
    
//                 </table>
                
                        
//             </div>
//         ); 
// }
// export default About;


import { render } from "@testing-library/react";
import React , {useState,useEffect} from "react";
//import Bar from './Bar';
//import Form from './Form';
//import Header from './Header'
//state is an object and is a collection of variables
//spread operators ...
//state -- can be updated , can only be used in a single component
//props -- cannot be updated , can be used in the whole project , used to transfer data between components --> parent to child components



const About = (props) =>{

   // console.log(props.location.data)
    
     const[object, setFormData] = useState({});

    const [datafromprops , saveDatafromprops] = useState({});

    useEffect( ()=>{
        saveDatafromprops(props.location.data)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()) 
        .then(data => {

            saveUserData(data);
            console.log(data);

        
        })
        .catch(err=> console.log(err));
    } , [])

    const [ allUserData , saveUserData ] = useState([]);


    return(
        <>
           {/* <Bar object={object}/> */}
           <h1>This is a about page</h1>
         

             <p> Email - { datafromprops.email ? datafromprops.email : '' } </p>
            <p> Firstname - { datafromprops.firstname ? datafromprops.firstname : '' } </p>
            <p> Lastname - { datafromprops.lastname ? datafromprops.lastname : '' } </p>  
 

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
            

           
           
        </>
    )
}


export default About;
