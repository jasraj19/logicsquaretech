import React from 'react'

export default function List({ employees, handleEdit, handleDelete }) {

    return (
        <div className='contain-table table-responsive mt-3 mt-md-4 mb-2'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Available</th>
                      <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{employee.Name}</td>
                                <td>{employee.Department}</td>
                                <td>
                                <input class="form-check-input" type="checkbox" id="flexCheckIndeterminate" / >
                                </td>
                                <td className="text">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button "
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
