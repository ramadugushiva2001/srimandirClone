import './index.css'

const Header = () => (
  <nav>
    <h1>SriMandir</h1>
    <ul className="nav-items">
      <li className="nav-item">Home</li>
      <li className="nav-item">Puja</li>
      <li className="nav-item">Panchang</li>
      <li className="nav-item">Temples</li>
      <li className="nav-item">Library</li>
    </ul>
    <div>
      <select>
        <option>ENG</option>
        <option>ENG</option>
      </select>
      <button className="profile-button">profile</button>
    </div>
  </nav>
)

export default Header
