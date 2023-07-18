import axios from "axios";

interface Todo {
  id: number;
  title: string;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((r) => {
  // console.log("ddd", r.data);
  const resp = r.data as Todo;
  const { id, title } = resp;
  console.log("resp", id);

  dd(id, title);
});

function dd(id: number, title: string) {
  console.log(id, "==", title);
}
// return result.data;



