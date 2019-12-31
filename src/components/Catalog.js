import React, { Component } from 'react'

class Catalog extends Component {
    render() {
        var myStyle={
            fontSize:30,
            color:'#FF0000'
        }
        let title="Catalog app for Developles"
        let date= new Date().toDateString();
        return (
            <div>
                <h2>{title}</h2>
                <h3 style={myStyle}>Today's date is {date}</h3>
            </div>
        )
    }
}

export default Catalog
