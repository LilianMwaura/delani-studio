
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
$(".images").hover(function () {
  $(this).children(".tag").fadeToggle(1000, "linear");
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
