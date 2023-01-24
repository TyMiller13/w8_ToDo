import React from 'react'

export default function ToDoForm(props) {
  return (
    <form action="" className="my-3" onSubmit={props.handleFormSubmit}>
        <input type="text" name="task" id="task" className='form-control' placeholder='Enter A New Task' />
        <input type="submit" value="Add New Task" className='btn btn-success w-100 mt-3' />
    </form>
  )
}
