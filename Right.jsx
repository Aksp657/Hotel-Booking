import logo from  "./logo2.svg"
import "./Right.css"
import Dropdown from './drop_down'
import Dropdown_loc from './dropdown_loc'
function Right()
{
    return (
        <>
            <div className="container">
                <div className="logo">
                    <img  className='logo' src={logo} alt="" />
                </div>
                <div className="menu">
                    <ul>
                        <li>Dashboard</li>
                        <li><Dropdown_loc></Dropdown_loc></li>
                        <li>Manage Ads</li>
                        <li>Hotel Attribute</li>
                        <li>Registered User</li>
                        <li>Vendor Request</li>
                        <li className='hotel'><Dropdown></Dropdown>
                            
                        </li>
                        <li>Payments
                            
                        </li>
                        <li>Withdraws</li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}
export default Right