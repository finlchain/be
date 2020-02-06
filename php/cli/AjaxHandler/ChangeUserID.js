(function ($) {
    $(document).ready(function () {
        $('#change_userid').on('click', function () {
            $('#result').html('');
            var formData = new FormData();
            formData.append("files", $("#files")[0].files[0]);
            formData.append("Kind", '4');
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
		$("#alert-success").hide();
		$("#alert-danger").hide();
		$("#change_userid").attr("disabled", "disabled");
		$("input").keyup(function()
		{
			var pwd1=$("#Password").val(); 
			var pwd2=$("#CheckPassword").val(); 
			if(pwd1 != "" || pwd2 != "")
			{
				if(pwd1 == pwd2)
				{
					$("#alert-success").show();
					$("#alert-danger").hide();
					$("#change_userid").removeAttr("disabled");
					}
				else
				{
					$("#alert-success").hide();
					$("#alert-danger").show();
					$("#change_userid").attr("disabled", "disabled");
				}
			} 
		});
    });
})(jQuery);