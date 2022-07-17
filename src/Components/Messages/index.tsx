import { Col } from 'react-bootstrap'
import User from '../../assets/images/user.png'
import './index.scss'

let Messages = () => {
  return (
    <Col className='widget messages'>
            <p className='widget-name'>Messages</p>
            <div className="messages">
              <div className="message d-flex align-items-center">
                <img src={User} alt="pic" className='user-pic' />
                <div className="message-info">
                  <div className="message-nt">
                    <p className="name">Abdullrahman</p>
                    <p className="time">15 minuts ago</p>
                  </div>
                  <p className="message-preview">this is a sample text to preview the...</p>
                </div>
              </div>
              <div className="message d-flex align-items-center">
                <img src={User} alt="pic" className='user-pic' />
                <div className="message-info">
                  <div className="message-nt">
                    <p className="name">Abdullrahman</p>
                    <p className="time">15 minuts ago</p>
                  </div>
                  <p className="message-preview">this is a sample text to preview the...</p>
                </div>
              </div>
              <div className="message d-flex align-items-center">
                <img src={User} alt="pic" className='user-pic' />
                <div className="message-info">
                  <div className="message-nt">
                    <p className="name">Abdullrahman</p>
                    <p className="time">15 minuts ago</p>
                  </div>
                  <p className="message-preview">this is a sample text to preview the...</p>
                </div>
              </div>
              <div className="message d-flex align-items-center">
                <img src={User} alt="pic" className='user-pic' />
                <div className="message-info">
                  <div className="message-nt">
                    <p className="name">Abdullrahman</p>
                    <p className="time">15 minuts ago</p>
                  </div>
                  <p className="message-preview">this is a sample text to preview the...</p>
                </div>
              </div>
            </div>
          </Col>
  )
}

export default Messages