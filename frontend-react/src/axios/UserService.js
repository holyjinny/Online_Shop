import axios from "axios";

class UserService {

    fetchUsers(id, title, price, image, num) {

        return axios
            .post('/api/send', null, {
                params: {
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    num: num,
                }
            })
            .then(console.log("성공"));
    }

}

export default new UserService();