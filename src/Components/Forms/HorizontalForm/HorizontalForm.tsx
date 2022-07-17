import { Button } from 'react-bootstrap'
import './HorizontalForm.scss'

let HorizontalForm = () => {
  return  (
    <div className="form horizontalForm h-100">
      <p className="form-name">Horizontal Form</p>
      <form>
        <div className='input-container d-flex align-items-center mb-4'>
          <p className='me-5'>Email</p>
          <input type="text" name="email" id="email" className='w-100' />
        </div>
        <div className='input-container d-flex align-items-center mb-4'>
          <p className='me-5'>Password</p>
          <input type="password" name="password" id="password" className='w-100' />
        </div>
        <div className="input-container mb-4">
          <div className="radios">
          <input type="radio" name="one" id="one" value='one' className='me-2'/>
          <label htmlFor="one" className='me-4'>Radio One</label>
          <input type="radio" name="two" id="two" value='two' className='me-2'/>
          <label htmlFor="two" className='me-4'>Radio Two</label>
          <input type="radio" name="three" id="three" value='three' className='me-2'/>
          <label htmlFor="three" >Radio Three</label>
          </div>
        </div>
        <input type="checkbox" name="check" id="check" className='checkbox mb-4 d-block' />
        <Button variant='danger' className=' mt-3'>Sign in</Button>
      </form>
    </div>
  )
}

export default HorizontalForm