import React,{useState,useContext,useEffect} from 'react'
import { v1 as uuid} from 'uuid'

export const TransactionContext=React.createContext()


const TransactionContextProvider=(props)=>{

    const initialState=JSON.parse(localStorage.getItem('data')) || []
    const [datas, setDatas] = useState(initialState)

    useEffect(()=>{
            localStorage.setItem('data',JSON.stringify(datas))
    },[datas])
    
    const[editItem,setEditItem]=useState(null)

    const findItem=(id)=>{
        const item=datas.find(data=>data.id===id)
        setEditItem(item)
    }

    const editInfo=(accNo,accName,type,id)=>{
        const newInfo=datas.map(data=>(data.id===id?{accNo,accName,type,id}:data))
        setDatas(newInfo)
        setEditItem('')

    }

    const addInfo=(accNo,accName,type)=>{
        setDatas([...datas,{id:uuid(),accNo,accName,type}])
    }
    const removeInfo=(id)=>{
        setDatas(datas.filter(data=>data.id!==id))
    }

    const clearData=()=>{
        setDatas([])
    }
    return(
        <TransactionContext.Provider value={{datas,addInfo,removeInfo,clearData,editInfo,findItem,editItem}}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider