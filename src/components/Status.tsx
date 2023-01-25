
type StatusProps={
    value: string 
}

export const StatusComponent = (p:StatusProps)=>{


    let message='error';
    if(p.value === 'loading'){
        message = 'Loading ...'
    }
    else if(p.value === 'success'){
        message = 'Success'
    }
    return <>
      {message}
    </>
}