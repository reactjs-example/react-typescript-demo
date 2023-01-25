type PersonProps={
   name: string 
   address: Address
}
type Address={
    city: string 
    pincode: number
}
export const PersonComponent=(props:PersonProps)=>{
    return <>
    <br/>
    {JSON.stringify(props)}
    </>
}