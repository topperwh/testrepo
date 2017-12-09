function change(id)
   {
      var cname=document.getElementById(id).className;
      var ab=document.getElementById(id+"_hidden").value;
      document.getElementById(cname+"rating").innerHTML=ab;

      for(var i=ab;i>=1;i--)
      {
         document.getElementById(cname+i).src="img/star2.png";
      }
      var id=parseInt(ab)+1;
      for(var j=id;j<=5;j++)
      {
         document.getElementById(cname+j).src="img/star1.png";
      }
   }

    var searchDBString = [
    "02096890",
    "02545922",
    "04245794",
    "04545761",
    "04545721" ];

$("#fname").autocomplete({
      source: searchDBString
});

$("#sortable").sortable({
		update: function(event,ui) {
			var productOrder = $(this).sortable('toArray').toString();
		$('#result').text(productOrder);
    $(".div").removeClass("cardtopbefore");
    $(".div").addClass("cardtopafter");
    $(".star").removeClass("offdetails");
    $(".star").addClass("animated fadeIn"); 

		}
});

$("#loader").click(function() {
      $(".mydiv3").removeClass("offcards");
      $(".mydiv3").addClass("oncards animated fadeIn");    
      $(".jumbotron").addClass("offcards"); 
    $.getJSON('data.json', function(abc){
      $('#datastage').html(abc.name);
      $('#datastage2').html(abc.name2);
      $('#datastage3').html(abc.name3);
    });
  });

$("#submit").click(function() {
      $(".mydiv3").addClass("animated fadeOut offcards");
      $(".Thankyou").removeClass("offcards");
      $(".Thankyou").addClass("animated fadeInUp");
    });


