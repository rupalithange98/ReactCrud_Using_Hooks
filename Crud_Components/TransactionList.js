import React,{useContext} from 'react'
import Transaction from './Transaction'
import { TransactionContext } from './TransactionContext'

const TransactionList=()=> {
    const{datas}=useContext(TransactionContext)
    return (
        <div>
            {
                datas.length?(
                    <ul className='list'>
                        {
                            datas.map(data=>{
                                return <Transaction data={data} key={data.id}/>
                            })
                        }
                    </ul>
                ):<h3>No Information to display</h3>
            }
        </div>
    )
}

export default TransactionList
