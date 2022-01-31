
import { Component } from "react/cjs/react.production.min";


export class Navbar extends Component{
  state = {
    profileImg:'https://cdn-icons-png.flaticon.com/512/2871/2871658.png',
    iconefoto: 'https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png',
    fotologo: 'https://i.pinimg.com/originals/77/c3/66/77c366436d8bd35fe8b3ce5b8c66992e.png',
    enviarfoto: 'https://static.thenounproject.com/png/1156518-200.png'
  }


  render() {
    const{fotologo} = this.state
    return(
    
            <header className="testando">
              <div className="testando" id="navizona">
              <img src={fotologo} htmlFor="foto" id='img5'></img>
              </div>
            </header>
            )
}}

export default Navbar


