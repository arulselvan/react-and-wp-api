import React,{Component} from 'react';
import axios from 'axios';

class Page extends Component{

    state={
        pageDetails = null
    }

    componentDidUpdate(){

        if(state.pageDetails==null){
            axios.get("").then(()=>{
                
            })
        }

    }

    render(){
        return <div>{props.slug}</div>
    }
}

export default Page;