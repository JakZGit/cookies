document.getElementById('sign').onclick = function(){
	
	var user = document.getElementById("username").value;
	
	if(Cookies.get(user)!=null)
		alert("Welcome back");

	else 
		Cookies.set(user,"Welcome back");

}


//$("form").submit(function(e){

//})