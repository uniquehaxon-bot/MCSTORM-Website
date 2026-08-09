const SERVER_IP = "Mc-storm.aternos.me:59703";
const DISCORD_URL = "https://discord.gg/rzrBrVTN5";

function copyIP() {
  navigator.clipboard.writeText(SERVER_IP).then(() => {
    const message = document.getElementById("copyMsg");
    if (message) {
      message.classList.add("show");
      setTimeout(() => message.classList.remove("show"), 1800);
    }
  });
}

function storeAlert() {
  alert("MCSTORM Store is coming soon!");
}

function discordPlaceholder(event) {
  event.preventDefault();
  window.open(DISCORD_URL, "_blank");
}

async function checkPlayers() {
  const statPlayers = document.getElementById("statPlayers");
  if (!statPlayers) return;

  try {
    const response = await fetch(
      "https://api.mcsrvstat.us/3/" + encodeURIComponent(SERVER_IP)
    );
    const data = await response.json();

    if (data.online) {
      statPlayers.textContent = data.players?.online ?? 0;
    } else {
      statPlayers.textContent = "0";
    }
  } catch (error) {
    statPlayers.textContent = "—";
  }
}

checkPlayers();
setInterval(checkPlayers, 30000);
