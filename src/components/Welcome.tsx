type WelcomeProps={
    name:string
}
export const Welcome=(props:WelcomeProps)=>{
    return <div>Welcome Component for {props.name}</div>
}