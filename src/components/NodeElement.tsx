import React from "react"

// the use of React.ReactNode helps to pass another component as part of the current component.
/**
 * <a>
 *  <b>some content</b>
 * </a>
 * 
 * Here tag <b/> is the children of type React.ReactNode
 */
type DivProps={
  children: React.ReactNode
}

export const DivComponent = (props:DivProps)=>{
  return <div>{props.children}</div>;
}