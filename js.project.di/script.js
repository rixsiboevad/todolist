const emailIn = document.getElementById("emailIn");
const passwordIn = document.getElementById("passwordIn");
const buttonSave = document.getElementById("buttonSave");
const buttonLogin = document.getElementById("buttonLogin");
const box = document.querySelector('box');

buttonSave.addEventListener("click", () => {
    const email = emailIn.value.trim();
    const password = passwordIn.value.trim();

    if (email && password) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("ты успешно все сохранил");
      emailIn.value = "";
      passwordIn.value = "";
    } else {
      alert("ты не все заполнил");
    }
  });

 buttonLogin.addEventListener("click", () => {
    const email = emailIn.value.trim();
    const password = passwordIn.value.trim();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      alert("ну привет!");
      window.location.href = "todo.html";
    } else {
      alert("упс, регистрация провалена");
    }
  });