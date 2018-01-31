import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const GET_SINGLE_POST = 'GET_SINGLE_POST';


export function getPosts() {
    return function (dispatch) {
        
        axios.get("http://arulselvan.net/wp-json/wp/v2/posts")
             .then((response)=>{           
                //this.setState({posts:response.data})
                dispatch({
                    type:GET_POSTS,
                    payload:response.data
                })
        })

    }
}