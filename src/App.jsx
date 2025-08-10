import { Route, Routes } from "react-router-dom"
import Sidebar from "./component/layout/Sidebar"
import Dashboard from "./pages/dashboard/Dashboard"
import AllStudent from "./pages/students/AllStudent"
import StudentsDetails from "./pages/students/StudentsDetails"
import AdmissionForm from "./pages/students/AdmissionForm"
import StudentPromotion from "./pages/students/StudentPromotion"
import AddTeacher from "./pages/teachers/AddTeacher"
import TeacherDetail from "./pages/teachers/TeacherDetails"
import AllTeachers from "./pages/teachers/AllTeachers"
import Payment from "./pages/teachers/Payment"

function App() {

  return (
    <>
      <div className='flex flex-col md:flex-row font-roboto h-full'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/all-student" element={<AllStudent />}></Route>
          <Route path="/student-details" element={<StudentsDetails/>}></Route>
          <Route path="/admission" element={<AdmissionForm />}></Route>
          <Route path="/promotion" element={<StudentPromotion />}></Route>
          <Route path="/add-teacher" element={<AddTeacher />}></Route>
          <Route path="/all-teacher" element={<AllTeachers />}></Route>
          <Route path="/teacher-details" element={<TeacherDetail />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
