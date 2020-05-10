import VueRouter from 'vue-router';
import LMS from './components/features/LMS';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';

const routes = [
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp},

    {path: '/lms', component: LMS},
];

const mode = 'history';

const router = new VueRouter({routes, mode});

export default router;
