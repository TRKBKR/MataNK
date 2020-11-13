function encrypt (message,pass) {
	var key = sha1(pass+salt+pass);
	var iv = CryptoJS.lib.WordArray.random(128/8);
	const encrypted = CryptoJS.AES.encrypt(message, key, {iv:iv,mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7});
	return encrypted.toString()
}

function decrypt (message,pass) {
	if (message.length > 1){
	var key = sha1(pass+salt+pass);
	var iv = CryptoJS.lib.WordArray.random(128/8);
	const decrypted = CryptoJS.AES.decrypt(message, key, {iv:iv,mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7})
	return decrypted.toString(CryptoJS.enc.Utf8)}
}
function escapehtml(text){
	return text
	.replace("<","&lt;")
	.replace(">","&gt;")
	.replace("'","&quot;")
	.replace('"',"&quot;")	
	}
// Someone is Using My Name In Wild Defacing 
// -_- 
// this project was created in 5:00-redbull-cofee-scarlxrd/omenxiii loop
// and Please WTF Stepping on the crack means ??
