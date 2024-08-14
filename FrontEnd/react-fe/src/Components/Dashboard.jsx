import UserPermissionForm from "./UserPermissionForm";
import UserRoleForm from "./UserRoleForm";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <UserPermissionForm/>
            {/* <UserRoleForm/> */}
        </div>
     );
}
 
export default Dashboard;