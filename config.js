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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_54_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICA4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDYzLFxuICAgICAgICA4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDQsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICA1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgMjE3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDg4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMyxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDYyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImtJVjlBMjJaMlE5SXJHdmlLVXdJVVZ2NWZYMWZ6dnF5SE5NYmt2N3ZQQlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2Mjg4NTMyODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJGMjY1N0YzQTYzRjNDMTk0MERENDA0NkNCQTQ3Mzg4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc1Njg1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NjI4ODUzMjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxRUU0MjE5MDlDQUEyRTg4NzI0NENCMTUwRTU1RkUzM1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3NTY4NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzYyODg1MzI4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjRFQjQ2OEMyMjdENDkzNEQ3NUE5QjIxNkRGNjkzQjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NzU2ODU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjc2Mjg4NTMyODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk4RjdDMTBDMDM1OEI0RDgwQjk4ODlCQTFEMEYzOTkxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjc1Njg1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtRXc3dzlLVVF2ZWx6YnpwNF9SZFZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEyMWRkMWM3LWQzODgtNGUyOS1hZmM4LTY2NWNkOWRhYzJkZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAxMjksXG4gICAgICAxNjIsXG4gICAgICAxNjIsXG4gICAgICAxMjQsXG4gICAgICA5OSxcbiAgICAgIDU5LFxuICAgICAgNzcsXG4gICAgICA5LFxuICAgICAgMTM0LFxuICAgICAgMjMxLFxuICAgICAgMTQwLFxuICAgICAgMTI4LFxuICAgICAgOTcsXG4gICAgICAyNTQsXG4gICAgICAxODIsXG4gICAgICAxMzksXG4gICAgICA2NyxcbiAgICAgIDcxLFxuICAgICAgODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICAxNjIsXG4gICAgICA3NCxcbiAgICAgIDE3MSxcbiAgICAgIDEwMCxcbiAgICAgIDMxLFxuICAgICAgNzYsXG4gICAgICAyMjYsXG4gICAgICA1OCxcbiAgICAgIDMxLFxuICAgICAgMjQwLFxuICAgICAgMjE5LFxuICAgICAgMjE1LFxuICAgICAgMTg2LFxuICAgICAgMTE1LFxuICAgICAgMTE0LFxuICAgICAgMjM5LFxuICAgICAgMTQ3LFxuICAgICAgMjAyLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdNQ0hBTjY5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzYyODg1MzI4MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzE4ODkwNzk0NzIyOTM6NEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01mSG1Mc0VFUERDenJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2NiNjRkaWNJUkQxcG1WNFQ3a3JvOUt2WHZnR0FFenp2cEFXRmYvTXFEVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxN1Jld3ZBbmlXd1hqTFY1NWhJdWtIZHVvNDB2cGRmNGZOTDAzRW9Cek9DNmVZRVArM05TVUtOUjVhczZUZXFSNnFiclgyOTlOZlh5WmN6aEZDclBBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzak9DcjBoZG1vVE13YXI3T01MN0Z2NXdvWUdid0tsY0gwQ3dwUmFnb0g1amZrcUZkcGxXbjYwSmFBa3c3U29GU0s1N3p0MTVQaHlxeE8xQnkwRWlDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNzYyODg1MzI4MTo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjc1Njg1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9lVlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2VWLmpzb24iOiAie1wia2V5RGF0YVwiOlwibERMTHNvbExKM0FFSHFia2ZFb0RiYmR5Y0lvazROYWNrV093c0FvSkI2UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTk3ODc2MTY0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
