import React, { useState, useEffect } from 'react';
import todolist from './Assets/Images/todo.png';
import './Styles/ToDo.css';
import axios from 'axios';
import { Auth } from './ContextProvider/Provider';
import { toast } from 'react-toastify';
import logo from './Assets/Images/logo.png';

function ToDo() {
    const { user } = Auth();
    const [taskName, setTaskName] = useState('');
    const [status, setStatus] = useState('Assigned');
    const [assignedDate, setAssignedDate] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const todaydate = new Date().toISOString().split("T")[0];
    const usertoken = localStorage.getItem('token');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get('https://localhost:44353/api/ToDoes', {
                headers: {
                    Authorization: `Bearer ${usertoken}`,
                },
            });
            const userTasks = response.data.filter((task) => task.userEmail === user.email);

            const inProgressTasks = userTasks.filter((task) => task.status === 'In Progress');
            const completedTasks = userTasks.filter((task) => task.status === 'Completed');

            setTasks(userTasks);
            setIsLoading(false);
            setInProgressTasks(inProgressTasks);
            setCompletedTasks(completedTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskSubmission = async () => {
        try {
            await axios.post('https://localhost:44353/api/ToDoes', {
                Taskname: taskName,
                Status: status,
                AssignedDate: assignedDate,
                UserEmail: user.email,
            },
                {
                    headers: {
                        Authorization: `Bearer ${usertoken}`,
                    },
                });
            toast.success('Task has been created.');
            fetchTasks();
            setTaskName('');
            setStatus('In Progress');
            setAssignedDate('');
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleStatusUpdate = async (taskId, newStatus) => {
        try {
            const response = await axios.put(`https://localhost:44353/api/ToDoes/${taskId}?Status=${newStatus}`, null, {
                headers: {
                    Authorization: `Bearer ${usertoken}`,
                },
            });
            if (response.status === 200) {
                toast.success("Status Updated Sucessfully");
            }
            fetchTasks();
        } catch (error) {
            console.error('Error updating task status:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            window.confirm("Are you sure to delete the task ?");
            const taskId = id;
            const response = await axios.delete(`https://localhost:44353/api/ToDoes/${taskId}`,
                {
                    headers: {
                        Authorization: `Bearer ${usertoken}`,
                    },
                });
            console.log(response);
            if (response.status === 200) {
                toast.success("Task Deleted Sucessfully");
            }
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const renderTaskList = (taskList) => {
        if (taskList.length === 0) {
            return <p className='text-center'>No tasks</p>;
        }

        return (
            <table className="table mb-4">
                <thead>
                    <tr>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((task, index) => (
                        <tr key={index}>
                            <td>{task.taskname}</td>
                            <td>
                                <select
                                    id='form'
                                    className="form-select shadow-none"
                                    value={task.status}
                                    onChange={(e) => {
                                        const newStatus = e.target.value;
                                        const taskId = task.id;
                                        handleStatusUpdate(taskId, newStatus);
                                    }}
                                >
                                    <option value="Assigned" disabled>Assigned</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </td>
                            <td>{task.assignedDate}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => handleDelete(task.id)}
                                >
                                    <i className="fa-solid fa-trash-can" style={{ color: "red", fontSize: 21 }}></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };


    return (
        <div id="div">
            <h2 id="todo" className="mt-2 text-center">
                Get things done, one task at a time
            </h2>
            <div className="row m-0">
                <div className="col-md-1 m-5 ">
                    <img alt="todo" height={410} src={todolist} />
                </div>
                <div className="col-md-10 ms-4 mt-5 ps-5">
                    <section className="vh-75 ">
                        <div className="container mt-3 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-lg-9 col-xl-7">
                                    <div className="card rounded-3">
                                        <div className="card-body p-4">
                                            <h4 className="text-center my-3 pb-3"><img src={logo}></img></h4>
                                            <form
                                                className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    handleTaskSubmission();
                                                }}
                                            >
                                                <div className="col-12">

                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            placeholder="Enter Task"
                                                            className=""
                                                            value={taskName}
                                                            onChange={(e) => setTaskName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-12">
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        value={assignedDate}
                                                        min={todaydate}
                                                        onChange={(e) => setAssignedDate(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-dark">
                                                        <i className="fa-regular fa-floppy-disk" style={{ fontSize: 15 }}></i>
                                                    </button>
                                                </div>
                                            </form>
                                            <ul className="nav nav-tabs mb-4 pb-2 justify-content-center" id="ex1" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                                                        aria-controls="ex1-tabs-1" aria-selected="true">All Tasks</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                                                        aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                                                        aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
                                                </li>
                                            </ul>

                                            <div className="tab-content" id="ex1-content">
                                                <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                                    <ul className="list-group mb-0">
                                                        {isLoading ? (
                                                            <p>Loading...</p>
                                                        ) : (
                                                            renderTaskList(tasks)
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                                    <ul className="list-group mb-0">
                                                        {isLoading ? (
                                                            <p>Loading...</p>
                                                        ) : (
                                                            renderTaskList(inProgressTasks)
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                                    <ul className="list-group mb-0">
                                                        {isLoading ? (
                                                            <p>Loading...</p>
                                                        ) : (
                                                            renderTaskList(completedTasks)
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ToDo;
