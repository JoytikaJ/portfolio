


  $(document).ready(function() {

    $(function() {
      $("button").click(function(){
      	window.location ="index.html";
      })
    });
  });
//changed from <span class="goBack" to <button class="goBack"

/* window.goBack = function (e) {
	var defaultLocation = "[index.html]"
	var previousLocation = window.location.hash
	//hash property sets or returns the anchor part of a URL

	history.back();
	//function; try to go back

	var newLocation = window.location.hash;

	//if previous page doesn't load fast enough,
	//User redirected to the default location

	if (
		newLocation === previousLocation &&
		(typeof(document.referrer) !== "string" || document.referrer  === "")
		){
		window.setTimeout(function(){
			//redirect to default location
			window.location.href = defaultLocation;
			},1000); //set timeout in ms
		}
		if(e){
		if(e.preventDefault)
            e.preventDefault();
        if(e.preventPropagation)
            e.preventPropagation();
		}
		return false; //stop event propagation
	}
*/
