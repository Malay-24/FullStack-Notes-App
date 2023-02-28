import React from 'react'

const Register = () => {
    const[name,setName]=React.useState("")
    const[email,setEmail]=React.useState("")
    const[pass,setPass]=React.useState("")

    const handleSubmit = async()=>{
        try{
                const formData={
                    name,
                    email,
                    pass
                }


            let res = await fetch(
              "https://nervous-newt-shift.cyclic.app/user/register",
              {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
        res = await res.json()
        alert(res.message)
        }catch(err){
            alert(err);
        }
    }



  return (
    <>
    <div>Registration Page</div>
    <input type="text" placeholder='Entername'value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type="text" placeholder='Enteremail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder='Enterpassword' value={pass} onChange={(e)=>setPass(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Register


