import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utilities/validators/validators";
import {Element} from "../common/FormsControls/FormControls";


const Login = (props) => {
    const onSubmit = (formData) => {
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
   </div>
};

const Input = Element('input')
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       component={Input}
                       name={'login'}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'rememberMe'}   validate={[required]}/> remember me
            </div>
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

export default Login;