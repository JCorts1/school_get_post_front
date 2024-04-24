import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PostStudent from "./component/PostStudent";

const App = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    updatingStudent();
  }, []);

  function updatingStudent() {
    axios.get("http://127.0.0.1:3000/students").then(function (response) {
      setStudent(response.data);
    });
  }

  return (
    <div>
      <PostStudent updating={updatingStudent} />
      <div>
        {student.map((student) => (
          <div>{student.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
