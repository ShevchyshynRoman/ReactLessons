import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utilities/validators/validators";
import {Element} from "../common/FormsControls/FormControls";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/FormControls.module.css"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email,formData.password,formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={'/profile'}/>
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const Input = Element('input')
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       component={Input}
                       name={'email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       component={Input}
                       name={'password'}
                       type={'password'}
                       validate={[required]}/>
            </div>
            <div>
               remember me <Field type={'checkbox'} component={Input} name={'rememberMe'} validate={[required]}/>
            </div>
            {
                props.error && <div className={styles.formSummaryError}>
                        {props.error}
                    </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps ,{logIn})(Login);