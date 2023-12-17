import { Route, Switch} from "react-router-dom"

import Login from "./components/Login"
import Register from "./components/Register"
import AdminLog from "./components/AdminLog"
import AdminR from "./components/AdminR"
import AdminJobs from "./components/AdminJobs"
// import AdminJobsItem from "./components/AdminJobsItem"
import Home from "./components/Home"
import Jobs from "./components/Jobs"
import CompaniesApplied from "./components/CompaniesApplied"
import Todolist from "./components/Todolist"
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedRoute1 from "./components/ProtectedRoute1"

const App=()=>{
    return(
      // <BrowserRouter>
         <Switch>
             <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login/admin" component={AdminLog}/>
              <Route exact path="/register/adminca" component={AdminR}/>
              {/* <Route exact path="/login/admin" component={AdminLog}/> */}
              <ProtectedRoute1 exact path="/admin/jobs" component={AdminJobs}/>
             <ProtectedRoute exact path="/" component={Home}/>
             <ProtectedRoute exact path="/jobs" component={Jobs}/>
             <ProtectedRoute1 exact path="/companies/applied" component={CompaniesApplied}/>
             <ProtectedRoute exact path="/todolist" component={Todolist}/>
         </Switch>
      // </BrowserRouter>
    )
}

export default App
