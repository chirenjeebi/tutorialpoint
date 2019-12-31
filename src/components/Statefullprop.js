import React, { Component } from 'react'

export class Statefullprop extends Component {
    constructor(props){
        super(props);

        this.state={
            header:"Header from state.....",
            content:"Content from state...."
          }
    }
    render() {
        var myStyle={
            fontSize:30,
           
            color:'green'
        }
        return (
            <div style={myStyle}>
                 <h1>{this.state.header}</h1>
                 <h2>{this.state.content}</h2>
                 <h3>{this.props.nepal}</h3>

            </div>
        )
    }
}

export default Statefullprop
