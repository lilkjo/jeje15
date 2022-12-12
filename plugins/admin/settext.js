exports.run = {
   usage: ['ترحيب_دخول', 'رسالة_خروج'],
   hidden: [''],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let setup = global.db.groups.find(v => v.jid == m.chat)
      if (command == 'ترحيب_دخول') {
         if (!text) return client.reply(m.chat, formatWel(isPrefix, command), m)
         setup.text_welcome = text
         await client.reply(m.chat, Func.texted('bold', `تم .`), m)
      } else if (/رسالة_خروج)/i.test(command)) {
         if (!text) return client.reply(m.chat, formatLef(isPrefix, command), m)
         setup.text_left = text
         await client.reply(m.chat, Func.texted('bold', `تم .`), m)
      }
   },
   admin: true
}

const formatWel = (prefix, command) => {
   return `مرحبا ، طريقة وضع الرسالة :

*1.* +tag : حتى تمنشن العضو الي دخل
*2.* +grup : حتى تحط  اسم القروب

• *مثال* : ${prefix + command} سلام عليكم +tag, منور/ة في +grup , عسى تستمع معنا`
}

const formatLef = (prefix, command) => {
   return `مرحبا ، طريقة وضع الرسالة :

*1.* +tag : fحتى تمنشن العضو الي خرج
*2.* +grup : حتى تحط  اسم القروب

• *مثال* : ${prefix + command} بالتوفيق`
}