import "./index.css"
const AppliedItem=(props)=>{
    const {details}=props
    const {rollno,email,name}=details
    
   return(
       <div className="x221">
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{rollno}</p>
       </div>
   )
}
export default AppliedItem