let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'βΏππ₯πππ§π’π₯β’PINO\nSubscribe : https://instagram.com/pinomodz', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = true

module.exports = handler
