import React, { useState } from "react";

function CustomButton(props) {
  const { onClick, children, bgColor, color } = props;
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
}

const User = (props) => {
  return (
    <div>
      {props.user.age}살 : {props.user.name}
      <CustomButton
        bgColor="red"
        color="#fff"
        onClick={() => {
          props.deleteUserHandler(props.user.id);
        }}
      >
        삭제하기
      </CustomButton>
    </div>
  );
};

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  const deleteUserHandler = (id) => {
    const newUserList = users.filter((user) => user.id !== id);
    setUsers(newUserList);
  };
  return (
    <div>
      {users.map((user) => {
        return user.age < 25
        ? (<User
            deleteUserHandler={deleteUserHandler}
            user={user}
            key={user.id}
          ></User>) 
        : null;
      })}
      <input
        value={age}
        placeholder="나이를 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        value={name}
        placeholder="이름을 입력해주세요"
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={(e) => setName(e.target.value)}
      />
      <CustomButton bgColor="green" color="#fff" onClick={addUserHandler}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;

