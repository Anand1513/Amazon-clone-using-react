export const getProducts =()=>async(dispatch)=>{
    try {
         const data = await fetch ("https://localhost:8005/getproducts",{
            method: "GET",
            headers:{
                "content-Type":"application/json"
            }
         });
         const res = await data.json();
         console.log(res);
         dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
        
    }
}