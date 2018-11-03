$("#btnBoldText").click(function(){
    $("#idText").css("fontWeight","bold");
});
 $("#btnItalicText").click(function(){
     $("#idText").css("fontStyle","italic");
    });
 $("#btnUnderlinedText").click(function(){
     $("#idText").css("textDecoration","underline");
    });
 $("#familleText").change(function(){
     $("#idText").css("fontFamily",$("#familleText :selected").val());
});
 $("#tailleText").change(function(){
     $("#idText").css("fontSize",$("#tailleText :selected").val());
    });