import React, { Component } from 'react'
import axios from 'axios'


class Postlist extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errormsg:''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errormsg:'error retreiving data'})
        })
    }

    render() {
        const { posts , errormsg }=this.state
        return (
            <div>
                List of post 
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>):
                    null
                }
                {errormsg?<div>{errormsg}</div>:null}
            </div>
        )
    }
}

export default Postlist