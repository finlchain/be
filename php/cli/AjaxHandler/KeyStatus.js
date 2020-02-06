(function ($) {
    $(document).ready(function () {
        $('#KeyStatus').on('click', function () {
			
			$("#KeyStatus").hide();
			
            $('#result').html('');
            $.ajax({
                type: "POST",
                url: "http://211.42.197.194:13000/",
				crossDomain: true,
                dataType: "json",
                data: {
                    'Kind': '6',
                    'publickey': $('#publickey').val()
                },
                success: function (result) {
                    if (result['result'] === true) {
                        $('#result').html(result['msg']);
                    }
                    else if (result['result'] === false) {
                        $('#result').html(result['msg']);
                    }
					$("#KeyStatus").show();
                },
                complete: function (result) {
                },
                error: function (xhr, status, error) {
                }
            });

        });
    });
})(jQuery);