const button = document.querySelector("#button");
const content = document.querySelector("#content");

const randomUser = async () => {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  const { name, gender, dob, picture } = user;

  content.innerHTML = `
    <h4>First name : ${name.first}</h4>
    <h4>Last name : ${name.last}</h4>
    <p>Gender : ${gender}</p>
    <p>Age : ${dob.age}</p>
    <img src=${picture.thumbnail} alt="user image"/>
  `;
};

button.addEventListener("click", () => {
  randomUser();
});
