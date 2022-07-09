// this is standard template for this. We need to make a function that takes a money and dispatch a function creator using type and payload
export const depositMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney=(amount)=>{

    return (dispatch)=>{
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }

}
