form.addEventListener('submit',function(e){
    e.preventDefault();
})

$(document).ready(function(){
    $("#submit").click(function(){
       
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var phonenumber = $("#phone-number").val();
        var gender = $("#gender").val();
        var exampleFormControlTextarea1 = $("#exampleFormControlTextarea1").val();

        if(firstname.length == ""){
            $("#p1").text("Please fill this area!");
            $("#firstname").focus();
            return false;
        }
        else if(lastname.length == ""){
            $("#p2").text("Please fill this area!");
            $("#lastname").focus();
            return false;
        }
        else if(email.length == ""){
            $("#p3").text("Please fill this area!");
            $("#email").focus();
            return false;
        }
        else if(password.length == ""){
            $("#p4").text("Please fill this area!");
            $("#password").focus();
            return false;
        }
        else if(phonenumber.length == ""){
            $("#p5").text("Please fill this area!");
            $("#phonenumber").focus();
            return false;
        }
        else if(gender.length == ""){
            $("#p6").text("Please fill this area!");
            $("#gender").focus();
            return false;
        }
        else if(exampleFormControlTextarea1.length == ""){
            $("#p7").text("Please fill this area!");
            $("#exampleFormControlTextarea1").focus();
            return false;
        }
        
       
    });
});

$(function() {
    $("#submit").click(function() {
        
        var firstname = $("#firstname").val();
        var lastname = $("#lastname").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var phonenumber = $("#phone-number").val();
        var gender = $("#gender").val();
        var exampleFormControlTextarea1 = $("#exampleFormControlTextarea1").val();
        
        if(firstname != '' && lastname !='' && email !='' && password != '' && phonenumber != '' && gender != '' && exampleFormControlTextarea1 != ''){
            swal({
                icon: "success",
                title: "Successfully Registered!",
                timer: "10000",
              });
        }
        var sonuc1 = firstname.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc1 != -1){
            swal({
                icon :"warning",
                title: "Do not use bad words!",
                timer: "10000",
              });
        }
        var sonuc2 = lastname.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc2 != -1){
            swal({
                icon :"warning",
                title: "Do not use bad words!",
                timer: "10000",
              });
        }
        var sonuc3 = email.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc3 != -1){
            swal({
                icon :"warning",
                title: "Do not use bad words!",
                timer: "10000",
              });
        }
        var sonuc4 = password.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc4 != -1){
            swal({
                icon :"warning",
                title: "Do not use bad words!",
                timer: "10000",
              });
        }
        var sonuc5 = phonenumber.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc5 != -1){
            swal({
                icon :"warning",
                title: "Do not use bad words!",
                timer: "10000",
              });
        }
        var sonuc6 = gender.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc6 != -1){
            swal({
                icon :"warning",
                title: "Do not use bad words!",
                timer: "10000",
              });
        }
        var sonuc7 = exampleFormControlTextarea1.search(/(idiot|stupid|dumb|fool)/ig);
        if(sonuc7 != -1){
            swal({
                title: "Do not use bad words!",
                icon :"warning",
                timer: "10000",
              });
        }

    })
})


