import {Component} from 'react'
import Cookies from "js-cookie"
import "./index.css"

class Login extends Component{
    state={username:"",password:"",rollno:"",email:"",showSubmitError: false,
    errorMsg: ''}
    w=(event)=>{
      this.setState({username:event.target.value})
  }
    x=(event)=>{
        this.setState({password:event.target.value})
    }
    y=(event)=>{
      this.setState({rollno:event.target.value})
  }
  z=(event)=>{
    this.setState({email:event.target.value})
}
    reg=()=>{
        const {history}=this.props
        history.replace("/register")
    }
    onSubmitSuccess = jwtToken => {
        const {history} = this.props
        const {username,rollno,email}=this.state
        console.log(username,rollno,email)
    
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        Cookies.set('name', username, {expires: 30})
        Cookies.set('roll1', rollno, {expires: 30})
        Cookies.set('email1', email, {expires: 30})
        this.setState({showSubmitError: false, errorMsg:""})
        history.replace('/')
      }
    
      onSubmitFailure = errorMsg => {
        this.setState({showSubmitError: true, errorMsg})
      }
    log=async()=>{
        const {username,password,rollno,email}=this.state
        if (username!=="" && password!=="" && rollno!=="" && email!==""){
            const data = {
                username,
                password
            }
            const options = {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
            }
            const response=await fetch("https://resumeb-ckmd.onrender.com/login",options)
            console.log(response)
           
            if (response.ok === true) {
                const resdata = await response.json()
                console.log(resdata)
                this.onSubmitSuccess(resdata.jwt_token)
              } else {
                const resdata1 = await response.text()
                console.log(resdata1)
                this.onSubmitFailure(resdata1)
              }
        }
    }
    render(){
        const {username,password,email,rollno,showSubmitError,errorMsg}=this.state
        return(
           <div className='container1'>
            <div>
            <img src='https://developers.line.biz/assets/img/products/line-login/p3.svg' alt='imm' className='img1' />
            </div>
              
              <div className='box1'>
                <h1>LOGIN</h1>
                <div className='x1'>
                <label htmlFor="user">Username</label>
                <input value={username} onChange={this.w} id='user' type="text" placeholder='Enter the username'/>
                </div>
                
                <br/>

                <div className='x1'>
                <label htmlFor="pass">Password</label>
                <input value={password} onChange={this.x} id='pass' type="password" placeholder='Password'/>
                </div>
                <div className='x1'>
                <label htmlFor="roll">Roll Number</label>
                <input value={rollno} onChange={this.y} id='roll' type="text" placeholder='Enter the roll number'/>
                </div>
                
                <br/>

                <div className='x1'>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={this.z} id='email' type="text" placeholder='Email'/>
                </div>

                <div>
                <button onClick={this.log} className='but1' type='button' >Login</button>
                <button onClick={this.reg} className='but2' type='button' >Register</button>
                </div>
                {showSubmitError && <p className="error-message">*{errorMsg}</p>}
                
                
              </div>
           </div>
        )
    }
} 

export default Login