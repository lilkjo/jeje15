exports.run = {
   usage: ['تخفيض', 'طرد'],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      let number = m.quoted ? m.quoted.sender : m.mentionedJid.length != 0 ? m.mentionedJid[0] : isNaN(text) ? text.replace(/[()+\s-]/g, '') + '@s.whatsapp.net' : text
      if (!text && !m.quoted) return client.reply(m.chat, Func.texted('bold', `🚩 - منشن شخص @`), m)
      if (await client.onWhatsApp(number).length == 0) return client.reply(m.chat, Func.texted('bold', `🚩 - الرقم غير مسجل في واتساب`), m)
      try {
         let mention = number.replace(/@.+/g, '')
         let users = m.isGroup ? participants.find(u => u.id == number) : {}
         if (!users) return client.reply(m.chat, Func.texted('bold', `🚩 -  @${mention} غير موجود في هذه المجموعة`), m)
         if (number  == client.decodeJid(client.user.id))return client.reply(m.chat, Func.texted('bold', `??`), m)
         if (command == 'طرد') return client.groupParticipantsUpdate(m.chat, [number], 'remove')
         if (command == 'تخفيض') return client.groupParticipantsUpdate(m.chat, [number], 'demote')
      } catch (e) {
      	console.log(e)
      	client.reply(m.chat, global.status.error, m)
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}