
import { Component } from "react/cjs/react.production.min";
import './App.css';
import Formulario from "./components/Forminputs";
import Navbar from "./components/Navbar";
import Lista2 from "./components/lista2";
import { DataProvider } from "./components/DataProvider";

export class App extends Component{
  state = {
    profileImg:'https://cdn-icons-png.flaticon.com/512/2871/2871658.png',
    iconefoto: 'https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png',
    fotologo: 'https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png',
    enviarfoto: 'https://static.thenounproject.com/png/1156518-200.png'
  }


  render() {
    const{profileImg} = this.state
    const{fotologo} = this.state
    const{iconefoto} = this.state
    const{enviarfoto} = this.state
    return(

      <DataProvider>
        <div className="App2"> 
           
          <Navbar/>
          <Formulario/>
          <Lista2/>
        </div>
      </DataProvider>


    )}}

export default App


