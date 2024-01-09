import "./index.css"
const JobsItem=(props)=>{
    const {details,fun}=props
    const {jobrole,company,salary,closeson,id}=details
    const x=()=>{
       fun(id)
    }
   return(
       <div className="x223">
        <h1 >{jobrole}</h1>
        <p className="jobsP">Company - {company}</p>
        <p className="jobsP">Salary - {salary}</p>
        <p className="jobsP">Apply before - {closeson}</p>
        <button type="button" className="but" onClick={x}>APPLY</button>
       </div>
   )
}
export default JobsItem