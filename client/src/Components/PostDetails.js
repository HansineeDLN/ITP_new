import React, { Component } from 'react';
import axios from 'axios';


export default class PostDetails extends Component {
 constructor(props){
   super(props);

   this.state={
     post:{}
   };
 }
 componentDidMount(){
   const id = this.props.match.params.id;

   axios.get(`/post/${id}`).then((res) =>{
     if(res.data.success){
       this.setState({
         post:res.data.post
       });

       console.log(this.state.post);

     }
   });
 }
 
 
  render() {
    const {topic,description,date,postCategory} = this.state.post;
    return (
     <div style ={{marginTop:'20px'}}>
       <h4>{topic}</h4>
       <hr/>


       <dl className="row">
         <dt className="col-sm-3">Grade</dt>
         <dd className="col-sm-9">{description}</dd>
         
         <dt className="col-sm-3">Date</dt>
         <dd className="col-sm-9">{date}</dd>

         <dt className="col-sm-3">Attendance Status</dt>
         <dd className="col-sm-9">{postCategory}</dd>

        

       </dl>
     </div>
      
    )
  }
}