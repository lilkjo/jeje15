exports.run = {
   usage: ['قروب'],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      if (!args || !args[0]) return client.reply(m.chat, Func.texted('bold', `اختر غلق او فتح القروب`), m)
      if (args[0] == 'فتح') {
         await client.groupSettingUpdate(m.chat, 'not_announcement')
      } else if (args[0] == 'غلق') {
         await client.groupSettingUpdate(m.chat, 'announcement')
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}