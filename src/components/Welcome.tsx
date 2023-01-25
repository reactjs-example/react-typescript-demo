type WelcomeProps={
    name:string
    count: number
    status: boolean
}
export const Welcome=(props:WelcomeProps)=>{
    return conditionalHelloWorld(props);
}

function conditionalHelloWorld(props: WelcomeProps){
    return <>
      {
        props.status ?
        `welcome1 ${props.count}, ${props.name}, ${props.status}`
        :
        `welcome2 ${props.count}, ${props.name}, ${props.status}`
      }
    </>
}
function helloWorld(props: WelcomeProps)
{
    // why props.status nto getting printed in UI
    console.log(props.status);
    return <div>Welcome Component for {props.name} , count : {props.count}, status: {props.status}</div>
}