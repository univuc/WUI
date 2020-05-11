import VueRouter from 'vue-router';
import Front from '../features/front/Main';
import AICRO from '../features/AICRO/Main';
import LMS from '../features/LMS/Main';
import SNL from '../features/SNL/Main';
import Vue from 'vue';

Vue.use(VueRouter);

function createRouter() {
    const routes = [
        {path: '/', component: Front, meta: {authRequired: true}},

        {path: '/lms', component: LMS, meta: {authRequired: true}},
        {path: '/aicro', component: AICRO, meta: {authRequired: true}},
        {path: '/snl', component: SNL, meta: {authRequired: true}},
    ];
    const mode = 'history';

    return new VueRouter({routes, mode});
}

function addGuard(router) {
    router.beforeEach((to, from, next) => {
        if (routeRequiresAuth(to)) {
            if (isLoggedIn()) {
                next();
            } else {
                window.location.href = '/auth';
            }
        } else {
            next();
        }
    });
}

function routeRequiresAuth(route) {
    return route.matched.some((routeInfo) => routeInfo.meta.authRequired);
}

function isLoggedIn() {
    return document.cookie.includes("univuc-token");
}

const router = createRouter();

addGuard(router);

export default router;
