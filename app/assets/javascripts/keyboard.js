$(document).ready(function(){
	var ar = ""
	$(".keyboard_row .key").click(function(){
	  /*$("#test").hide();*/
	  var $this = $(this)
	  var textinput = $this.html();
	  textinput = textinput.replace(/\s/g,'');
	  if (textinput == "Space"){
		  ar = ar.concat(" ");
	  }
	  else{
		ar = ar.concat(textinput);
		ar = ar.replace(/Accept/g,'');
		ar = ar.replace(/Cancel/g,'');
		ar = ar.replace(/Shift/g,'');
		ar = ar.replace(/->| Tab/g,'');
		ar = ar.replace(/Bksp/g,'');
		ar = ar.replace(/Enter/g,'');
		ar = ar.replace(/\s/g,'');
	  }
	  document.getElementById("carl").value = (ar);
	});
	/*
	$(".key .key-special").click(function(){

	});
	$().click(function(){

	});
	$().click(function(){

	});
	$().click(function(){

	});
	$().click(function(){

	});     CONTINUAR LLENADO*/
  });