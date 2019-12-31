import React from 'react';
import logo from './logo.svg';
import './App.css';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Content from './components/Content';
import TableRow from './components/TableRow';
import Statefullprop from './components/Statefullprop'

class App extends React.Component{
  constructor (props){
    super(props);
    
    this.state={
      data:
      [
        {
          "id":1,
          "name":"Foo",
          "age":"20"
        },
        {
          "id":2,
          "name":"Bar",
          "age":"30"
        },
        {
          "id":3,
          "name":"Baz",
          "age":"40"
        }
      ]
    }
  }
  render() {
  return (
    <div className="App">
      
      <Header/>
      <h2>Content</h2>
      <p>This is the content</p>
      <Catalog/>
      <Content/>
      <table>
        <tbody>
          {this.state.data.map((person, i) => <TableRow key= {i}
          data={person}/>)}
        </tbody>
      </table>
      <Statefullprop/>
      <h1>{this.props.headerProp}</h1>
      <h2>{this.props.contentProp}</h2>
    </div>
    

  );
}
}

export default App;
