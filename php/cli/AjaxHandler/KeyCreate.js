

(function ($) {
    $(document).ready(function () {
        $('#KeyCreate').on('click', function () {
			
		$("#KeyRestoration").hide();
		$("#KeyCreate").hide();
			
            $('#result').html('');
			
			var con_test = confirm(
			'sentence1 : ' + $('#sentence1').val() + '\n' +
			'sentence2 : ' + $('#sentence2').val() + '\n' +
			'email : ' + $('#email').val() + '\n' +
			"입력하신 정보로 키를 생성 하시겠습니까?");
			
			if(con_test == true){	
			
				$.ajax({
					type: "POST",
					url: "http://211.42.197.194:13000/",
					crossDomain: true,
					dataType: "json",
					data: {
						'Kind': '1',
						'Password': $('#Password').val(),
						'sentence1': $('#sentence1').val(),
						'sentence2': $('#sentence2').val(),
						'EncPassword': $('#EncPassword').val(),
						'color': $('#color').val(),
						'shape': $('#shape').val(),
						'algorithm': $('#algorithm').val(),
						'email': $('#email').val()
					},
					success: function (result) {
						if (result['result'] === true) {
							$('#result').html(result['msg']);
						}
						else if (result['result'] === false) {
							$('#result').html(result['msg']);
						}
							$("#KeyRestoration").show();
							$("#KeyCreate").show();
					},
					complete: function (result) {
					},
					error: function (xhr, status, error) {
					}
				});
			}
			else
			{
				$("#KeyRestoration").show();
				$("#KeyCreate").show();
			}
        });
    });
})(jQuery);
(function ($) {
    $(document).ready(function () {
        $('#KeyRestoration').on('click', function () {
			
		$("#KeyRestoration").hide();
		$("#KeyCreate").hide();
			
            $('#result').html('');		
				
				var inputString = prompt('RandomNumber', '');
	
				if(isNaN(inputString) == true) {
					alert("잘못된 입력 error : 1");
					$("#KeyRestoration").show();
					$("#KeyCreate").show();
				} 
				else if(Number(inputString) >= 65536){
					alert("잘못된 입력 error : 2");
					$("#KeyRestoration").show();
					$("#KeyCreate").show();
				}
				else if(Number(inputString) < 0){
					alert("잘못된 입력 error : 3");
					$("#KeyRestoration").show();
					$("#KeyCreate").show();
				}
				else if(Number(inputString) == ''){
					alert("잘못된 입력 error : 4");
					$("#KeyRestoration").show();
					$("#KeyCreate").show();
				}
				else if (inputString == null){
					$("#KeyRestoration").show();
					$("#KeyCreate").show();
				}					
				else{
	
					var con_test = confirm(
					'sentence1 : ' + $('#sentence1').val() + '\n' +
					'sentence2 : ' + $('#sentence2').val() + '\n' +
					'RandomNumber : ' + inputString + '\n' +
					'email : ' + $('#email').val() + '\n' +
					"입력하신 정보로 키를 복구 하시겠습니까?");
					
					if(con_test == true){		
	
						$.ajax({
							type: "POST",
							url: "http://211.42.197.194:13000/",
							crossDomain: true,
							dataType: "json",
							data: {
								'Kind': '2',
								'Password': $('#Password').val(),
								'sentence1': $('#sentence1').val(),
								'sentence2': $('#sentence2').val(),
								'EncPassword': $('#EncPassword').val(),
								'color': $('#color').val(),
								'shape': $('#shape').val(),
								'algorithm': $('#algorithm').val(),
								'email': $('#email').val(),
							'RandomNumber': inputString
							},
							success: function (result) {
								if (result['result'] === true) {
									$('#result').html(result['msg']);
								}
								else if (result['result'] === false) {
									$('#result').html(result['msg']);
								}
									$("#KeyRestoration").show();
									$("#KeyCreate").show();
							},
							complete: function (result) {
							},
							error: function (xhr, status, error) {
							}
						});
					}
					else
					{
						$("#KeyRestoration").show();
						$("#KeyCreate").show();
					}
				}
        });
    });
})(jQuery);

