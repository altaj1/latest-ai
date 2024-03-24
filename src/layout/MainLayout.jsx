import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
         <div className="h-16">
         <Nav></Nav>
         </div>
         <div className="min-h-[calc(100vh-117px)] mb-20">
            <Outlet></Outlet>
            <Toaster />
         </div>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;