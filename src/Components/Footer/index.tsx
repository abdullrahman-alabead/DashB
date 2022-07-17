import './index.scss'

let Footer = () => {
  return  (
    <div className="footer container-fluid d-flex align-items-start justify-content-between rounded">
        <p className="rights">&copy; <span> Your Site Name</span>, All Right Reserved.</p>
        <div className="creators text-end">
          <p className="designer mb-1">Designed By <span>HTML Codex</span></p>
          <p className="distributer">Distributed by <span>ThemeWagon</span></p>
        </div>
      </div>
  )
}

export default Footer