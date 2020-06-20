/*
 * @Descripttion:
 * @version:
 * @Date: 2020-04-08 12:00:06
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter);

const routes = [
    //--------------------------------------   首页    -------------------------------------
    // 首页
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            showHeaderNav: true
        }
    },
    //---------------------------------------------------    4 0 4       ----------------------------------------------
    {
        path: "/404",
        name: "notFound",
        component: () => import('../views/Home/404.vue'),
    },
    {
        path: "*", // 此处需特别注意置于最底部
        redirect: "/404"
    }
]
const router = new VueRouter({
    routes
})

export default router
