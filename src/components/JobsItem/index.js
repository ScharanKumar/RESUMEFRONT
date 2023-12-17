import "./index.css"
const JobsItem=(props)=>{
    const {details,fun}=props
    const {jobrole,company,salary,closeson,id}=details
    const x=()=>{
       fun(id)
    }
   return(
       <div className="x223">
        <h1>{jobrole}</h1>
        <p>{company}</p>
        <p>{salary}</p>
        <p>{closeson}</p>
        <button type="button" onClick={x}>APPLY</button>
       </div>
   )
}
export default JobsItem