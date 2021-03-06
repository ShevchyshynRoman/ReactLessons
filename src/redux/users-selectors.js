// Селектор функція котра приймає стейт(весь стейт цілком) дістає з нього те що потрібно і повертає в бізнес
import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsersSelector,(users) => {
    return users.filter(user => true)
})

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}
















