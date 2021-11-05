import {connect} from "react-redux";
import React from "react";
import {
    followSuccess,
    setUsers,
    unfollowSuccess,
    toggleFollowingProgress,
    getUsers,
    unFollow,
    follow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : <Users totalUsersCount={this.props.totalUsersCount}
                                                               pageSize={this.props.pageSize}
                                                               currentPage={this.props.currentPage}
                                                               users={this.props.users}
                                                               followSuccess={this.props.followSuccess}
                                                               unfollowSuccess={this.props.unfollowSuccess}
                                                               onPageChanged={this.onPageChanged}
                                                               followingInProgress={this.props.followingInProgress}
                                                               follow={this.props.follow}
                                                               unFollow={this.props.unFollow}
                                                         />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default withAuthRedirect(connect(mapStateToProps, {
    follow,unFollow,followSuccess, unfollowSuccess, setUsers, toggleFollowingProgress,
    getUsers
})(UsersContainer));