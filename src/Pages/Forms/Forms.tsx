import './Forms.scss'
// Forms Components Imports
import BasicForm from '../../Components/Forms/BasicForm/BasicForm'
import HorizontalForm from '../../Components/Forms/HorizontalForm/HorizontalForm'

import { Col, Row } from 'react-bootstrap'

let Forms = () => {
  return (
    <div className="forms container-fluid p-4 pb-0">
      <Row>
        <Col>
      <BasicForm />
        </Col>
        <Col>
      <HorizontalForm />
        </Col>
      </Row>
    </div>
  )
}

export default Forms