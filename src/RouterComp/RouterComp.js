import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/contact";
import Services from "../pages/Services";
import ProductList from "../pages/ProductList";
import Payment from "../pages/Payment";
import OrderSuccessful from "../pages/OrderSuccessful";
import Repair from "../pages/Repair";
import ServiceBooking from "../pages/ServiceBooking";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import RentalForm from '../pages/RentalForm';
import AdminSidebar from "../pages/AdminSidebar";
import AdminDashboard from '../pages/AdminDashboard';
import UserManagement from "../pages/UserManagement";
import ReportPage from "../pages/ReportPage";
import SettingsPage from "../pages/SettingsPage";
import ServiceReport from "../pages/ServiceReport";
import RentalReport from "../pages/RentalReport";
import AccessoriesReport from "../pages/AccessoriesReport";

const RouterComp = () => {
        return (
                <div>
                        <BrowserRouter>
                                <Routes>
                                        <Route path='/' element={<Home />} />
                                        <Route path='/Signup' element={<Signup />} />
                                        <Route path='/Login' element={<Login />} />
                                        <Route path='/AboutUs' element={<AboutUs />} />
                                        <Route path='/contact' element={<ContactUs />} />
                                        <Route path='/services' element={<Services />} />
                                        <Route path='/landing' element={<ProductList />} />
                                        <Route path='/payment' element={<Payment />} />
                                        <Route path='/final' element={<OrderSuccessful />} />
                                        <Route path='/Repair' element={<Repair />} />
                                        <Route path='/booking' element={<ServiceBooking />} />
                                        <Route path='/rental' element={<CarListing />} />
                                        <Route path='/details' element={<CarDetails />} />
                                        <Route path='/RentalForm' element={<RentalForm />} />                                               
                                        <Route path='/Sidebar' element={<AdminSidebar />} />                                               
                                        <Route path='/Panel' element={<AdminDashboard />} />                                               
                                        <Route path='/userManagement' element={<UserManagement />} />                                             
                                        <Route path='/ReportPage' element={<ReportPage/>} />                                               
                                        <Route path='/SettingsPage' element={<SettingsPage/>} />                                               
                                        <Route path='/ServiceReport' element={<ServiceReport/>} />                                               
                                        <Route path='/RentalReport' element={<RentalReport/>} />                                               
                                        <Route path='/AccessoriesReport' element={<AccessoriesReport/>} />                                               

                                </Routes>       
                        </BrowserRouter>
                        
                </div>
        )
}
export default RouterComp;