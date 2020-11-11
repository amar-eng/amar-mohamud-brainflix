import {API_URL, API_Key} from '../../utils/Data';
import React, { Component } from 'react';
import axios from "axios";

class Main extends Component {
    // Change state
    state ={
        stuff:null
    }

    componentDidMount(){
        // axios request goes here

        axios.get(API_URL+'/videos'+API_Key)
            .then((response)=>{
                const vidData = response.data[0]; 
                this.setState({
                    stuff: vidData,
                })
            });
    }
    render() {
        return (
            <div>
                <h1>Main Page Tings</h1>
                data: {this.state.stuff}
            </div>
        );
    }
}

export default Main;