import VueRouter from 'vue-router';
import LMS from '../components/features/LMS/Home';
import SignIn from '../components/account/SignIn';
import SignUp from '../components/account/SignUp';
import Vue from 'vue';

const routes = [
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp},

    {path: '/lms', component: LMS},
];

const mode = 'history';

Vue.use(VueRouter);

export default new VueRouter({routes, mode});
