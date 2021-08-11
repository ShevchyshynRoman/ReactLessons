import axios from "axios";

// Наш DAL рівень
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '04f22513-e8bd-4d69-962c-4896cae89da2'}
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
        return instance.get(`profile/` + userId)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
