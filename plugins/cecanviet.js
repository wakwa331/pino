let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, ('https://api.zacros.my.id/asupan/vietnam'), 'βΏππ₯πππ§π’π₯β’PINO\nSubscribe : https://instagram.com/pinomodz', m)
}

handler.help = ['cecanvietnam']
handler.tags = ['asupan']
handler.command = /^(cecanvietnam)$/i
handler.limit = true

module.exports = handler
