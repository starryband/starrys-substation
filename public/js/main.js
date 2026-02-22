async function fetch_server() {
    try {
        const response = await fetch("/api/scpsl/index");
        const data = await response.json();
        const element = document.getElementById('active_players');

        element.innerHTML = data.players ?? '0';
    } catch (err) {
        console.error('Frontend fetch error:', err);
    }
}

fetch_server();