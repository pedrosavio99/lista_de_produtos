import React from 'react';
import { DataContext } from './DataProvider';
import { useContext, useState } from 'react/cjs/react.development';

export default function Deletar() {
  const[checkAll, setchekAll] = useState(false)
  const[todos,setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.select = !checkAll
    })
    setTodos(newTodos)
    //OLHA QUE LEGAL ESSA LOGICA PRA DESATIVAR O SET ALL É SO COLOCAR O CONTRARIA DA PROXIMA VEZ QUE CLICAR
    setchekAll(!checkAll)
  }

  const deleteProdutos = () =>{
    const newTodos = todos.filter(todo =>{
      return todo.select ===false
    })
    setTodos(newTodos)
    setchekAll(false)
      
  }

  return (
        <>
            {

                todos.length === 0 ? <h2>Adicione um novo produto!</h2>

                :  <div className="del">     
                      <div className="row">
                        <label htmlFor="all">
                          <input type='checkbox' id="all" onChange={handleCheckAll} checked={checkAll}></input>
                          Todos os produtos
                        </label>
                        <p>produtos adicionados: {todos.length} </p>
                        <button id="delete" onClick={deleteProdutos}>Deletar</button>
                      </div>
                  </div>

            }
     
        </>

  );
}

