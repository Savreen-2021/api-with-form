import React,{useState,useEffect} from 'react'
import './App.css'

function Cart (){

    const [products , setProducts ] = useState([]);

     useEffect(  () => {
        // getProducts();
        // localStorage.getItem("data", JSON.parse(products));
        let cart = JSON.parse(localStorage.getItem("cartdata"));
        setProducts(cart);
        console.log(cart);
    } , []);

  
    const removeFromCart = (id)=>{
     let data = JSON.parse(localStorage.getItem("cartdata"))
     data.splice(id,1);
        localStorage.setItem("cartdata", JSON.stringify(data));
    }

    return(
        <div>
  
{
   
    products.map((value,index)=>{
        return(
            <div key={index} style={{ display:"inline-flex" , overflow:"hidden"  }} >
                            
                <div style={{ width : "250px" , height : "340px", backgroundColor : "#FFF", border : "1px solid #DCDCDC" ,padding:20 , margin : 10 , boxShadow : "0px 0px 5px #CCC" }}>

                    <img src={ value.image } style={ { display: "block" , margin:"0 auto", width:"200px",height:"200px" } } />
               
                      <div>
                              <h5 >
                              { value.title }
                            <small style={{textAlign:'right',float:"right"}}>${value.price}</small>
                                        
                              </h5>
                      </div>
                <button onClick={()=>removeFromCart(index)}>delete</button>
            </div>
            </div>
        )
    })
   
}
 
        </div>
    )
}
export default Cart