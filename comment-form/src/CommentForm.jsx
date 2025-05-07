import {useState} from 'react'
import './App.css'

function commentForm({commentAdd}){
    const [formData,setFormData]=useState({
        userName:'',
        review:'',
        rating:5});

        function handelChange(event){
            console.log(event.target.value);
            setFormData((prevVal)=>{return({...prevVal,[event.target.name]:event.target.value})})
        }

        function submitHandler(event){
                event.preventDefault();
        }

         return(
            <form onSubmit={submitHandler}>
                <label htmlFor='Username'>Username : </label>
                <input 
                type='text'
                onChange={handelChange}
                value={formData.userName}
                name='userName'
                id='Username'>
                </input>
                <br></br>
                <br></br>

                <label htmlFor='review'>Review : </label>
                <input 
                onChange={handelChange}
                type='text'
                value={formData.review}
                name='review'
                id='review'>
                </input>
                <br></br>
                <br></br>
                
                <label htmlFor='rating'>Rating : </label>
                <input 
                onChange={handelChange}
                type='number'
                value={formData.rating}
                name='rating'
                id='rating'
                min={1}
                max={5}>
                </input>
                <br></br>
                <br></br>

                <button onClick={() => commentAdd(formData)}>Add comment</button>

            </form>
         );
}

export default commentForm;