import VueRouter from "vue-router";
import Register from "../components/Register";
import Login from "../components/Login";

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
            }
        ]
    }
)