import { useEffect } from "react";
import Header from "$/Header";
import Editor from "$/Editor";
import axios from "axios";

// localStorage
/*{
  params: {
    content: "this is content",
  },
}*/
function App() {
  if (!localStorage.getItem("id")) {
    //useEffect(() => {
    axios.get("http://127.0.0.1:8000/").then((res) => {
      console.log(res);
    });
    //}, []);
  }
  return (
    <>
      <Header />
      <Editor />
    </>
  );
}

export default App;
