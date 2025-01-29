import Login from './Component/Login';
import Home from './Component/Home'
import AddManager from './Component/Admin/AddManager';
import AdminAddProject from './Component/Admin/AdminAddProject';
import ManagerAddEmployee from './Component/Manager/ManagerAddEmployee';
import ManagerUpdateEmployee from './Component/Manager/ManagerUpdateEmployee';
import Register from './Component/Register';
import ManagerViewEmployee from './Component/Manager/ManagerViewEmployee';
import ManagerTaskApproval from './Component/Manager/ManagerTaskApproval';
import ManagerHome from './Component/Manager/ManagerHome';
import ManagerAddTask from './Component/Manager/ManagerAddTask';
import AdminViewManager from './Component/Admin/AdmiViewManager';
import AdminViewProjectDetails from './Component/Admin/AdminViewProjectDetails';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import LoadingBar from "react-top-loading-bar";

const App =()=>{

   // const[progress,setProgress]=useState(0);

 return(<>
<BrowserRouter>
<ToastContainer autoClose={1200}/>
<LoadingBar color="#f11946" height={3} shadow ="true"  />

<Routes>
   <Route path="/" element={<Home />}/>
   <Route path="/login" element={<Login />}/>
   <Route path="/register" element={<Register/> }/>
   <Route path="/addManager" element={ <AddManager/>}/>
   <Route path="/managerUpdateEmployee" element={<ManagerUpdateEmployee/>}/>
   <Route path="/managerAddEmployee" element={<ManagerAddEmployee/>}/>
   <Route path="/managerTaskApproval" element={<ManagerTaskApproval/>}/>
   <Route path="/managerHome" element={<ManagerHome />}/>
   <Route path="/managerViewEmployee" element={<ManagerViewEmployee/>}/>
   <Route path="/managerAddTask" element={ <ManagerAddTask/>}/>
   <Route path="/adminViewManager" element={<AdminViewManager/>}/>
   <Route path="/adminAddProject" element={ <AdminAddProject/>}/>
   <Route path="/adminViewProject" element={<AdminViewProjectDetails/>}/>

</Routes>
</BrowserRouter>

 </>
 )
}
export default App;