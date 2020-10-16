import Vue from 'vue'
import VueRouter from "vue-router"
import Home from '../views/Home.vue'
// managerDashboard,
import ManagerHome from "../components/Manager/sidbar.vue";
import managerFirst from "../components/Manager/managHome.vue";
import ManagerFront from "../components/Manager/managerHome.vue";
import managerweaklyComp from "../components/Manager/managgerWeakly.vue";
import ManagerCreditCard from "../components/Manager/managercreditCard.vue";
import mActivity from "../components/Manager/allActivitycredit.vue";
import mAllEmployee from "../components/Manager/managerAllEmployee.vue";
import MmanageActivity from "../components/Manager/managermanageActivity.vue";
import Approcess from "../components/Manager/applicationTable.vue";
import SingleEmp from "../components/Manager/single_employee.vue";
import weaklydetails from "../components/Manager/weaklydetails.vue";
import monthovermonth from "../components/Manager/managgermonthly.vue";


// admin Dashboarddd.
import Admin from "../components/AdminComponent/sidbar.vue";
import Adminhome from "../components/AdminComponent/adminHome.vue";
import creditCard from "../components/AdminComponent/creditCard.vue";
import manageActivity from "../components/AdminComponent/manageActivity.vue";
import AdminmanagerHome from "../components/AdminComponent/AdminmanagerHome.vue";
import weaklyComp from "../components/AdminComponent/AdminWeakly.vue";
import operations from "../components/AdminComponent/operations.vue"
import newactivity from "../components/AdminComponent/newactivity.vue";
import editactivity from "../components/AdminComponent/editactivity.vue";
import assignbyempl from "../components/AdminComponent/assignbyemployee.vue";

// admin
import AdminLogin from "../views/adminLogin.vue"

// empl
import LoginHolder from "../views/LoginHolder.vue";
import employelogin from "../views/empLogin.vue";
import employee from "../components/EmployeeComp/sidbar.vue";
import Allacitvty from "../components/EmployeeComp/allActivity.vue";
import Emplyedetails from "../components/EmployeeComp/emplyedetails.vue";
// manager Dashboard

import ManagerLogin from "../views/managerLogin.vue"

// dvisions
import divisionlogin from "../views/DivisionsLogin.vue";
import division from "../components/division/sidbar.vue";
import divisionHome from "../components/division/divsionHome.vue";
import divsionfront from "../components/division/divisionfirstpage.vue";
import divisioncredit from "../components/division/divisioncredit.vue";
import creditlanding from "../components/division/creditlanding.vue";
import dAllEmployee from "../components/division/dallemployee.vue";
import Notfound from "../views/Notfound.vue";



Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    // manager
    {
        path: "/ManagerLogin",
        component: LoginHolder,
        name: 'loginholder',
        children: [{
                path: "/",
                name: "ManagerLogin",
                component: ManagerLogin,
            },
            {
                path: "/Manager",
                component: ManagerHome,
                name: "Manager",
                children: [{
                        path: "/",
                        component: managerFirst,
                        name: "managerHomePage",
                        children: [{
                                path: "/",
                                component: ManagerFront,
                                name: "managerhome",
                            },
                            {
                                path: "/Managerweaklyinfo",
                                component: managerweaklyComp,
                                name: "managerweaklyComp",
                            }
                        ]
                    },
                    {
                        path: "/mCreditCard",
                        component: ManagerCreditCard,
                        name: "managercreditCard",
                        children: [{
                                path: "/",
                                component: mActivity,
                                name: "managerAllactivity",
                            },
                            {
                                path: "/MAllEmployee",
                                component: mAllEmployee,
                                name: "managerallEmployee"
                            }
                        ]
                    },
                    
                    {
                        path: "/ManagermanageActivity",
                        name: "managerActivty",
                        component: MmanageActivity,
                    },
                    {
                        path: "/Approcess",
                        name: "ApplicationTable",
                        component: Approcess,

                    },
                    {
                        path: "/empDetail",
                        name: "SingleEmployee",
                        component: SingleEmp,
                    },
                    {
                        path: "/weaklydetails",
                        name: "weaklydetails",
                        component: weaklydetails,
                    },
                    {
                        path: "/monthovermonth",
                        name: "monthovermonth",
                        component: monthovermonth,
                        
                    }

                ]
            },
        ]
    },

    // empl
    {
        path: "/emplogin",
        component: LoginHolder,
        name: "loginholder",
        children: [{
                path: "/",
                name: "employeLogin",
                component: employelogin,
            },
            {
                path: "/employee",
                name: "EmplyeDash",
                component: employee,
                children: [{
                        path: "/",
                        component: Allacitvty,
                        name: "EmpAllActivity",
                    },
                    {
                        path: "/emplyedetails",
                        name: "EmployeeDetails",
                        component: Emplyedetails,
                    }
                ]
            },
        ]
    },
    // divisions
    {
        path: "/divisionslogin",
        component: LoginHolder,
        name: "loginholder",
        children: [{
                path: "/",
                name: "DivisionLogin",
                component: divisionlogin,
            },
            {
                path: "/division",
                name: "DivisionDash",
                component: division,
                children: [{
                    path: "/",
                    component: divisionHome,
                    name: "divisionhome",
                    children: [{
                            path: "/",
                            component: divsionfront,
                            name: "DivisionFirstpage",
                        },
                        {
                            path: "/creditCard",
                            component: divisioncredit,
                            name: "divsioncredit",
                        },
                        {
                            path: "/creditlanding",
                            component: creditlanding,
                            name: "divsioncreditLanding",
                        }, {
                            path: "/dallemployee",
                            component: dAllEmployee,

                        }
                    ]
                }, ]
            },
        ]
    },
    // admin
    {
        path: "/adminLogin",
        component: LoginHolder,
        name: "loginholder",
        children: [{
                path: '/',
                component: AdminLogin,
                name: "AdminLogin",
            },
            {
                path: "/admin",
                component: Admin,
                name: "AdminDashboard",
                children: [{
                        path: "/",
                        component: manageActivity,
                        name: "ManageAdminActivity",
                    },
                    {
                        path: "/assignbyempl",
                        component: assignbyempl,
                        name: "assignbyempl", 
                    },
                    {
                        path: "/newactivity",
                        component: newactivity,
                        name: "newactivity",
                    },
                    {
                        path: "/editactivity",
                        component: editactivity,
                        name: "editactivity",
                    },
                    
                    {
                        path: "/operations",
                        component: operations,
                        name: "operations",
                    },


                ]
            },
        ]
    },
    {
        path: '*',
        component: Notfound,
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router