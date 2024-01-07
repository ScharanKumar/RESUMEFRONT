import {Component} from 'react'
import AppliedItem from '../AppliedItem'
import Headeradmin from "../Headeradmin"
// import Apply from "../Apply"
// import Cookies from 'js-cookie'
import "./index.css"

class CompaniesApplied extends Component{
    state={there1:true,list1:[],company:""}
    

    add=async()=>{
        // const name1 = Cookies.get("name");
      const {company}=this.state
    //   const id = uuidv4()
      if (company!==""){
          
          
          const options = {
              method:"GET",
              headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",

                }
          }
          const response=await fetch(`https://resumeb-ckmd.onrender.com/jobs/get/${company}`,options)
          const data1 = await response.json();
          console.log(data1)
          const {id}=data1
          console.log(id)
          if (id!==undefined){
            const options1 = {
                method:"GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",

                  }
            }
              const responsedata=await fetch(`https://resumeb-ckmd.onrender.com/apply/get/${id}`,options1) 
              const y = await responsedata.json()
              this.setState({list1:y,there1:true})
          }
    }
  }
    



  w=(event)=>{
    this.setState({company:event.target.value})
}

    render(){
        const {there1,list1,company}=this.state
        return(
            <div className='container18'>
              <Headeradmin/>
              <div>
              <label htmlFor='todo0'>Company</label>
              <input onChange={this.w} className='' id='todo0' value={company} type='text' placeholder='Enter the company name'/>
              <button className='but18' type='button' onClick={this.add}>Search</button>
              </div>
              <h1 className='head18'>Company applied List</h1>

              {there1 && (
                <ul className='card18'>{
                    list1.map(every=>
                        (<AppliedItem details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default CompaniesApplied