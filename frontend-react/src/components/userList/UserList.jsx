import React, { useEffect, useState } from "react";
import UserApi from "../../axios/UserApi";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserApi.fetchUserList().then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <section>
        <h1>회원 목록 보기</h1>
        {users.map((userList) => (
          <div key={userList.id}>
            <h1>{userList.email}</h1>
            <h3>{userList.password}</h3>
            <h3>{userList.name}</h3>
            <h3>{userList.age}</h3>
            <h3>{userList.phone}</h3>
            <h3>{userList.profileImage}</h3>
            <hr />
          </div>
        ))}
      </section>
    </>
  );
};

export default UserList;
