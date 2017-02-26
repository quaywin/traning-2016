$(document).ready(function(){
    $('#createCV').click(function(){
        var fullname = $.trim($("#form_fullname").val());
        var gender = $.trim($("input[name='gender']:checked").val());
        var birthday = $.trim($("#form_birthday").val());
        var address = $.trim($("#form_address").val());
        var email = $.trim($("#form_email").val());
        var phone = $.trim($("#form_phone").val());
        var objective = $.trim($("#form_objective").val());
        
        // START VALIDATE
        //Biến đánh dấu, tất cả điều kiện đúng thì mới đc Create CV
        var flag = true;

        if(fullname == "" || fullname == null){
            flag = false;
            $('#errorfullname').text("Full name can't be blank");
            // document.getElementById("errorfullname").innerHTML = "Full name can't be blank";
        } 
        else{
            document.getElementById("errorfullname").innerHTML = "";
        } 

        //birthday
        if(birthday == "" || birthday == null){
            flag = false;
            $('#errorbirthday').text("Please select date of birth");
        }
        else{
            $('#errorbirthday').text("");
        }
        //Email
        // Email hợp lệ: 
        // Có ít nhất 5 kí tự, 
        // Không chứa dấu cách
        // Không bắt đầu bằng kí tự '@'
        // Sau kí tự '@' là kí tự '.'
        // Sau kí tự '.' cuối cùng phải là kí tự khác nữa
        // Kí tự '.' cuối cùng phải đứng trước @, giữa 2 kí tự này phải có kí tự khác
        var atposition = email.indexOf("@");  
        var dotposition = email.lastIndexOf(".");
        var spaceposition = email.indexOf(" ");
        if(email == null || email == ""){
            document.getElementById("erroremail").innerHTML = "Please enter the email address";
            flag = false;
        }
        else if(email.length < 5 || atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length || spaceposition != -1){  
            flag = false;
            document.getElementById("erroremail").innerHTML = "Please enter a valid e-mail address";
        }  
        else{
            document.getElementById("erroremail").innerHTML = "";
        }
        //Phone
        //Không được để trống
        //>= 10 kí tự
        //Chỉ có các kí tự số
        if(phone == null || phone == ""){
            flag = false;
            document.getElementById("errorphone").innerHTML = "Please enter the phone number";
        }
        else if(isNaN(phone)){
            flag = false;
            document.getElementById("errorphone").innerHTML = "Invalid phone number";
        }
        else if(phone.length < 10){
            flag = false;
            document.getElementById("errorphone").innerHTML = "Phone number should be minimum 10 digits";
            alert(phone.length);
        }
        else{
            document.getElementById("errorphone").innerHTML = "";
        }

        //Address
        if(address == null || address == ""){
            flag = false;
            $('#erroraddress').text("Address can't be blank");
        }
        else if(object.length < 20){
            flag = false;
            $('#erroraddress').text("Address should be minimum 20 digits");
        }
        else{
            $('#erroraddress').text("");
        }
        
        //Objective
        if(objective == null || objective == ""){
            flag = false;
            $('#errorobjective').text("Objective can't be blank");
        }
        else if(objective.length < 20){
            flag = false;
            $('#errorobjective').text("Objective should be minimum 20 digits");
        }
        else{
            $('#errorobjective').text("");
        }
        // END VALIDATE
        
        // Kiểm tra Đk đúng hết => hiển thị dữ liệu từ form
        // if(flag == true){
            $("#fullname").html($("#form_fullname").val());
            $("#gender").html(gender);
            $("#birthday").html(birthday);
            $("#address").html(address);
            $("#email").html(email);
            $("#phone").html(phone);
        // }

        return false;
    });
    
});



// $(document).ready(function(){
//     $("#fullname").html($("#fullname").val());
// });

// $(document).ready(function() {
//     $('#myform').formValidation({
//         framework: 'bootstrap',
//         icon: {
//             valid: 'glyphicon glyphicon-ok',
//             invalid: 'glyphicon glyphicon-remove',
//             validating: 'glyphicon glyphicon-refresh'
//         },
//         fields: {
//             fullname: {
//                 validators: {
//                     notEmpty: {
//                         message: 'The username is required'
//                     },
//                     stringLength: {
//                         min: 5,
//                         max: 30,
//                         message: 'The username must be more than 6 and less than 30 characters long'
//                     },
//                     regexp: {
//                         regexp: /^[a-zA-Z0-9_]+$/,
//                         message: 'The username can only consist of alphabetical, number and underscore'
//                     }
//                 }
//             },
//             phone: {
//                 validators: {
//                     notEmpty: {
//                         message: 'Please supply your phone number'
//                     },
//                     phone: {
//                         country: 'US',
//                         message: 'Please supply a vaild phone number with area code'
//                     }
//                 }
//             },
//             address: {
//                 validators: {
//                      stringLength: {
//                         min: 8,
//                     },
//                     notEmpty: {
//                         message: 'Please supply your street address'
//                     }
//                 }
//             }
//         }
//     });
// });