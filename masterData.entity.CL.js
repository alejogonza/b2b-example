function clientSave()
{
	var dbENT = 'CL';
	var jsonSaveDadosUser = {
		"firstName": $("#firstName").val(),
		"lastName": $("#lastName").val(),
		"email": $("#email").val()
	};

	var urlSaveDadosUser = '/api/dataentities/'+dbENT+'/documents'
	$.ajax({
		headers: {
			'Accept': 'application/vnd.vtex.ds.v10+json',
			'Content-Type': 'application/json',
		},
		data: JSON.stringify(jsonSaveDadosUser),
		type: 'POST',
		url: urlSaveDadosUser,
		success: function (data) {
		  console.log(data);
		  $("div#messageSuccess").removeClass("hide");
		  $("#firstName").val("");
		  $("#lastName").val("");
                  $("#email").val("");
		},
		error: function (data) {
		  console.log(data);
		  $("div#messageError").removeClass("hide");
		}
	});
}

function clientValidate()
{
	$("div#messageSuccess").addClass("hide");
	$("div#messageError").addClass("hide");

	if(($("#firstName").val()=="") || ($("#lastName").val() == "") || ($("#email").val() == ""))
	{
		$("div#messageError").removeClass("hide");
	}else{
		clientSave();
	}
}