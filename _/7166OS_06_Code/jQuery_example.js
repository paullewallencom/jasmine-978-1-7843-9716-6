function sendRequestWithJQuery(myCallback,showErrorMessage,configurationData) {
	$.ajax({
        url: configurationData.url,
        dataType: "json",
        success: function(responseResult) {
        	myCallback(responseResult);
        },
        error:showErrorMessage,
        timeout: configurationData.remainingTime
	});
}
function myCallback(ajaxResponse) {
	var out = "";
	for(i = 0; i < ajaxResponse.length; i++) {
	    out += ajaxResponse[i].book + ajaxResponse[i].author;
	}
	$("#my-fixture").html(out);
}