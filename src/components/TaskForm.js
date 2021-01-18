import React, {Component} from "react"

export default class TaskForm extends Component{

    state = {
        title: '',
        description: '',
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description); //Ejecutando metodo desde app, asi enlazamos los 2 componentes
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value //e.target.name es el nombre del input en el html
        })
    }

    render(){
        
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                type="text" 
                name="title"
                placeholder="Write a task" 
                onChange={this.onChange} 
                value={this.state.title}
                />
                <br/><br/>
                <textarea
                name="description"
                placeholder="Write a description" 
                onChange={this.onChange} 
                value={this.state.descripction}
                />
                <br/><br/>
                <input type="submit"/>
            </form>
        )
    }
}