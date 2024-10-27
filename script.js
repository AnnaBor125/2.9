let clickCount = 0; // Переменная для хранения количества нажатий

const button = document.getElementById ("clickButton"); // Получение элементов кнопки и счетчика
const countDisplay = document.getElementById("count");
button.addEventListener("click", function () {
  clickCount++; //Увеличиваем счетчик
  countDisplay.textContent = clickCount; // Увеличиваем значение count и обновляем текст элемента
});

let secondsElapsed = 0;
const secondsDisplay = document.getElementById("seconds");
function updateTimer() {
  secondsElapsed++;
  secondsDisplay.textContent = secondsElapsed;
}
setInterval(updateTimer, 100);
