(function ($) {
    $(document).ready(function () {
        $('#change_userkey').on('click', function () {
			
			$("#change_userkey").hide();
			
            $('#result').html('');
            var formData = new FormData();
            formData.append("files", $("#files")[0].files[0]);
            formData.append("Kind", '5');
            formData.append("Password", $("#Password").val());
            formData.append("color", $("#color").val());
            formData.append("shape", $("#shape").val());
            formData.append("id", $("#id").val());

            $.ajax({
                url: "http://211.42.197.194:13000/save",
				crossDomain: true,
                data: formData,
                processData: false,
                contentType: false,
                type: 'POST',
                success: function (result) {
                    if (result['result'] === true) {
                        $('#result').html(result['msg']);
                    }
                    else if (result['result'] === false) {
                        $('#result').html(result['msg']);
                    }
					$("#change_userkey").show();
                },
                complete: function (result) {
                },
                error: function (xhr, status, error) {
                }
            });

        });
    });
})(jQuery);




(function ($) 
{
    $(document).ready(function () 
	{
		$.getScript("/keyboard/js/crypto.js", function(){			
		$.getScript("/keyboard/js/hangul.js", function(){
		$.getScript("/keyboard/js/jquery.secureKeyboard.js", function(){
		$.getScript("/keyboard/style.css?after", function(){
		});});}); $.SVkeyboard.init({secure:false, _secureKey:'EdwardYangFinl010101010101010101', encrypt:true}); });
	});
})(jQuery);