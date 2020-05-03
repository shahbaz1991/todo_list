import React,{Component} from 'react';

class Task extends Component {
    
    render(){
        return(
            <div className='Task'>
                <div className='Task_m'>
                    
                    {this.props.list.map((todoObject,index) => 
                    <div className='Task_Text' key={index}>
                        <div className='Text'>
                        {todoObject.title}
                        </div>
                        <div className='Task_but'>
                            
                            <button className='btn btn-outline-primary' onClick={(() => this.props.handleDis(todoObject))}>
                                Details
                            </button>
                            
                             
                            <button className='btn btn-outline-primary' onClick={(e => this.props.handleDelete(todoObject))}>
                                Delete
                            </button> 
                            
                        </div>          
                    </div>)}
                    
                </div> 
            </div>
        );
    }
}
export default Task;