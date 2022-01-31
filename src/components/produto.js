
import React, {useState} from 'react';

export default function Produto({todo,id,checkComplete,handleEditTodos}) {
  const [onEdit,setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name,todo.preco,todo.foto)
  const[editValuePreco,seteditPreco] = useState(todo.preco)

  const handleOnEdit = () =>{
      setOnEdit(true)
  }

  const[foto2,setFoto2] = useState('');
  const [endImg] = useState('https://cdn-icons-png.flaticon.com/512/2871/2871658.png');

  const handleSave = id =>{
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue,editValuePreco,foto2,id)
    } 
    else{
      setEditValue(todo.name)
    }
  }

  if(onEdit){
    return (
      <li>           
          <input type='text' id='editValue' value={editValue}
          onChange={e => setEditValue(e.target.value.toLowerCase())}></input>
          <a> 
            
          <br/><br/>

          <input type='number' id='editvaluePreco' value={editValuePreco}
          onChange={e => seteditPreco(e.target.value.toString())}></input>
          
          <br/><br/>

          <div className="fotok"> 
                 <label id="lll" for='foto22'>
                     <img src='https://static.thenounproject.com/png/1156518-200.png' id='img60'></img>
                 </label> 
          </div>
          
          <input type='file' name ='foto22' id="foto22" placeholder="asjaks" 
          accept="image/*" required onChange={e=> setFoto2(e.target.files[0])}></input>

          </a>

          <div className="fotok">             
              {foto2 ? <img id='img' src={URL.createObjectURL(foto2)} ></img>: 
              <img src={endImg} id='img'></img>}
          </div>

        <button onClick={()=>handleSave(id)}>Salvar</button>

    </li>
);
}else{
      return (
            <li>
                      
              <label htmlFor={id} className={todo.select ? "active": ""}>

                      <input type='checkbox' id={id} checked={todo.select}
                      onChange={()=> checkComplete(id)}></input>
                      {todo.name}
                      <a> <br/><br/>Preço: R$ {todo.preco},00<br/><br/></a>

              </label>

              <img src={todo.foto} id='img'></img>

              <button disabled = {todo.select} onClick={handleOnEdit}>Editar</button>

          </li>
      );}
}



