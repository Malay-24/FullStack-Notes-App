import React from 'react'

const CreateNote = () => {
    const[title,setTitle]=React.useState("")
    const[note,setNote]=React.useState("")
    const[category,setCategory]=React.useState("")


    const handleSubmit=async()=>{
        const payload={
            title,
            note,
            category
        }
        console.log(payload)
       await fetch("https://nervous-newt-shift.cyclic.app/notes/create",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

  return (
    <>
    <div>Create Notes Page</div>
    <input type="text" placeholder='Enter title'value={title} onChange={(e)=>setTitle(e.target.value)}/>
    <input type="text" placeholder='Enter Note' value={note} onChange={(e)=>setNote(e.target.value)}/>
    <input type="text" placeholder='Enter Category' value={category} onChange={(e)=>setCategory(e.target.value)} />
    <button onClick={handleSubmit}>Add Note</button>
    </>
  )
}

export default CreateNote