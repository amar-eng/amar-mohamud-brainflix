import {API_URL, API_Key} from '../../utils/Data';
import React, { Component } from 'react';
import axios from "axios";
import './Main.scss'

class Main extends Component {
    // Change state
    state ={
        stuff:[],
    }

    componentDidMount(){
        // axios request goes here

        axios.get(API_URL+'/videos'+API_Key)
            .then((response)=>{
                const vidData = response.data;
                console.log (vidData) 
                this.setState({
                    stuff: vidData,
                })
            });
    }
    render() {
        return (
            <div>
                <h1>Main Page Tings</h1>
                {
                    this.state.stuff.map((item)=>{
                        return(
                            <div className = "side-vids" key = {item.id}>
                                <img src = {item.image} alt= {item.title} className ="side-vids__image" />
                                <div className = "side-vids__content">
                                    <p>{item.title}</p>
                                    <p>{item.channel}</p>
                                </div>
                                
                                

                            </div>

                            
                        )
                    })
                }
            </div>
        );
    }
}

export default Main;