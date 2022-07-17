import { Button } from 'react-bootstrap'
import './BasicForm.scss'

let BasicForm = () =>  {
  return (
    <div className="form basicForm">
      <div className="form-name text-white">Basic</div>
      <form className='d-flex flex-column align-items-start'>
        <p className="label email-label">Email address</p>
        <input type="text" name="email" id="email" className=' w-100 mb-4'/>
        <p className="label password-label">Password</p>
        <input type="password" name="password" id="password" className='w-100 mb-4' />
        <input type="checkbox" name="check" id="check" className='checkbox mb-4' />
        <Button variant='danger'>Sign in</Button>
      </form>
    </div>
  )
}

export default BasicForm