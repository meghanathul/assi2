import React, { Component } from 'react'
import './index.css'
export class Form extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            dept:'',
            rating:'',
            user:[]
        }
    }
    handelChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        }
        handelSubmit=(event)=>{
            event.preventDefault()
            console.log('fgjhgj',this.state);

            const tempObj={
                name:this.state.name,
                rating:this.state.rating,
                dept:this.state.dept
            }
            const tempArr=this.state.user;
            tempArr.push(tempObj)
            this.setState({
                user:tempArr
            })
        }
  render() {
      console.log(this.state)
    return (
      <div className='form'>
    <form>
        <lable htmlfor='name'><b> Name:</b></lable>
        <input type='text' id='name' placeholder="Enter your name.." name='name' onChange={this.handelChange} value={this.state.name}/>
        <br/>
        <lable htmlfor='dept'><b> Department:</b></lable>
        <input type='text' id='dept' name='dept' placeholder='Enter your department' onChange={this.handelChange}  value={this.state.dept}/>
        <br/>
        <lable htmlfor='rating'> <b>Rating:</b></lable>
        <input type='number' id='rating' name='rating' placeholder='Enter your reating..' onChange={this.handelChange}  value={this.state.rating}/>
        <br/>
        <button onClick={this.handelSubmit}><b>Submit</b></button>
    </form>
       {this.state.user.map((value,index)=>{
         return(
             <div id='alldata'>
                 <div className='data'>
                 name:{value.name} || Department:{value.dept} || Rating:{value.rating}

                 </div>
            </div>
         )  
       })}
      </div>
    )
  }
}

export default Form