const React = require("react");
import { Link , NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { doLogout } from "../actions/auth"


export const Header = ({ doLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard" exact={true}>
                    <h1>BoilerPlate</h1>
                </Link>
                <button className="button button--link" onClick={doLogout}>Logout</button>
        
            </div>
        </div>   
    </header>
)

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout : () => dispatch(doLogout())
    }
}

export default connect(undefined , mapDispatchToProps)(Header)