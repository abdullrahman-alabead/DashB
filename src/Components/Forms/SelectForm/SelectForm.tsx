import { Form } from 'react-bootstrap'
import { reduceEachTrailingCommentRange } from 'typescript'
import './SelectForm.scss'

let SelectForm = () => {
  return(
    <div className="form selectForm h-100">
      <p className="form-name">Select</p>
      <Form.Select size="sm">
        <option>Open This Select menu</option>
        <option value='one'>Option One</option>
        <option value='two'>Option Two</option>
        <option value='three'>Option Three</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Open This Select menu</option>
        <option value='one'>Option One</option>
        <option value='two'>Option Two</option>
        <option value='three'>Option Three</option>
      </Form.Select>
      <br />
      <Form.Select size="lg">
        <option>Open This Select menu</option>
        <option value='one'>Option One</option>
        <option value='two'>Option Two</option>
        <option value='three'>Option Three</option>
      </Form.Select>
    </div>
  )
}

export default SelectForm