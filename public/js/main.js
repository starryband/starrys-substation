async function fetch_server() {
    const response = await fetch("/api/scpsl/index");
    const data = await response.json();
    const element = document.getElementById('active_players');

    element.innerHTML = data.players ?? '0';
}

fetch_server();