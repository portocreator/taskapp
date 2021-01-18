import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    //Se ejecuta antes de pintar la pantalla
    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json() //Transformar la respues a json
        console.log(data);
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Posts from an external API</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
