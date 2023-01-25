type PersonData={
    name: string 
    age: number
}

type PersonsData={
    elem:PersonData[]
}


export const PersonList=(p:PersonsData)=>{
    return <>
    {
        p.elem.map(e=>{
           return <h2 key={e.name}> {e.name} {e.age}</h2> 
        })
    }
    </>
}

export const getPersonsList=()=>{
    let data:PersonsData={
        elem:[
            {name:'Name2', age:20},
            {name:'Name1', age:10},
        ]
    };

   return data;
}