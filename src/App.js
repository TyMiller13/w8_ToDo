import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
// import ToDoCard from "./components/ToDoCard";
import StudentDisplay from "./components/StudentDisplay";


function App() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        console.log('useEffect effect callback has been called');
        fetch("https://scratched-juniper-salto.glitch.me/kekambas")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const studentList = data
                setStudents(studentList);
            })
    })
function updateStudent(students){
    setStudents(students)
}



    return (
        <>
            <Navbar/>
            <div className="container text-center mt-4">
            <h1 className='text-center fw-bold'> Your Ultimate To-Do List</h1>
            <ToDo/>
            <StudentDisplay students={students} updateStudent={updateStudent}/>
            </div>
            
        </>
    )
}

export default App;
