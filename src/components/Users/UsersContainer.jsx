import {connect} from "react-redux";
import React from "react";
import {
    followSuccess,
    setUsers,
    unfollowSuccess,
    toggleFollowingProgress,
    requestUsers,
    unFollow,
    follow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSuperSelector
} from "../../redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        // console.log('Render')
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
    /*console.log('mapState2PropsUsers')*/
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,unFollow,followSuccess, unfollowSuccess, setUsers, toggleFollowingProgress,
        requestUsers: requestUsers}),
   /* withAuthRedirect*/
)(UsersContainer)

