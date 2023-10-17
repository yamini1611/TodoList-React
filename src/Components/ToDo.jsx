import React from "react";
import todolist from './Assets/Images/todo.png';
import './Styles/ToDo.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
const ToDo = () => {
    return (
        <div id="div">

            <h2 id="todo" className="mt-3">To Do List</h2>
            <div className="row">
                <div className="col-4 m-5">
                    <img alt="todo" height={390} src={todolist}></img>
                </div>
                <div className="col-6">
                    <section class="vh-100 gradient-custom">
                        <div class="container  h-75">
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col col-xl  -10">

                                    <div class="card">
                                        <div class="card-body p-5">

                                            <form class="d-flex justify-content-center align-items-center mb-4" >
                                                <div class="form-outline flex-fill">
                                                
                                                <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>                                                </div>
                                                <button type="submit" class="btn btn-info ms-2">Add</button>
                                            </form>

                                            <ul class="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab"
                                                        aria-controls="ex1-tabs-1" aria-selected="true">All</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab"
                                                        aria-controls="ex1-tabs-2" aria-selected="false">Active</a>
                                                </li>
                                                <li class="nav-item" role="presentation">
                                                    <a class="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab"
                                                        aria-controls="ex1-tabs-3" aria-selected="false">Completed</a>
                                                </li>
                                            </ul>

                                            <div class="tab-content" id="ex1-content">
                                                <div class="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel"
                                                    aria-labelledby="ex1-tab-1">
                                                    <ul class="list-group mb-0">
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                            <s>Cras justo odio</s>
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                            <s>Dapibus ac facilisis in</s>
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                            Morbi leo risus
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                            Porta ac consectetur ac
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                            Vestibulum at eros
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                                    <ul class="list-group mb-0">
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                            Morbi leo risus
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                            Porta ac consectetur ac
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-0 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                                                            Vestibulum at eros
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="tab-pane fade" id="ex1-tabs-3" role="tabpanel" aria-labelledby="ex1-tab-3">
                                                    <ul class="list-group mb-0">
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                            <s>Cras justo odio</s>
                                                        </li>
                                                        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                                                        >
                                                            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                                                            <s>Dapibus ac facilisis in</s>
                                                        </li>
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
    )
}

export default ToDo;