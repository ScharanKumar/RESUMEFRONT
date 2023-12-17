import {Component} from 'react'
import AdminJobsItem from '../AdminJobsItem'
import Headeradmin from "../Headeradmin"
// import Cookies from 'js-cookie'
import "./index.css"
import {v4 as uuidv4} from 'uuid'

class AdminJobs extends Component{
    state={there1:true,list1:[],jobrole:"",company:"",salary:"",closeson:""}
    fun=async(id)=>{
    //     const name1 = Cookies.get("name");
      const options1 = {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata=await fetch(`https://resumeb-ckmd.onrender.com/delete/jobs/${id}`,options1) 
      const data = await responsedata.text()
      console.log(data)
      const options2 = {
        method:"GET",
        headers: {
            "Content-Type": "application/json"
          }
    }
      const responsedata1=await fetch("https://resumeb-ckmd.onrender.com/jobs/get",options2) 
      const y = await responsedata1.json()
      this.setState({list1:y,there1:true,jobrole:"",comapany:"",salary:"",closeson:""})
    }
    add=async()=>{
        // const name1 = Cookies.get("name");
      const {jobrole,company,salary,closeson}=this.state
      const id = uuidv4()
      if (jobrole!=="" && company!=="" && salary!=="" && closeson!=="" ){
          const data = {
            id,
              jobrole,
              company,
              salary,
              closeson
          }
          console.log(data)
          const options = {
              method:"POST",
              headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
          }
          const response=await fetch("https://resumeb-ckmd.onrender.com/jobs/post",options)
          const data1 = await response.text()
          console.log(data1)
          const options1 = {
            method:"GET",
            headers: {
                "Content-Type": "application/json"
              }
        }
          const responsedata=await fetch("https://resumeb-ckmd.onrender.com/jobs/get/",options1) 
          const y = await responsedata.json()
          this.setState({list1:y,there1:true,jobrole:"",company:"",salary:"",closeson:""})
    }
  }
  w=(event)=>{
    this.setState({jobrole:event.target.value})
}
  x=(event)=>{
    this.setState({company:event.target.value})
}
    y=(event)=>{
      this.setState({salary:event.target.value})
  }
  
  z=(event)=>{
    this.setState({closeson:event.target.value})
}

  componentDidMount(){
    this.after()
  }
  after=async()=>{
    
    const options1 = {
      method:"GET",
      headers: {
          "Content-Type": "application/json"
        }
  }
    const responsedata=await fetch("https://resumeb-ckmd.onrender.com/jobs/get",options1) 
    const y = await responsedata.json()
    this.setState({list1:y})
  }
    render(){
        const {there1,list1,jobrole,company,salary,closeson}=this.state
        return(
            <div className='container14'>
              <Headeradmin/>
              <h1 className='head14'>Jobs List</h1>

              <div className='box14'>
              <div className='x14'>
              <label htmlFor='todo0'>JobRole</label>
              <input onChange={this.w} className='' id='todo0' value={jobrole} type='text' placeholder='Enter the Jobrole'/>
              </div>

              <div className='x14'>
              <label htmlFor='todo'>Company</label>
              <input onChange={this.x} id='todo' value={company} type='text' placeholder='Enter the Company name'/>
              </div>
              <div className='x14'>
              <label htmlFor='todo1'>Salary</label>
              <input onChange={this.y} className='' id='todo1' value={salary} type='text' placeholder='Enter the Salary'/>
              </div>

              <div className='x14'>
              <label htmlFor='todo2'>Closeson</label>
              <input onChange={this.z} id='todo2' value={closeson} type='text' placeholder='Enter the Closeson time'/>
              </div>

              <button className='but14' type='button' onClick={this.add}>Add</button>
              </div>
              
        
              {there1 && (
                <ul className='card14'>{
                    list1.map(every=>
                        (<AdminJobsItem fun={this.fun} details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default AdminJobs