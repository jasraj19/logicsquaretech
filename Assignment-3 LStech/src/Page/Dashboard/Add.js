import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [Name, setName] = useState('');
    const [Department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Name || !Department || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const newEmployee = {
            Name,
            Department,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${Name}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <div>
                <label htmlFor="Name">Name</label>
                <input
                    id="Name"
                    type="text"
                    ref={textInput}
                    name="Name"
                    value={Name}
                    onChange={e => setName(e.target.value)}
                />
                </div>
                <div>
                <label htmlFor="Department">Department</label>
                <select className="form-control" id="exampleFormControlSelect1" onChange={e => setDepartment(e.target.value)}>
                                        <option>Select</option>
                                        <option>Frontend</option>
                                        <option>Backend</option>
                                        <option>Testing</option>
                                        <option>Deployment</option>
                                    </select>
                </div>
                <div>
                <label htmlFor="salary">Salary</label>
                <input
                    id="salary"
                    type="number"

                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                /></div>
                <div>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                /></div>
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add