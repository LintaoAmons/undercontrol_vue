import VueRouter from "vue-router";
import Register from "../components/Register";
import Login from "../components/Login";
import BudgetDisplay from "../components/budget/BudgetDisplay";
import BudgetFuel from "../components/budget/BudgetFuel";

export default new VueRouter(
    {
        routes: [
            {
                path: "/register",
                component: Register
            },
            {
                path: "/login",
                component: Login
            },
            {
                path: "/budget",
                component: BudgetDisplay
            },
            {
                path: "/budget-fuel",
                component: BudgetFuel
            }
        ]
    }
)