import React from 'react'

const Login = () => {
    
    const[email,setEmail]=React.useState("")
    const[pass,setPass]=React.useState("")

    const handleSubmit = async()=>{
        try{
                const formData={
                    email,
                    pass
                }


            let res = await fetch(
              "https://nervous-newt-shift.cyclic.app/user/login",
              {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
        res = await res.json()
        console.log(res)
        localStorage.setItem("token",res.token)
        // alert(res.message)
        }catch(err){
            alert(err);
        }
    }



  return (
    <>
    <div>Login Page</div>
    
    <input type="text" placeholder='Enteremail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='Enterpassword' value={pass} onChange={(e)=>setPass(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login