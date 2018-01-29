import React, {Component} from 'react'
import Aux from '../../hoc/Aux';
import Posts from '../../components/Posts/Posts';
import Post from '../../components/Posts/Post/Post';
import axios from 'axios';

class Blog extends Component{

  state = {
        posts:[]
    }

    componentDidMount(){
            axios.get("http://arulselvan.net/wp-json/wp/v2/posts")
            .then((response)=>{           
                this.setState({posts:response.data})
            })
    }

    
    render(){
        const posts= this.state.posts.map((post,index)=>{
            return <Post key={post.id} title={post.title.rendered} content={post.content.rendered}/>
        });


        return (
            <Aux>
               {posts}
            </Aux>
        )
    }
}


export default Blog