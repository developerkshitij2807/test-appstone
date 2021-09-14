import React, { useState} from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "https://reqres.in/",
});

function TaskAppstone2(props) {
  const [userData, setuserData] = useState(null);

  API.get("api/users?page=2")
    .then((res) => {
      console.log(res.data.data);

      setuserData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(userData);

  if (userData !== null) {
    return userData.map((ud) => {
      return <div>{ud.first_name}</div>;
    });
  } else {
    return <div></div>;
  }
}

export default TaskAppstone2;
