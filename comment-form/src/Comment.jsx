import {useState} from 'react'
import './App.css'
import CommentForm from './CommentForm'

function comment(){
    const [comments,setComments]=useState([]);
    function commentAdd(obj){
        setComments((comments) => {return [...comments,obj]});
    }
    return(<>
             {comments.map((ob,idx)=>{
                   return(<div key='idx'>
                            <p>{ob.review}</p>
                            &nbsp;
                            <p>{ob.rating}</p>
                            <br></br>
                            <p>{ob.userName}</p>
                          </div>)})}
              <CommentForm commentAdd={commentAdd}></CommentForm>
            </>);
}
        
export default comment;