import {profileApi, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 7}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postData: [...state.postData,newPost],
            }
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state,status: action.status}
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

//thunk
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileUser(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getUserStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0)
            dispatch(setUserStatus(status));
        });
    }
}


export default profileReducer;