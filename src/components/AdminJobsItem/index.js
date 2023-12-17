import "./index.css"
const AdminJobsItem=(props)=>{
    const {details,fun}=props
    const {jobrole,company,salary,closeson,id}=details
    const x=()=>{
       fun(id)
    }
   return(
       <div className="x220">
        <h1>{jobrole}</h1>
        <p>{company}</p>
        <p>{salary}</p>
        <p>{closeson}</p>
        <button type="button" onClick={x}>DELETE</button>
       </div>
   )
}
export default AdminJobsItem