import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { Classes } from './components/Classes';
import { Teachers } from './components/Teachers';
import { Gallery } from './components/Gallery';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { TeacherForm } from './components/TeacherForm';
import { TeacherList } from './components/TeacherList';
import { BookingList } from './components/BookingList';
import { AddClasses } from './components/AddClasses';
import { ClassList } from './components/ClassList';
import { EditBooking } from './components/EditBooking';
import { EditTeachers } from './components/EditTeachers';
import { Contact } from './components/Contact';
import { BlogDetails } from './components/BlogDetails';
import { BlogGrid } from './components/BlogGrid';

function App() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  return (
    <div className="App">
<Routes>
   <Route path="/" element={
        <>
          <Header/>
          <Home/>
          <Footer/>
        </>
      } />
         <Route path="/about" element={
        <>
          <Header/>
          <About/>
          <Footer/>
        </>
      } />
      <Route path="/classes" element={
        <>
          <Header/>
          <Classes/>
          <Footer/>
        </>
      } />

      <Route path="/teachers" element={
        <>
          <Header/>
          <Teachers/>
          <Footer/>
        </>
      } />

      <Route path="/gallery" element={
        <>
          <Header/>
          <Gallery/>
          <Footer/>
        </>
      } />
      <Route path="/blog-detail" element={
  <>
    <Header/>
    <BlogDetails/>
    <Footer/>
  </>
} />
 <Route path="/blog-grid" element={
  <>
    <Header/>
    <BlogGrid/>
    <Footer/>
  </>
} />
      <Route path="/contact" element={
        <>
        <Header/>
        <Contact/>
        <Footer/>
        </>
      }/>
       <Route path="/login" element={<Login />} />

      {/* ✅ Dashboard (Admin Panel) */}
     <Route
  path="/dashboard/*"
  element={
    localStorage.getItem("isAdmin") === "true"
      ? <Dashboard />
      : <Navigate to="/" />
  }
>

        {/* Default page after login */}
        <Route index element={<h2>Welcome Admin</h2>} />

        {/* Add Teacher page */}
        <Route path="add-teacher" element={<TeacherForm />} />
        <Route path="teachers-list" element={<TeacherList/>}/>
        <Route path="edit-teacher/:id" element={<EditTeachers/>}/>
        <Route path="bookings" element={<BookingList/>}/>
        <Route path="edit-booking/:id" element={<EditBooking/>}/>
        <Route path="add-classes" element={<AddClasses/>}/>
        <Route path="classes-list" element={<ClassList/>}/>

      </Route>

</Routes>

   {/*   <Header/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='/about' element={<About/>}/>
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/teachers' element={<Teachers/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
         <Route path='/dashboard' element={<Dashboard />}/>

          <Route index element={<h1>Welcome Admin</h1>} />
         
          <Route path='add-teacher' element={<TeacherForm />} />
    </Routes>
    <Footer/>  */}
    </div>
  );
}

export default App;
