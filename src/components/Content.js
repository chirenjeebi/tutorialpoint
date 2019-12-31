import React, { Component } from 'react'

class Content extends Component {
    render() {
        var myStyle={
            fontSize:30,
           
            color:'#fff333'
        }
        return (
            <div style={myStyle}>
                <h2 >Content</h2>
                <p>The content text !!!</p>
            </div>
        );
    }
}

export default Content
