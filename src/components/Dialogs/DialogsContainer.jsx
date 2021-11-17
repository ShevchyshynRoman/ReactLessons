import React from "react";
import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {
        render() {
            return (
                <Dialogs {...this.props}/>
            )
        }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{addMessage})
)(DialogsContainer)


