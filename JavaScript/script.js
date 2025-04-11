const launchDate = new Date("April 25, 2025 00:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();

  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  const timeElement = document.getElementById("launch-date");
  timeElement.textContent = new Date(launchDate).toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown-title").innerHTML =
      "O TechVision Pro foi lançado!";
    document.querySelector(".countdown-timer").style.display = "none";
  }
}, 1000);

document
  .getElementById("pre-order-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    alert(
      `Obrigado, ${name}! Seu interesse foi registrado. Enviaremos detalhes da pré-venda para ${email} em breve.`
    );

    this.reset();
  });
