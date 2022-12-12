exports.run = {
   usage: ['مختفيين'],
   use: '',
   category: '🛡️ قــائــمــة الــمــشــرفــيــن 🛡️',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      participants,
      isBotAdmin
   }) => {
      try {
         let member = participants.filter(u => u.admin == null).map(u => u.id)
         var day = 86400000 * 7,
            now = new Date() * 1
         var sider = []
         member.filter(jid => {
            if (!global.db.users.some(v => v.jid == jid) && typeof global.db.groups.find(v => v.jid == m.chat).member[jid] === 'undefined' && jid != client.decodeJid(client.user.id)) sider.push(jid)
         })
         var lastseen = Object.entries(global.db.groups.find(v => v.jid == m.chat).member).filter(([jid, data]) => data.lastseen).sort((a, b) => a[1].lastseen - b[1].lastseen).filter(([v, x]) => x.lastseen != 0 && ((now - x.lastseen > day) || (now - global.db.users.find(c => c.jid == v).lastseen > day)) && (global.db.users.some(c => c.jid == v) && !global.db.users.find(c => c.jid == v).premium && !global.db.users.find(c => c.jid == v).whitelist) && v != client.decodeJid(client.user.id))
         if (args && args[0] == '-1') {
            if (!isBotAdmin) return client.reply(m.chat, global.status.botAdmin, m)
            let arr = Object.entries(lastseen).map(([jid, _]) => jid).concat(sider)
            if (arr.length == 0) return client.reply(m.chat, Func.texted('bold', `لا يوجد مختفون هنا`), m)
            for (let jid of arr) {
               await Func.delay(2000)
               await client.groupParticipantsUpdate(m.chat, [jid], 'remove')
            }
            await client.reply(m.chat, Func.texted('bold', `تم طرد, ${arr.length} من الساحبين `), m)
         } else {
            if (sider.length == 0 && lastseen.length == 0) return client.reply(m.chat, Func.texted('bold', `لا يوجد مختفون هنا`), m)
            let teks = `乂  *المختفيين*\n\n`
            teks += sider.length == 0 ? '' : `“لائحة *${sider.length}* الاعضاء الساحبين عن واتس”\n\n`
            teks += sider.length == 0 ? '' : sider.map(v => '	◦  @' + v.replace(/@.+/, '')).join('\n')
            teks += '\n\n'
            teks += lastseen.length == 0 ? '' : `“لائحة *${lastseen.length}* الاعضاء الذين لم يفتحو واتس لمدة اسبوع”\n\n`
            teks += lastseen.length == 0 ? '' : lastseen.map(([v, x]) => '	◦  @' + v.replace(/@.+/, '') + '\n	     *اخر ضهور* : ' + Func.toDate(now - x.lastseen).split('D')[0] + ' أيام مضت').join('\n')
            teks += `\n\n*ملاحظه* : ستكون هذه الميزة دقيقة عندما يكون الروبوت في المجموعة لمدة أسبوع, أرسل *${isPrefix + command} -1* ليتم طردهم`
            teks += `\n\n${global.footer}`
            client.reply(m.chat, teks, m)
         }
      } catch (e){
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   admin: true,
   group: true
}