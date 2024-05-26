const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_22_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICA3MixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDI5LFxuICAgICAgICA4OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICA5LFxuICAgICAgICAyNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgxLFxuICAgICAgICA1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGw1RzZxU0xCZjZBeWNVc24vdU1RSjlBeXE4WkkzNTVlRko3NzVpTnFuND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzYyODg1MzI4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUU1RjQyNkM1OEU2NDZGRDFCNjNFRDFCREJGMDY2OURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzU4NTUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2Mjg4NTMyODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRBOTcyRTk2QzYxQzA5ODQ1QTZBNjgyMTlENzVEMUIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc1ODU1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjI4ODUzMjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNEFFQkJENURGNDhERDg2QjhFRjVFNkVEMEZFMjIyNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3NTg1NTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzYyODg1MzI4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkUwQzNFRDBFNjlCMjVBODgyODk1RUU4MkIzMjk5RERcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzU4NTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNXNllkTkotVDRhd1hzcldydVdkSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjU4MWM5ZDctNzkzOS00NzdhLTgzZjEtODQ2MGUyZWRkYWJmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgOTAsXG4gICAgICAxNzAsXG4gICAgICAyNCxcbiAgICAgIDkwLFxuICAgICAgMTc2LFxuICAgICAgMTk4LFxuICAgICAgMTgwLFxuICAgICAgMTQ2LFxuICAgICAgMTQ0LFxuICAgICAgNTIsXG4gICAgICA0NyxcbiAgICAgIDM5LFxuICAgICAgNTQsXG4gICAgICA0NSxcbiAgICAgIDMzLFxuICAgICAgMjQwLFxuICAgICAgMjE0LFxuICAgICAgODksXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMTkxLFxuICAgICAgMjMzLFxuICAgICAgMTAzLFxuICAgICAgMTQyLFxuICAgICAgMjE2LFxuICAgICAgMTIxLFxuICAgICAgNDEsXG4gICAgICA3NixcbiAgICAgIDE0NSxcbiAgICAgIDE4NixcbiAgICAgIDEzNixcbiAgICAgIDIzMSxcbiAgICAgIDc5LFxuICAgICAgMjI0LFxuICAgICAgNTUsXG4gICAgICAyNTQsXG4gICAgICAxNDYsXG4gICAgICAyNixcbiAgICAgIDEwMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyS0hGRktXUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc2Mjg4NTMyODE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcxODg5MDc5NDcyMjkzOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTWVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNakhtTHNFRUpQUXpySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldjYjY0ZGljSVJEMXBtVjRUN2tybzlLdlh2Z0dBRXp6dnBBV0ZmL01xRFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOEd5ZEJnYnFEcHNnWHJTd3JzRUdBeUR0bEppbzljMFV4SkVOSEZUdWwyTmxZeUQ4MnBKdXU2dFd5WDFlUW1zUEtWS2pvL0UzbitWd3Nlai8rNERBQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT2tUN0NiQzM0SFdVVCthS2FHSVdTeWR1SjNLRkpMNjlaajhMU2l5aUlDeHpBb2lWVHlMUmdkVnczNkdDejBZZUpRODlLbVg3WnF2QktpNzdCM2J5Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc2Mjg4NTMyODE6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY3NTg1NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPZVZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9lVi5qc29uIjogIntcImtleURhdGFcIjpcImxETExzb2xMSjNBRUhxYmtmRW9EYmJkeWNJb2s0TmFja1dPd3NBb0pCNlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE5Nzg3NjE2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
