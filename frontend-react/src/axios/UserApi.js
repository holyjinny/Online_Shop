import Axiosinterceptors from "./Interceptors"

export default {

    userRegister(email, password, name, age, phone, profileImage) {

        return Axiosinterceptors({
            url: '/register',
            method: 'post',
            params: {
                email: email,
                password: password,
                name: name,
                age: age,
                phone: phone,
                profileImage: profileImage
            }
        })
    },

    fetchUserList() {

        return Axiosinterceptors({
            url: '/userList',
            method: 'get'
        })
    }
}