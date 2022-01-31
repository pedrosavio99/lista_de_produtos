import React,{useState, useEffect,createContext}from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    //AQUI EU CRIO O PROVEDOR DE DADOS  

    const[todos,setTodos] = useState([
        //AQUI EU PRECISO DESCOBRIR COMO CHAMAR A FOTO
        // {name: "Produto 1 ", preco: 10, select:false, foto: 'https://www.hqzona.com.br/wp-content/uploads/2019/09/Team_Kakashi-1024x841-1024x841.png'},
        // {name: "Produto 2 ", preco: 15, select:true, foto: 'https://www.hqzona.com.br/wp-content/uploads/2019/09/Team_Kakashi-1024x841-1024x841.png'},
        // {name: "Produto 33 ", preco: 35, select:true,foto: 'https://www.hqzona.com.br/wp-content/uploads/2019/09/Team_Kakashi-1024x841-1024x841.png'}
    ])

    //AQUI EU CHAMO O ARMAZENAMENTO LOCAL NA RENDERIZAÇÃO DA PAGINA, tem que ser antes do armazenamnto 

    useEffect(()=>{
        const produtosStore = JSON.parse(localStorage.getItem('PRODUTOStore'))
        console.log(produtosStore)
        if(produtosStore) setTodos(produtosStore)
    },[])

    //AQUI EU CRIO O ARMAZENAMENTO LOCAL DOS PRODUTOS

    useEffect(()=>{
        localStorage.setItem('PRODUTOStore', JSON.stringify(todos))
    },[todos])



  return (
      <DataContext.Provider value={[todos,setTodos]}>
          {props.children}
      </DataContext.Provider>
  )
}
