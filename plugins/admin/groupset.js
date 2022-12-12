exports.run = {
   usage: ['وصف', 'اسم'],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let value = m.quoted ? m.quoted.text : text
      if (command == 'اسم') {
         if (!value) return client.reply(m.chat,(isPrefix, command, 'مثلا : NIGHT MOON'), m)
         if (value > 25) return client.reply(m.chat, Func.texted('bold', `الاسم طويل ، الحد الاقصى هو 25 حرف`), m)
         await client.groupUpdateSubject(m.chat, value)
      } else if (command == 'وصف') {
     	if (!value) return client.reply(m.chat,(isPrefix, command, `مثلا : .وصف احترم قوانين المجموعة او سيتم طردك`), m)
         await client.groupUpdateDescription(m.chat, value)
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}