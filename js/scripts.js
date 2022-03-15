
$(".visible ").click(function(){
  $(".visible").hide()
  $(".hidden ").toggle()
  $(".hidden").show()
  $()
});
$(".hidden").click(function(){
  $(".hidden").hide()
  $(".visible").toggle()
})
$(".visible1  ").click(function(){
  $(".visible1").hide()
  $(".hidden1").toggle()
  $(".hidden1").show()
  $()
});
$(".hidden1").click(function(){
  $(".hidden1").hide()
  $(".visible1").toggle()
})
$(".visible2 ").click(function(){
  $(".visible2").hide()
  $(".hidden2 ").toggle()
  $(".hidden2").show()
  $()
});
$(".hidden2").click(function(){
  $(".hidden2").hide()
  $(".visible2").toggle()
})

  $(document).ready(function(){
    $("#portfolio1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#portfolio2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#portfolio3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#portfolio4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#portfolio5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
   }); 
  $(document).ready(function(){
    $("#portfolio6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });
  $(document).ready(function(){
    $("#portfolio7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
  });
  $(document).ready(function(){
    $("#portfolio8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  $(document).ready(function(){
    $("form#form34A").submit(function(event){
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
    });    
  });
