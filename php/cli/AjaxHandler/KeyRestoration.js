//(function ($) {
//    $(document).ready(function () {
//        $('#KeyRestoration').on('click', function () {
//			
//		$("#KeyRestoration").hide();
//		$("#KeyCreate").hide();
//			
//            $('#result').html('');		
//				
//				var inputString = prompt('RandomNumber', '');
//	
//				if(isNaN(inputString) == true) {
//					alert("잘못된 입력 error : 1");
//				} 
//				else if(Number(inputString) >= 65536){
//					alert("잘못된 입력 error : 2");
//				}
//				else if(Number(inputString) < 0){
//					alert("잘못된 입력 error : 3");
//				}
//				else if (inputString == null){
//				}					
//				else{
//	
//					var con_test = confirm(
//					'sentence1 : ' + $('#sentence1').val() + '\n' +
//					'sentence2 : ' + $('#sentence2').val() + '\n' +
//					'RandomNumber : ' + inputString + '\n' +
//					'email : ' + $('#email').val() + '\n' +
//					"입력하신 정보로 키를 복구 하시겠습니까?");
//					
//					if(con_test == true){		
//	
//						$.ajax({
//							type: "POST",
//							url: "http://211.42.197.194:13000/",
//							crossDomain: true,
//							dataType: "json",
//							data: {
//								'Kind': '2',
//								'Password': $('#Password').val(),
//								'sentence1': $('#sentence1').val(),
//								'sentence2': $('#sentence2').val(),
//								'color': $('#color').val(),
//								'shape': $('#shape').val(),
//								'algorithm': $('#algorithm').val(),
//								'email': $('#email').val(),
//							'RandomNumber': inputString
//							},
//							success: function (result) {
//								if (result['result'] === true) {
//									$('#result').html(result['msg']);
//								}
//								else if (result['result'] === false) {
//									$('#result').html(result['msg']);
//								}
//									$("#KeyRestoration").show();
//									$("#KeyCreate").show();
//							},
//							complete: function (result) {
//							},
//							error: function (xhr, status, error) {
//							}
//						});
//					}
//				}
//        });
//    });
//})(jQuery);

//(function ($) 
//{
//    $(document).ready(function () 
//	{
//		$("#alert-success").hide();
//		$("#alert-danger").hide();
//		$("#KeyRestoration").attr("disabled", "disabled");
//		$("input").keyup(function()
//		{
//			var pwd1=$("#Password").val(); 
//			var pwd2=$("#CheckPassword").val(); 
//			if(pwd1 != "" || pwd2 != "")
//			{
//				if(pwd1 == pwd2)
//				{
//					$("#alert-success").show();
//					$("#alert-danger").hide();
//					$("#KeyRestoration").removeAttr("disabled");
//					}
//				else
//				{
//					$("#alert-success").hide();
//					$("#alert-danger").show();
//					$("#KeyRestoration").attr("disabled", "disabled");
//				}
//			} 
//		});
//    });
//})(jQuery);


