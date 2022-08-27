import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";

export const publicRoutes = [

    { path: '/', name: "Home", Component: Home },
    { path: '/about', name: "About", Component: About },
    { path: '/contact', name: "Contact", Component: Contact }
]

