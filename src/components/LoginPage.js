import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"



export const LoginPage = ({ startLogin }) => (
    <div className = "box-layout">
        <div className="box-layout__box">
            <h1 className= "box-layout__title">BoilerPlate</h1>
            <p>Tagline For App</p>
            <button onClick={startLogin} className="button" >Login With Google</button>
        </div>   
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin : () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps )(LoginPage)