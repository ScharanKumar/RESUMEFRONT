import "./index.css"
const TodoItem=(props)=>{
    const {details,fun}=props
    const {heading,description,id}=details
    const x=()=>{
       fun(id)
    }
   return(
       <div className="x222">
        <h1>{heading}</h1>
        <p>{description}</p>
        <button className="but" type="button" onClick={x}>DELETE</button>
       </div>
   )
}
export default TodoItem