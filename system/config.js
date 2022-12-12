// Owner number
global.owner = '34612538080'
// Owner name
global.owner_name = 'BK9 💙'
// Database name (Default: database)
global.database = 'database'
// Maximum upload file size limit (Default : 100 MB)
global.max_upload = 100
// Delay for spamming protection (Default : 3 seconds)
global.cooldown = 3
// User Limitation (Default : 25)
global.limit = 25
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '94', '94', '1']
// Put target jid to forward friends story
global.forwards = global.owner + '@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Timezone (Default : Asia/Riyadh)
global.timezone = 'Asia/Riyadh'
// Bot version
global.version = '2.2.2',
// Bot name
global.botname = `© jiraya-bot`
// Footer text
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴊɪʀᴀʏᴀ ッ'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'تتحمل . . . '),
   invalid: Func.texted('bold', 'رابط مب شغال'),
   wrong: Func.texted('bold', 'خطأ !'),
   getdata: Func.texted('bold', 'تتحمل . . .'),
   fail: Func.texted('bold', 'حدث خطأ'),
   error: Func.texted('bold', 'حدث خطأ'),
   errorF: Func.texted('bold', 'حدث خطأ'),
   premium: Func.texted('bold', 'هذا الامر خاص بالبرو'),
   owner: Func.texted('bold', 'هذا الامر خاص بالمطور'),
   god: Func.texted('bold', 'هذا الامر خاص بالمطور'),
   group: Func.texted('bold', 'هذا الامر خاص بالمجموعات'),
   botAdmin: Func.texted('bold', 'حطني مشرف اول 🤨'),
   admin: Func.texted('bold', 'هذا الامر خاص بالمشرفين'),
   private: Func.texted('bold', 'هذا الامر للخاص فقط')
})
