import React from 'react'

const Notes = () => {
    const [data,setData]=React.useState([])


    const handleSubmit=async()=>{
      
       await fetch("https://nervous-newt-shift.cyclic.app/notes",{
            headers:{
                
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json()).then(res=>setData(res)).catch(err=>console.log(err))
    }
    console.log(data)
    React.useEffect(()=>{
        handleSubmit()
    },[])

    const handleDelete=async(noteID)=>{
      await  fetch(`https://nervous-newt-shift.cyclic.app/notes/delete/${noteID}`,{
            method:"DELETE",
            headers:{
                
                "Authorization":localStorage.getItem("token")
            } 
        })
        handleSubmit()
    }

  return (
    <>
    <h1>All notes</h1>
    {data.map((el,ind)=>{
       return(
        <div key={el._id}>
            <h2>Title:{el.title}</h2>
            <p>Note:{el.note}</p>
            <p>Category:{el.category}</p>
            <button onClick={()=>handleDelete(el._id)}>Delete</button>
            <hr/>
        </div>
       )
    })}
    </>
  )
}

export default Notes