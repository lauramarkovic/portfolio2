const headerText = document.querySelector(".header-greetings");
const greeting = "Welcome! I'm Laura, a student of web development.";
let idx = 1;

showGreetings();

function showGreetings() {
  headerText.innerText = greeting.slice(0, idx);

  idx++;

  if (idx > greeting.length) {
    return;
  }

  setTimeout(showGreetings, 150);
}
