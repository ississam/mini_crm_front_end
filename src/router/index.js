import { createRouter, createWebHistory } from 'vue-router'
import SalaryView from '../views/SalaryView.vue'
import AdminView from '../views/AdminView.vue'
import LoginView from '../views/LoginView.vue'
import SalaryManageView from "../views/SalaryManageView";
import CompanyManageView from "../views/CompanyManageView";
import NewCompanyView from "../views/NewCompanyView";
// import { authGuard } from "../auth/authGuard";

const routes = [
	{
		path: "/",
		name: "login",
		component: LoginView,
	},

	{
		path: "/login",
		name: "login",
		component: LoginView,
	},

	{
		path: "/salary",
		name: "salary",
		component: SalaryView,
	},

	{
		path: "/admin",
		name: "admin",
		component: AdminView,
	},

	{
		path: "/salarymanage",
		name: "salarymanage",
		component: SalaryManageView,
	},

	{
		path: "/companymanage",
		name: "companymanage",
		component: CompanyManageView,
	},

	{
		path: "/addcompany",
		name: "addcompany",
		component: NewCompanyView,
	},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
