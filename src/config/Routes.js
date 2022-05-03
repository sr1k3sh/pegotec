import Login from "../components/Login";
import Main from "../components/Main";
import RegisterCompany from "../components/RegisterCompany";

const routes = [
    {
        path:"/login",
        component:Login,
        isPrivate:false,
    },
    {
        path:'/registercompany',
        component: RegisterCompany,
        isPrivate:true,

    },
    {
        path:'/',
        component: Main,
        isPrivate:false
    }
]

export default routes;