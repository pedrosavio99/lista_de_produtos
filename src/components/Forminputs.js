
import { useContext } from "react/cjs/react.development";
import { DataContext } from "./DataProvider";
import React,{useState} from "react";

export default function Formulario() {
  const[todos,setTodos] = useContext(DataContext);
  const[todoName, setTodoname] = useState('');
  const[preco, setPreco] = useState();


  const[foto,setFoto] = useState('');
  const [endImg] = useState('https://cdn-icons-png.flaticon.com/512/2871/2871658.png');

 
  const uploadImage = async e =>{
    e.preventDefault();
    console.log('upload img')
    console.log(foto)
    const formData = new FormData();
    formData.append('image',foto)
    setTodos([...todos, {name: todoName,preco: preco, select:false, foto: URL.createObjectURL(foto) }])
    setTodoname('');
    setPreco('');
    setFoto('');
  }
  

  return(
    
       <div className="App2">
      
               <div className="App6">
               <div className="fotok">
                
                 
                 {foto ? <img id='img2' src={URL.createObjectURL(foto)} ></img>: 
                 <img src={endImg} id='img2'></img>}

               </div>
      
      
               <div className="fotok"> 
                 <label id="lll" for="foto">
                     <img src='https://static.thenounproject.com/png/1156518-200.png' id='img60'></img>
                   
                 </label> 
               </div>
      
               
               <form autoComplete="off" onSubmit={uploadImage} >
                
                 
                 
                  <input type='file' name ='foto' id="foto" placeholder="asjaks" accept="image/*"
                   required onChange={e=> setFoto(e.target.files[0])}></input>

                  
                  <input type='text' id="todos" required placeholder="nome" value={todoName}
                  onChange={e => setTodoname(e.target.value.toLowerCase())}></input> 


                  <input type='number' id="todos" required placeholder="preço" value={preco} 
                  onChange={e => setPreco(e.target.value.toString())}></input> 

                 <br/><br/><br/>         
                 <button type="submit">
                 <img src='https://iconape.com/wp-content/files/xh/367685/svg/send-logo-icon-png-svg.png'id='img3'></img>
                 </button>
      
               </form>
      
               </div>
            
             </div>
    
  )

  
}

