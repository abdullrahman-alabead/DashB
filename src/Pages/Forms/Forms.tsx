import './Forms.scss'
// Forms Components Imports
import BasicForm from '../../Components/Forms/BasicForm/BasicForm'
import HorizontalForm from '../../Components/Forms/HorizontalForm/HorizontalForm'
import FloatingForm from '../../Components/Forms/FloatingLableForm/FloatinForm'
import FilesForm from '../../Components/Forms/FilesForm/FilesForm'
import SelectForm from '../../Components/Forms/SelectForm/SelectForm'
import RadiosForm from '../../Components/Forms/RadiosForm/RadiosForm'
import GroupForm from '../../Components/Forms/InputGroupForm/GroupForm'
import SizingForm from '../../Components/Forms/SizingForm/SizingForm'

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
        <RadiosForm />
        </Col>
      </Row>
      <Row className='row'>
        <Col>
        <GroupForm />
        </Col>
        <Col>
        <SizingForm />
        </Col>
      </Row>
    </div>
  )
}

export default Forms