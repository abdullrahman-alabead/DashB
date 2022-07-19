import { Form, InputGroup } from 'react-bootstrap'
import './GroupForm.scss'

let GroupForm = () => {
  return(
    <div className="form group-form">
      <p className="form-name">Input Group</p>
      <InputGroup className='mb-4'>
      <InputGroup.Text >@</InputGroup.Text>
      <Form.Control placeholder='Username...' aria-label='btn1' />
      </InputGroup>
      <InputGroup className='mb-4'>
      <Form.Control placeholder="Recipient's Name" />
      <InputGroup.Text>@example.com</InputGroup.Text>
      </InputGroup>
      <label htmlFor="vanity-url">Your Vanity URL</label>
      <InputGroup className='mb-4'>
      <InputGroup.Text>https://example.com/users/</InputGroup.Text>
      <Form.Control />
      </InputGroup>
      <InputGroup className='mb-4'>
      <InputGroup.Text>$</InputGroup.Text>
      <Form.Control />
      <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup className='mb-4'>
      <Form.Control placeholder='Username' />
      <InputGroup.Text>@</InputGroup.Text>
      <Form.Control placeholder='Server' />
      </InputGroup>
      <InputGroup>
      <InputGroup.Text>With Textarea</InputGroup.Text>
      <Form.Control as='textarea' />
      </InputGroup>
    </div>
  )
}

export default GroupForm