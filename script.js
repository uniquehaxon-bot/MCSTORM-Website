const SERVER_IP = "Mc-storm.aternos.me:59703";
// If you get a Discord invite later, replace the value below.
const DISCORD_URL = "";

function copyIP(){
  navigator.clipboard.writeText(SERVER_IP).then(()=>{
    const m=document.getElementById("copyMsg");
    m.classList.add("show");
    setTimeout(()=>m.classList.remove("show"),1800);
  });
}

function storeAlert(){
  alert("MCSTORM Store is coming soon!");
}

function discordPlaceholder(e){
  if(!DISCORD_URL){
    e.preventDefault();
    alert("Discord invite link will be added here soon!");
  } else {
    e.currentTarget.href=DISCORD_URL;
  }
}

async function checkServer(){
  const dot=document.getElementById("statusDot");
  const status=document.getElementById("statusText");
  const players=document.getElementById("playerText");
  const statPlayers=document.getElementById("statPlayers");
  dot.className="status-dot loading";
  status.textContent="Checking server...";
  players.textContent="Please wait";
  try{
    // Uses mcsrvstat.us public status API for Java servers.
    const res=await fetch("https://api.mcsrvstat.us/3/"+encodeURIComponent(SERVER_IP));
    const data=await res.json();
    if(data.online){
      dot.className="status-dot online";
      status.textContent="Online";
      const p=data.players?.online ?? 0;
      const max=data.players?.max ?? "?";
      players.textContent=`${p} / ${max} players online`;
      statPlayers.textContent=p;
    }else{
      dot.className="status-dot offline";
      status.textContent="Offline";
      players.textContent="Server is currently offline";
      statPlayers.textContent="0";
    }
  }catch(err){
    dot.className="status-dot offline";
    status.textContent="Status unavailable";
    players.textContent="Could not check server";
    statPlayers.textContent="—";
  }
}
checkServer();
setInterval(checkServer,30000);
