import React, {Component} from 'react'
import Aux from '../../hoc/Aux';
import Posts from '../../components/Posts/Posts';
import Post from '../../components/Posts/Post/Post';
import axios from 'axios';
import * as actions from './../../store/actions'
import { connect } from 'react-redux';

class Blog extends Component{

  state = {
        posts:[]
    }

    componentDidMount(){
           /* axios.get("http://arulselvan.net/wp-json/wp/v2/posts")
            .then((response)=>{           
                this.setState({posts:response.data})
            })*/

            this.props.getPosts();
    }

    
    render(){
        const posts= this.props.posts.map((post,index)=>{
            return <Post key={post.id} title={post.title.rendered} content={post.content.rendered}/>
        });


        return (
            <Aux>
               {posts}
            </Aux>
        )
    }
}

const mapStateToProps = state =>{
    return {
        posts:state
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getPosts:()=> actions.getPosts()(dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Blog)