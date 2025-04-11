// Configura a data de lançamento (31 de dezembro de 2024)
const launchDate = new Date("December 31, 2024 00:00:00").getTime();

// Atualiza a contagem regressiva a cada segundo
const countdown = setInterval(function () {
  // Obtém a data e hora atual
  const now = new Date().getTime();

  // Calcula a diferença entre a data de lançamento e a data atual
  const distance = launchDate - now;

  // Cálculos para dias, horas, minutos e segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Exibe o resultado nos elementos HTML
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

  // Atualiza o elemento <time> com a data formatada
  const timeElement = document.getElementById("launch-date");
  timeElement.textContent = new Date(launchDate).toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Se a contagem regressiva terminar, exibe uma mensagem
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown-title").innerHTML =
      "O TechVision Pro foi lançado!";
    document.querySelector(".countdown-timer").style.display = "none";
  }
}, 1000);

// Manipulador do formulário de pré-venda
document
  .getElementById("pre-order-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Simulação de envio (substitua por código real)
    alert(
      `Obrigado, ${name}! Seu interesse foi registrado. Enviaremos detalhes da pré-venda para ${email} em breve.`
    );

    // Limpa o formulário
    this.reset();
  });
