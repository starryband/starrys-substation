module.exports = async function handler(request, response) {
    const redirect_uri = encodeURIComponent('https://starrys-substation.vercel.app/auth/discord/callback');
    const client_id = process.env.DISCORD_CLIENT_ID;
    const scope = encodeURIComponent('identify connections');

    const oauth_url = process.env.DISCORD_REDIRECT;

    response.writeHead(302, {
        Location: oauth_url
    });

    response.end();
}