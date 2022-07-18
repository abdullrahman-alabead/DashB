import './Forms.scss'
// Forms Components Imports
import BasicForm from '../../Components/Forms/BasicForm/BasicForm'
import HorizontalForm from '../../Components/Forms/HorizontalForm/HorizontalForm'
import FloatingForm from '../../Components/Forms/FloatingLableForm/FloatinForm'
import FilesForm from '../../Components/Forms/FilesForm/FilesForm'
import SelectForm from '../../Components/Forms/SelectForm/SelectForm'

import { Col, Row } from 'react-bootstrap'

let Forms = () => {
  return (
    <div className="forms container-fluid p-4 pb-0">
      <Row className='row'>
        <Col>
      <BasicForm />
        </Col>
        <Col>
      <HorizontalForm />
        </Col>
      </Row >
      <Row className='row'>
        <Col >
        <FloatingForm />
        </Col>
        <Col >
        <FilesForm />
        </Col>
      </Row>
      <Row className='row'>
        <Col>
        <SelectForm />
        </Col>
        <Col>
        <SelectForm />
        </Col>
      </Row>
    </div>
  )
}

export default Forms