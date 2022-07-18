import { Form } from 'react-bootstrap'
import { reduceEachTrailingCommentRange } from 'typescript'
import './SelectForm.scss'

let SelectForm = () => {
  return(
    <div className="form selectForm">
      <p className="form-name">Select</p>
      <Form.Select size="sm">
        <option>Open This Select menu</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option>Open This Select menu</option>
      </Form.Select>
      <br />
      <Form.Select size="lg">
        <option>Open This Select menu</option>
      </Form.Select>
    </div>
  )
}

export default SelectForm