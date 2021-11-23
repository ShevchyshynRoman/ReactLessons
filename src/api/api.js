import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '304c909b-7dba-498e-b89b-3d327aadaa93'}
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
       return instance.delete(`follow/${id}`,)
           .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`,{})
            .then(response => response.data)
    },
    getProfileUser(userId) {
        console.warn('Obsolete method,please use profileApi.getProfileUser method')
        return profileApi.getProfileUser(userId)
    }
}

export const profileApi = {
    getProfileUser(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId){
        return  instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status){
        return  instance.put(`profile/status/`,{status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe = false) {
        return instance.post(`auth/login`, {email,password,rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}

