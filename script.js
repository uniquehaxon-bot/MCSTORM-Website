const SERVER_IP="Mc-storm.aternos.me:59703";
const DISCORD_URL="https://discord.gg/rzrBrVTN5";
function copyIP(){navigator.clipboard.writeText(SERVER_IP).then(()=>{const m=document.getElementById("copyMsg");if(m){m.classList.add("show");setTimeout(()=>m.classList.remove("show"),1800)}})}
function storeAlert(){alert("MCSTORM Store is coming soon!")}
async function checkPlayers(){const s=document.getElementById("statPlayers");if(!s)return;try{const r=await fetch("https://api.mcsrvstat.us/3/"+encodeURIComponent(SERVER_IP));const d=await r.json();s.textContent=d.online?(d.players?.online??0):"0"}catch(e){s.textContent="—"}}
checkPlayers();setInterval(checkPlayers,30000);