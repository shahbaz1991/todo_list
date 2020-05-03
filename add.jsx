import React, { Component } from 'react'
import Task from '../compo/task'
import Dis from '../compo/dis'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            task:'',
            todoList:[],
        }
    }
    handleDelete =(todoItem)=>{
        const nw=this.state.todoList.filter((item)=> item!==todoItem)
        this.setState({todoList:nw,dis:''})
    }
               
    handleDis =(todoItem)=>{
        this.setState({
            dis: todoItem.description
        })
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleAdd=(event)=>{    
        this.setState({
            todoList: [...this.state.todoList, {title: this.state.title, description: this.state.task}]
        })
        this.setState({
            title:'',
            task:''
        })
        event.preventDefault() 
    }

    render(){
        return(
            <div>
                <div >
                    <form className='In_But' onSubmit={this.handleAdd}>
                        <div className='Input1'>                        
                            <div>
                                <input type='text'  name='title' onChange={this.handleChange} 
                                    value={this.state.title} placeholder='Enter to Title' required/>
                            </div>
                            <div>
                                <textarea row='5' cols='50'   name='task' onChange={this.handleChange} 
                                        value={this.state.task} placeholder='Enter Todo Task...' required></textarea>
                            </div>
                        </div>   
                            <div className='Input2'>            
                                <button className='btn btn-outline-primary' type='submit'>
                                        <b>A<br></br>d<br></br>d</b></button>
                            </div>
                    </form>  
                </div>
                
                <div className='Title'><b>TASK</b></div>
                
                <Task  list={this.state.todoList} handleDis={this.handleDis} handleDelete={this.handleDelete}/>    
                
                <div className='Title'><b>DESCRIPTION</b></div>
                <div className='Dis'>              
                <Dis  dis={this.state.dis}/> 
                </div>     
            </div>            
        );
    }
}


export default Todo;