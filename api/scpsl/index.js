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

        response.json({
            online: true,
            players: server.players,
            version: server.version,
            modded: server.modded
        });

    } catch (err) {
        response.status(500).json({ online: false });
    }
}