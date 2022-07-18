import { FloatingLabel, Form } from 'react-bootstrap'
import './FloatingForm.scss'

let FloatingForm = () => {
  return (
    <div className="form floatingForm">
      <p className="form-name">Floatin Lable</p>
      <form className='d-flex flex-column'>
        
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-4"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
        
        <FloatingLabel controlId="floatingPassword" label="Password" className='mb-4'>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
        <FloatingLabel controlId="floatingSelect" label="Works with selects" className='mb-4'>
      <Form.Select aria-label="Floating label select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
    <FloatingLabel controlId="floatingTextarea2" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
        />
      </FloatingLabel>
      </form>
    </div>
  )
}

export default FloatingForm