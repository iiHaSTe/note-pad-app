import { useEffect } from "react";
import Header from "$/Header";
import Editor from "$/Editor";
import axios from "axios";


function App() {
  if (!localStorage.getItem("id")) {
    /*
    useEffect(() => {
      // in this part i have a error. it's my phone :')
      axios.get("http://127.0.0.1:8000/").then((res) => {
        console.log(res);
      });
    }, []);
    */
  }
  return (
    <>
      <Header />
      <Editor />
    </>
  );
}

export default App;
