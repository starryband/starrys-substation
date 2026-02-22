module.exports = async function handler(request, response) {
    try {
        const server_response = await fetch("https://servers.scpslgame.com/");
        const data = await server_response.json();

        const server = data.servers.find(
            s => s.ip === "67.248.238.154"
        );

        if (!server) {
            return response.json({ online: false });
        }

        const payload = {
            online: true,
            players: server.players,
            version: server.version,
            modded: server.modded
        }

        response.json(payload);
        console.log(payload);

    } catch (err) {
        console.error(err);
        response.status(500).json({ online: false });
    }
}