import Home from './components/home';
import About from './components/common/about';
import Contact from './components/common/contact';
import Login from './components/login';
import Signup from './components/signup';
import Success from './components/Success';
import ResetPassword from './components/resetPassword';
import SchoolRegistration from './components/SchoolRegistration';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
    exact: true
  },
  {
    path: '/contact',
    component: Contact,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/signup',
    component: Signup,
    exact: true
  },
  {
    path: '/success',
    component: Success,
    exact: true
  },
  {
    path: '/forgotPassword',
    component: ResetPassword,
    exact: true
  },
  {
    path: '/school-registration',
    component: SchoolRegistration,
    exact: true
  }
];

export default routes;
