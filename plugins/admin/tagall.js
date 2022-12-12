exports.run = {
   usage: ['منشن'],
   hidden: ['منشن'],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      client,
      text,
      participants
   }) => {
      try {
         let member = participants.map(v => v.id)
         let readmore = String.fromCharCode(8206).repeat(4001)
         let message = (!text) ? ' المنشن الجماعي للمسابقات او الاعلان عن شيئ مهم ' : text
         client.reply(m.chat, `*السلام عليكم * 乂 \n\n*“${message}”*\n${readmore}\n${member.map(v => '💠  @' + v.replace(/@.+/, '')).join('\n')}`, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   admin: true,
   group: true
}
