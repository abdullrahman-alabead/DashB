import { Form } from 'react-bootstrap'
import './RadiosForm.scss'

let RadiosForm = () => {
  return(
    <div className="form radioForm h-100">
      <p className="form-name">Checks, Radios & Switches</p>
      <div className="check-boxes d-flex flex-column align-items-start mb-4 pb-2">
        <Form.Check className='mb-2 check' type='checkbox' id='check1' label='Default Checkbox' />
        <Form.Check className='mb-2 check' type='checkbox' id='check2' label='Checked Checkbox' checked />
        <Form.Check className='mb-2 check' type='checkbox' id='check3' label='Disabled Checkbox' disabled />
      </div>
      <div className="check-boxes d-flex flex-column align-items-start mb-4 pb-2">
        <Form.Check className='mb-2 check' type='radio' id='radio1' label='Default radio' />
        <Form.Check className='mb-2 check' type='radio' id='radio2' label='Checked radio' checked />
        <Form.Check className='mb-2 check' type='radio' id='radio3' label='Disabled radio' disabled />
      </div>
      <div className="check-boxes d-flex flex-column align-items-start">
        <Form.Check className='mb-2 check' type='switch' id='switch1' label='Default switch' />
        <Form.Check className='mb-2 check' type='switch' id='switch2' label='Checked switch' checked />
        <Form.Check className='mb-2 check' type='switch' id='switch3' label='Disabled switch' disabled />
      </div>
    </div>
  )
}

export default RadiosForm