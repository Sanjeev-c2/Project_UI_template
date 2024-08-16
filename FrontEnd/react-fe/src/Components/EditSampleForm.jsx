import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EditSampleForm = () => {
    let [name,setName] = useState("")
   let [email,setEmail] = useState("")
   let [date,setDate] = useState("")
   let [age,setAge] = useState("")

   let param = useParams('')

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/sample-forms/detail/${param.id}/`)
        .then((res)=>{
            setName(res.data.name)
            setEmail(res.data.email)
            setDate(res.data.date)
            setAge(res.data.age)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

   function edit_details(e){
        e.preventDefault();
        let data = {name,email,date,age}
        axios.put(`http://localhost:8000/api/sample-forms/update/${param.id}/`,data)
        .then((res)=>{
            console.log(res.data);
            alert("Data has been Saved successfully!!!")
        })
        .catch((err)=>{
            console.log(err);
            alert("Couldn't saved!!!")
        })
   }
    return ( 
        <div className="editsampleform">
            <h2>Update Form</h2>
        <form onSubmit={edit_details}>
            <label htmlFor="">Name: </label>
            <input type="text" placeholder='Enter your name' 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="">Email: </label>
            <input type="email" placeholder='Enter your email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">D-O-B: </label>
            <input type="date" 
            value={date}
            onChange={(e)=>{setDate(e.target.value)}}/>
            <label htmlFor="">Age: </label>
            <input type="number" placeholder='Enter your Age'
            value={age}
            onChange={(e)=>{setAge(e.target.value)}}/>
            <button >Submit</button>
        </form>
        </div>
     );
}
 
export default EditSampleForm;