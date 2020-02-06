(function ($) {
    $(document).ready(function () {
        $('#KeyAdd').on('click', function () {

			$("#KeyAdd").hide();
			$("#change_userkey").hide();

            var formData = new FormData();
            formData.append("files", $("#files")[0].files[0]);
            formData.append("Kind", '3');
            formData.append("Password", $("#Password").val());
            formData.append("color", $("#color").val());
            formData.append("shape", $("#shape").val());
            formData.append("id", $("#id").val());
			formData.append("PublicKey", $("#PublicKey").val());
            $('#result').html('');
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
                },
                complete: function (result) {
					$("#KeyAdd").show();
					$("#change_userkey").show();
                },
                error: function (xhr, status, error) {
                }
            });

        });
    });
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $('#change_userkey').on('click', function () {

			$("#KeyAdd").hide();
			$("#change_userkey").hide();

            $('#result').html('');
            var formData = new FormData();
            formData.append("files", $("#files")[0].files[0]);
            formData.append("Kind", '5');
            formData.append("Password", $("#Password").val());
            formData.append("color", $("#color").val());
            formData.append("shape", $("#shape").val());
            formData.append("id", $("#id").val());
			formData.append("PublicKey", $("#PublicKey").val());

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

                },
                complete: function (result) {
					$("#KeyAdd").show();
					$("#change_userkey").show();
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
		//$("#alert-success").hide();
		//$("#alert-danger").hide();
		//$("#KeyAdd").attr("disabled", "disabled");
		//$("#change_userkey").attr("disabled", "disabled");
		//$("input").keyup(function()
		//{
		//	var pwd1=$("#Password").val(); 
		//	var pwd2=$("#CheckPassword").val(); 
		//	if(pwd1 != "" && pwd2 != "")
		//	{
		//		if(pwd1 == pwd2)
		//		{
		//			$("#alert-success").show();
		//			$("#alert-danger").hide();
		//			$("#KeyAdd").removeAttr("disabled");
		//			$("#change_userkey").removeAttr("disabled");
		//		}
		//		else
		//		{
		//			$("#alert-success").hide();
		//			$("#alert-danger").show();
		//			$("#KeyAdd").attr("disabled", "disabled");
		//			$("#change_userkey").attr("disabled", "disabled");
		//		}
		//	} 
		//
		//});
		//$('#Password, #CheckPassword, #PublicKey, #id').on('click', function () {
		//	var pwd1=$("#Password").val(); 
		//	var pwd2=$("#CheckPassword").val(); 
		//	if(pwd1 != "" && pwd2 != "")
		//	{
		//		if(pwd1 == pwd2)
		//		{
		//			$("#alert-success").show();
		//			$("#alert-danger").hide();
		//			$("#KeyAdd").removeAttr("disabled");
		//			$("#change_userkey").removeAttr("disabled");
		//		}
		//		else
		//		{
		//			$("#alert-success").hide();
		//			$("#alert-danger").show();
		//			$("#KeyAdd").attr("disabled", "disabled");
		//			$("#change_userkey").attr("disabled", "disabled");
		//		}
		//	} 
		//
		//});
		$('#Password_box, #CheckPassword_box').on('click', function () {

			 if($('#Password_box').is(':checked'))
			 {
				 $("#Password").attr("type","text");
				 $("#Password_box_txt").text("Hide");
			 }
			 else
			 {
				 $("#Password").attr("type","password");
				 $("#Password_box_txt").text("Show");
			 }

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