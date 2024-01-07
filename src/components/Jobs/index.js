import {Component} from 'react'
import JobsItem from '../JobsItem'
import Header from "../Header"
// import Apply from "../Apply"
import Cookies from 'js-cookie'
import "./index.css"

class Jobs extends Component{
    state={there1:true,list1:[]}
    fun=async(id)=>{
       const rollno1= Cookies.get('roll1')
       const email1= Cookies.get('email1')
       const name1= Cookies.get('name')
       const data = {
          "rollno":`${rollno1}`,
          "name":`${name1}`,
        id,
          "email":`${email1}`
      }
       const options = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",

          },
          body: JSON.stringify(data),
    }
    const response=await fetch("https://resumeb-ckmd.onrender.com/apply/post",options)
    const data1 = await response.text()
    console.log(data1)
    }
    

  componentDidMount(){
    this.after()
  }
  after=async()=>{
    
    const options1 = {
      method:"GET",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        }
  }
    const responsedata=await fetch("https://resumeb-ckmd.onrender.com/jobs/get",options1) 
    const y = await responsedata.json()
    this.setState({list1:y})
  }
    render(){
        const {there1,list1}=this.state
        return(
            <div className='container15'>
              <Header/>
              <h1 className='head15'>Jobs List</h1>

              {there1 && (
                <ul className='card15'>{
                    list1.map(every=>
                        (<JobsItem fun={this.fun} details={every} key={every.id}/>))
                }</ul>
              )}
            
            </div>
        )
    }
}

export default Jobs