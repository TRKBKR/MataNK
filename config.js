var urrl="http://127.0.0.1:2121/";
var password="pass";
var salt="7fec2d1d7ca30cf2b19d81625ef2693cfcdb23a2650b048bc6e132b485f0d64e735e44a0380ba4a508ed4e0639a41afcc2f18cfb0bb2f0065d893acb0a058cda";
var username="User"; 







function updater(){
	$.ajax({
			type: 'GET',
			url:urrl+'data.php',
	       	success:function fuck(killl){
				    lines=killl.split('\n');
				    var ff="";
				    for (i = 0; i < lines.length-1; i++) { 
						kill=lines[i].split("*_*");
		       		var user=kill[0];
		       		if (user == username){var u="ll";var ma='<div style="color:red;float:right">'+user+'</div>';
						} else {u='l';var ma='<div style="color:red;float:left">'+user+'</div>';}

		       		try {var mess=escapehtml(decrypt(kill[1],password));}
		       		catch(err){var mess=escapehtml(kill[1]);}
		       		
		       		var ff=ff+"<div class='"+u+"'>"+mess+ma+"</div>";
		       }
		       document.all["main"].innerHTML=ff;
		    }
		})
	//setTimeout('updater()', 5000); what
}

var azn = function(){
	item=document.all["msg"].value;
	message=username+"*_*"+encrypt(item,password);
	$.ajax({
			type: 'POST',
			url:urrl+'save.php',
	       	 	//async: true,
			data:{"message":message},
		       	success:function fuck(kill){
		       		updater();
		       	}
		})	
}
