exports.run = {
   usage: ['حضر'],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      args,
      isPrefix,
      command
   }) => {
      let gc = global.db.groups.find(v => v.jid == m.chat)
      let opt = [0, 1]
      let rows = [{
         title: 'نعم',
         rowId: `${isPrefix + command} 1`,
         description: ``
      }, {
         title: 'لا',
         rowId: `${isPrefix + command} 0`,
         description: ``
      }]
      if (!args || !args[0] || !opt.includes(parseInt(args[0]))) return client.sendList(m.chat, '', `*حضر المجموعة من البوت* : [ ${gc.mute ? 'نعم' : 'لا'} ]`, '', ' ! اختر ', [{ rows }], m)
      if (parseInt(args[0]) == 1) {
         if (gc.mute) return client.reply(m.chat, Func.texted('bold', ` المجموعة محضورة من البوت بالفعل. `), m)
         gc.mute = true
         client.reply(m.chat, Func.texted('bold', ` تم حضر البوت بالمجموعة `), m)
      } else if (parseInt(args[0]) == 0) {
         if (!gc.mute) return client.reply(m.chat, Func.texted('bold', `يمكن للمجموعة استعمال البوت الان`), m)
         gc.mute = false
         client.reply(m.chat, Func.texted('bold', `يمكن للمجموعة استعمال البوت الان`), m)
      }
   },
   admin: true,
   group: true,
   cache: true,
   location: __filename
}