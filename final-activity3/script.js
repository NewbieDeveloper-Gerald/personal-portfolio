$(document).ready(function(){

    //STUDENT INFORMATION
    $("#btnshow").click(function(){
        $(".card1").show("slow")
        $(".card1-output").text("You SHOW the STUDENT INFORMATION")
    })

    $("#btnhide").click(function(){
        $(".card1").hide("slow")
        $(".card1-output").text("You HIDE the STUDENT INFORMATION")
    })

     $("#btnchange").dblclick(function(){
        $(".card1-output").text("You CHANGE My Student Profile")
        $("#title").text("WELCOME TO MY PERSONAL WORK")
        $(this).css("background", "lightblue")
    })

    $("#btnchange").click(function(){
        $(this).css("background", "lightblue")
        $(".card1-output").text("You Click the Change Title Button")
    })

    $("#btnchange").mouseup(function(){
        $(this).css("background", "lightblue")
    })

    $("#btnchange").mousedown(function(){
        $(this).css("background", "lightgreen")
    })
 

    //STUDENT INFORMATION

    //STUDENT LIST
    $("#btnshow1").click(function(){
        $("#table").show(2000)
    })

    $("#btnhide1").click(function(){
        $("#table").hide(2000)
    })

    $("#btneven").click(function(){
        $("tr:even").css("background", "lightblue")
        $("tr:odd").css("background", "burlywood")
    })

    $("#btnodd").click(function(){
        $("tr:odd").css("background", "lightgreen")
         $("tr:even").css("background", "burlywood")
    })
    //STUDENT LIST

    

    //STUDENT COURSE
    $("#course").change(function(){
        $("#output-course").text($(this).val())
        $("#course1").text($(this).val())
    })

    //STUDENT COURSE
  
  
})

