import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Button } from 'react-bootstrap'
import './index.scss'

let Todo = () => {
  return(
    <Col className='widget todo'>
            <p className='widget-name'>To-Do List</p>
            <div className="todo-container">
              <div className="add-task w-100 d-flex align-items-center">
              <input type="text" placeholder='Add Task...' className='task-input w-100 bg-black border-0 py-2 px-3 me-2 rounded' />
              <Button variant='danger'>Add</Button>
              </div>
              <ul className="tasks p-0">
                <li className="task">
                  <input type="checkbox" className='completed-check' />
                  <p className="task-text">Short Task Goes Here...</p>
                  <FontAwesomeIcon icon={faXmark} />
                  
                </li>
                <li className="task">
                  <input type="checkbox" className='completed-check' />
                  <p className="task-text">Short Task Goes Here...</p>
                  <FontAwesomeIcon icon={faXmark} />
                  
                </li>
                <li className="task">
                  <input type="checkbox" className='completed-check' />
                  <p className="task-text">Short Task Goes Here...</p>
                  <FontAwesomeIcon icon={faXmark} />
                  
                </li>
                <li className="task">
                  <input type="checkbox" className='completed-check' />
                  <p className="task-text">Short Task Goes Here...</p>
                  <FontAwesomeIcon icon={faXmark} />
                  
                </li>
                <li className="task">
                  <input type="checkbox" className='completed-check' />
                  <p className="task-text">Short Task Goes Here...</p>
                  <FontAwesomeIcon icon={faXmark} />
                  
                </li>
              </ul>
            </div>
          </Col>
  )
}

export default Todo