import React from 'react'

export default function StudentDisplay(props) {

    const tableHeaders = ['ID#', 'First Name', 'Last Name'];


  return (
    <div>
        <h1 className='text-center my-3 text-success shadow-lg bg-dark-subtle'> Kekambas Students </h1>

        <table className="table table-dark table-hover">
            <thead>
                <tr>
                    {tableHeaders.map((headerName, i) => <th key={i} >{headerName}</th>)}
                </tr>
            </thead>
            <tbody>
                {props.students.map(student => (
                    <tr key={student.id}>
                        <th>{student.id}</th>
                        <th>{student.first_name}</th>
                        <th>{student.last_name}</th>  
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
