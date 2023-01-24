import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
// import ToDoCard from "./components/ToDoCard";

function App() {
    return (
        <>
            <Navbar/>
            <div className="container text-center mt-4">
            <h1 className='text-center fw-bold'> Your Ultimate To-Do List</h1>
            <ToDo/>
            </div>
            
        </>
    )
}

export default App;
