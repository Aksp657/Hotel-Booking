import "./Left.css"
import internet from "./internet-svgrepo-com.svg"
import notification from "./icons8-notification-50.png"
import tools from "./tools-svgrepo-com.svg"
import dropdown from "./dropdown-svgrepo-com.svg"
import Active from "./Hotels/Active"
function Left()
{
    return (
        <>
            <div className="l_container">
                <div className="nav">
                    <div className="box">
                        <div className="A">
                        <input className="search" placeholder="Search here" type="text" />
                        </div>
                        <div className="B">
                        <img width={20} src={internet} alt="" />
                        <img width={20} src={notification} alt="" />
                        <img width={20} src={tools} alt="" />
                            <p>admin</p>
                            <img width={20} src={dropdown } alt="" />
                        </div>

                    </div>

                </div>
                <Active></Active>
            </div>
        </>
    )
}
export default Left