(function ($) 
{
    $(document).ready(function () 
	{
		$("#alert-success").hide();
		$("#alert-danger").hide();
		$("#KeyCreate").attr("disabled", "disabled");
		$("#KeyRestoration").attr("disabled", "disabled");
		$("input").keyup(function()
		{
			var pwd1=$("#Password").val(); 
			var pwd2=$("#CheckPassword").val(); 
			var encpwd1=$("#EncPassword").val(); 
			var encpwd2=$("#EncCheckPassword").val(); 
			if(pwd1 != "" && pwd2 != "" && encpwd1 != "" && encpwd2 != "")
			{
				if(pwd1 == pwd2 && encpwd1 == encpwd2)
				{
					$("#alert-success").show();
					$("#alert-danger").hide();
					$("#KeyCreate").removeAttr("disabled");
					$("#KeyRestoration").removeAttr("disabled");
				}
				else
				{
					$("#alert-success").hide();
					$("#alert-danger").show();
					$("#KeyCreate").attr("disabled", "disabled");
					$("#KeyRestoration").attr("disabled", "disabled");
				}
			} 
			
		});
		 $('#Password, #CheckPassword, #sentence1, #sentence2, #algorithm, #EncPassword, #EncCheckPassword, #color, #shape, #email').on('click', function () {
			var pwd1=$("#Password").val(); 
			var pwd2=$("#CheckPassword").val(); 
			var encpwd1=$("#EncPassword").val(); 
			var encpwd2=$("#EncCheckPassword").val(); 
			if(pwd1 != "" && pwd2 != "" && encpwd1 != "" && encpwd2 != "")
			{
				console.log('s');
				if(pwd1 == pwd2 && encpwd1 == encpwd2)
				{
					$("#alert-success").show();
					$("#alert-danger").hide();
					$("#KeyCreate").removeAttr("disabled");
					$("#KeyRestoration").removeAttr("disabled");
				}
				else
				{
					$("#alert-success").hide();
					$("#alert-danger").show();
					$("#KeyCreate").attr("disabled", "disabled");
					$("#KeyRestoration").attr("disabled", "disabled");
				}
			} 
			
		});
		
		 $('#Password_box, #CheckPassword_box, #sentence1_box, #sentence2_box, #EncPassword_box, #EncCheckPassword_box').on('click', function () {
			 
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
			 
			if($('#CheckPassword_box').is(':checked'))
			 {
				 $("#CheckPassword").attr("type","text");
				 $("#CheckPassword_box_txt").text("Hide");
			 }
			 else
			 {
				 $("#CheckPassword").attr("type","password");
				 $("#CheckPassword_box_txt").text("Show");
			 }
			 
			 if($('#sentence1_box').is(':checked'))
			 {
				 $("#sentence1").attr("type","text");
				 $("#sentence1_box_txt").text("Hide");
			 }
			 else
			 {
				 $("#sentence1").attr("type","password");
				 $("#sentence1_box_txt").text("Show");
			 }
			 
			 if($('#sentence2_box').is(':checked'))
			 {
				 $("#sentence2").attr("type","text");
				 $("#sentence2_box_txt").text("Hide");
			 }
			 else
			 {
				 $("#sentence2").attr("type","password");
				 $("#sentence2_box_txt").text("Show");
			 }
			 
			 if($('#EncPassword_box').is(':checked'))
			 {
				 $("#EncPassword").attr("type","text");
				 $("#EncPassword_box_txt").text("Hide");
			 }
			 else
			 {
				 $("#EncPassword").attr("type","password");
				 $("#EncPassword_box_txt").text("Show");
			 }
			 
			 if($('#EncCheckPassword_box').is(':checked'))
			 {
				 $("#EncCheckPassword").attr("type","text");
				 $("#EncCheckPassword_box_txt").text("Hide");
			 }
			 else
			 {
				 $("#EncCheckPassword").attr("type","password");
				 $("#EncCheckPassword_box_txt").text("Show");
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


(function ($) 
{
    $(document).ready(function () 
	{
			xOffset = 10;
			yOffset = 30;

		$("#Password,#CheckPassword,#sentence1,#sentence2").hover(function(e){
			this.t = this.title;
			this.title = "";	
			var c = (this.t != "") ? "<br/>" + this.t : "";
			$("body").append("<p id='imgs'><img src='/img/tip.jpg' alt='url preview' />"+ c +"</p>");								 
			$("#imgs")
				.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px")
				.fadeIn("fast");						
		},
		function(){
			this.title = this.t;	
			$("#imgs").remove();
		});	
		$("#Password,#CheckPassword,#sentence1,#sentence2").mousemove(function(e){
			$("#imgs")
				.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px");
		});			
	});
})(jQuery);