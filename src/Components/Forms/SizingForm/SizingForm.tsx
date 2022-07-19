import { Form } from 'react-bootstrap'
import './SizingForm.scss'

let SizingForm = () => {
  return (
    <div className="form sizing-form h-100">
      <p className="form-name">Sizing</p>
      <Form.Control size="lg" type="text" placeholder="Large text" className='mb-4' />
      <Form.Control type="text" placeholder="Normal text" className='mb-4' />
      <Form.Control size="sm" type="text" placeholder="Small text" className='mb-4' />
    </div>
  )
}

export default SizingForm