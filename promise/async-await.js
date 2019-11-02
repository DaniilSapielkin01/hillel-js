// //сделать асинхронной добавим  async
// function getUser(id) {
//   // return Promise.resolve({ id: 1 });
//   // throw new Error ("Ooops")
//   return Promise.resolve({ id: 1 });
// }
// async function main() {
//   let user = await getUser(1);

//   console.log(user);
// }
// main();

//запись возвращает обьект{id:1}
// .then(user => console.log(user));
// console.log(user);
///----------------
import fetch from "node-fetch";

class DataService {
  constructor(url) {
    this.url = url;
  }
  async getUser(id) {
    try {
      let response = await fetch(`${this.url}/users/${id}`);
      let data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Не удалось получить данные поьзователя");
    }
  }
  async getPosts(userId) {
    try {
      let response = await fetch(`${this.url}/posts?userId=${userId}`);
      let data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Не удалось получить посты ");
    }
  }
  async getComments(postId) {
    try {
      let response = await fetch(`${this.url}/comments?postId=${postId}`);
      let data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Не удалось получить коментарии ");
    }
  }
}

// async function getUser(id) {
//   try {
//     let response = await fetch(
//       `http://jsonplaceholder.typicode.com/users/${id}`
//     );
//     let data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error("Не удалось получить данные");
//
// }

(async () => {
  let dataService = new DataService("http://jsonplaceholder.typicode.com");

  try {
    let user = await dataService.getUser(1);
    let posts = await dataService.getPosts(user.id);
    let comments = await dataService.getComments(posts[0].id);

    console.log(comments);

    console.log(user);
  } catch (error) {
    console.log(error);
  }
})();
