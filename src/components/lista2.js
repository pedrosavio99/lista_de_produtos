import React from 'react';
import Produto from './produto';
import Deletar from './deletar';
import { DataContext } from './DataProvider';
import { useContext } from 'react/cjs/react.development';

export default function Lista2() {
    const [todos,setTodos] = useContext(DataContext);
    console.log(todos)

    //FUNÇÃO PARA VERIFICAR SE O PRODUTO ESTA OU NÃO SELECIONADO
    
    const switchComplete = id =>{
      const newTodos = [...todos]
      newTodos.forEach((todo,index) =>{
        if(index === id){
          todo.select = !todo.select
        }
      })
      setTodos(newTodos)
    }

    //FUNÇÃO PARA SALVAR ALTERAÇÕES NOS PRODUTOS


    const handleEditTodos = (editvalue,editPreco,setNewFoto, id) =>{
      const newTods = [...todos]
      newTods.forEach((todo,index)=>{
        if(index === id){
          todo.name = editvalue
          todo.preco = editPreco
          //todo.foto = setNewFoto
          todo.foto = URL.createObjectURL(setNewFoto)
        }

      })
      setTodos(newTods)
    }

  return (
    <div className="App">

    <div className="col-md-12 listagem">  
      <ul>
          {
              todos.map((todo, index)=>(
                  <Produto todo={todo} key={index} id={index}
                  checkComplete = {switchComplete} handleEditTodos = {handleEditTodos}/>
              ))
          }
      </ul>  
    </div>

    <Deletar/> 

    </div>
  );
}
