$(document).ready(function(){

    var eduItemList = [0];
    var eduItemCount = 1;

    var hobItemList = [0];
    var hobItemCount = 1;

    var skiItemList = [0];
    var skiItemCount = 1;

    var getImagePath = "";

    $('#avt-file').change( function(event) {
        getImagePath = URL.createObjectURL(event.target.files[0]);
    });

    $("#ski-item-list").on("click", ".rm-btn", function(){
        var index = $(this).attr('name');
        if (skiItemList.length==1){
            alert("Must have at list 1 item");
            return;
        }
        $("#ski-item-"+index).remove();
        for (var i = 0; i < skiItemList.length; i++){
            if (skiItemList[i].toString() == index){
                skiItemList.splice(i, 1);
                break;
            }
        }        
    });

    $("#ski-add-btn").click(function(){
        skiItemList.push(skiItemCount);
        console.log(skiItemList);
        var s = '<div class="ski-item" id="ski-item-' + skiItemCount + '"> \
                    <div class="row"> \
                        <div class="col-xs-6"> \
                            <input id="ski-' + skiItemCount + '" name="ski-' + skiItemCount + '" class="form-control" type="text" placeholder="Your skill..."> \
                        </div> \
                        <div class="col-xs-4"> \
                            <input id="ski-per-' + skiItemCount + '" name="ski-per-' + skiItemCount + '" class="form-control" type="number" min="1" max="100" placeholder="%"> \
                        </div> \
                        <div class="col-xs-2"> \
                            <button type="button" id="ski-item-rm-btn-' + skiItemCount + '" name="' + skiItemCount + '" class="ski-item-rm-btn rm-btn btn btn-primary btn-sm btn-block">Remove</button> \
                        </div> \
                    </div> \
                </div>';
        $("#ski-item-list").append(s);
        $("#ski-" + skiItemCount).rules("add", {
            required: true
        });
        $("#ski-per-" + skiItemCount).rules("add", {
            required: true
        });
        skiItemCount++;
    });

    $("#hob-item-list").on("click", ".rm-btn", function(){
        var index = $(this).attr('name');
        if (hobItemList.length==1){
            alert("Must have at list 1 item");
            return;
        }
        $("#hob-item-"+index).remove();
        for (var i = 0; i < hobItemList.length; i++){
            if (hobItemList[i].toString() == index){
                hobItemList.splice(i, 1);
                break;
            }
        }        
    });

    $("#hob-add-btn").click(function(){
        hobItemList.push(hobItemCount);
        console.log(hobItemList);
        var s = '<div class="hob-item" id="hob-item-' + hobItemCount + '"> \
                    <div class="row"> \
                        <div class="col-xs-12"> \
                            <textarea id="hobby-' + hobItemCount + '" name="hobby-' + hobItemCount + '" class="form-control" rows="6" placeholder="Describe your hobby here..."></textarea> \
                        </div> \
                    </div> \
                    <div class="row"> \
                        <div class="col-xs-2 col-xs-offset-10"> \
                            <button type="button" id="hob-item-rm-btn-' + hobItemCount + '" name="' + hobItemCount + '" class="hob-item-rm-btn rm-btn btn btn-primary btn-sm btn-block">Remove</button> \
                        </div> \
                    </div> \
                </div>';
        $("#hob-item-list").append(s);
        $("#hobby-" + hobItemCount).rules("add", {
            required: true,
            minlength: 10
        });
        hobItemCount++;
    });

    $("#edu-item-list").on("click", ".rm-btn", function(){
        var index = $(this).attr('name');
        if (eduItemList.length==1){
            alert("Must have at list 1 item");
            return;
        }
        $("#edu-item-"+index).remove();
        for (var i = 0; i < eduItemList.length; i++){
            if (eduItemList[i].toString() == index){
                eduItemList.splice(i, 1);
                break;
            }
        }
    });

    $("#edu-add-btn").click(function(){
        eduItemList.push(eduItemCount);
        console.log(eduItemList);
        var s = '<div class="edu-item" id="edu-item-'+ eduItemCount +'"> \
                    <div class="row"> \
                        <div class="col-xs-3"> \
                            <h3>School</h3> \
                        </div> \
                        <div class="col-xs-9"> \
                            <input id="school-' + eduItemCount + '" name="school-' + eduItemCount + '" class="form-control" type="text"> \
                        </div> \
                    </div> \
                    <div class="row"> \
                        <div class="col-xs-3"> \
                            <h3>From</h3> \
                        </div> \
                        <div class="col-xs-3"> \
                            <input id="from-' + eduItemCount + '" name="from-' + eduItemCount + '" class="form-control" type="date"> \
                        </div> \
                        <div class="col-xs-3"> \
                            <h3>To</h3> \
                        </div> \
                        <div class="col-xs-3"> \
                            <input id="to-' + eduItemCount + '" name="to-' + eduItemCount + '" class="form-control" type="date"> \
                        </div> \
                    </div> \
                    <div class="row"> \
                        <div class="col-xs-3"> \
                            <h3>More description</h3> \
                        </div> \
                        <div class="col-xs-9"> \
                            <textarea id="des-' + eduItemCount + '" name="des-' + eduItemCount + '" class="form-control" rows="6"></textarea> \
                        </div> \
                    </div> \
                    <div class="row"> \
                        <div class="col-xs-2 col-xs-offset-10"> \
                            <button type="button" id="edu-item-rm-btn-' + eduItemCount + '" name="' + eduItemCount + '" class="rm-btn btn btn-primary btn-sm btn-block">Remove</button> \
                        </div> \
                    </div> \
                </div>';
        $("#edu-item-list").append(s);
        $("#school-" + eduItemCount).rules("add", {
            required: true
        });
        $("#des-" + eduItemCount).rules("add", {
            minlength: 5
        });
        eduItemCount++;
    });

    $("#form").validate({
        errorClass: "my-error-class",
        rules: {
            yourname: {
                required: true,
                minlength: 2
            },
            yourmajor: {
                required: true
            },
            phonenumber: {
                required: true
            },
            emailaddress: {
                required: true,
                email: true
            },
            aboutme: {
                required: true,
                minlength: 20
            },
            birth: {
                required: true,
                date: true
            },

            street: {
                required: true
            },
            ward: {
                required: true
            },
            district: {
                required: true
            },
            country: {
                required: true
            },
            "school-0": {
                required: true
            },
            "des-0": {
                minlength: 5
            },
            "hobby-0": {
                required: true,
                minlength: 10
            },
            "ski-0": {
                required: true
            },
            "ski-per-0": {
                required: true
            }
        },
        messages: {
            yourname: {
                required: "*Please enter your full name",
                minlength: "*At least 2 letters"
            },
            yourmajor: {
                required: "*Please enter your major"
            },
            phonenumber: {
                required: "*Please enter your phone number"
            },
            emailaddress: {
                required: "*Please enter your email address"
            },
            aboutme: {
                required: "*Please introduce yourself",
                minlength: "*At least 20 letters"
            },
            birth: {
                required: "*Please choose your date of birth"
            }
        },
        submitHandler: function(){
            $("#fullname-sidebar").html($("#yourname").val());
            $("#fullname-personal-info").html($("#yourname").val());
            $("#job-sidebar").html("I'm A " + $("#yourmajor").val());
            $("#job-personal-info").html($("#yourmajor").val());
            $("#phone").html(
                "<p><span class=\"glyphicon glyphicon-phone\"></span> " +
                $("#phonenumber").val() +
                "</p>"
            );
            $("#email").html(
                "<p><span class=\"glyphicon glyphicon-envelope\"></span> " +
                $("#emailaddress").val() +
                "</p>"
            );
            $("#aboutme-text").html($("#aboutme").val());
            var date = new Date($("#birth").val()), locale = "en-us", month = date.toLocaleString(locale, { month: "long" });
            var s = month + " " + date.getDate() + ", " + date.getFullYear();
            $("#dateofbirth").html(s);
            s = $("#street").val() + ", Ward " + $("#ward").val() + ", District " + $("#district").val() + ", " + $("#country").val();
            $("#address").html(s);
            
            $("#edu-info-list").html("");
            for (var i = 0; i < eduItemList.length; i++){
                s = '<li><div class="edu-item"><h3>' + $("#school-"+eduItemList[i]).val() +'</h3>';
                if ($("#from-"+eduItemList[i]).val() != "" && $("#to-"+eduItemList[i]).val() != "")
                    s += '<h4>' + new Date($("#from-"+eduItemList[i]).val()).getFullYear() + " - " + new Date($("#to-"+eduItemList[i]).val()).getFullYear() + "</h4>";
                if ($("#des-"+eduItemList[i]).val() != "")
                    s+= "<p>" + $("#des-"+eduItemList[i]).val() + "</p>"
                s += '</div>';
                $("#edu-info-list").append(s);
                var h = 170 + parseInt($("#edu-info-list").css("height"));
                console.log(h);
                $('#education').css("cssText", "height: " + h + "px !important;")
            }

            $("#hob-info-list").html("");
            for (var i = 0; i < hobItemList.length; i++){
                s = '<p><span class="glyphicon glyphicon-star"></span>';
                s += $("#hobby-"+hobItemList[i]).val();
                s += '</p>';
                $("#hob-info-list").append(s);
                var h = 170 + parseInt($("#hob-info-list").css("height"));
                console.log(h);
                $('#hobby').css("cssText", "height: " + h + "px !important;")
            }

            $("#skills-list").html("");
            for (var i = 0; i < skiItemList.length; i++){
                s = '<li><h4>' + $("#ski-"+skiItemList[i]).val();
                s += '</h4><div class="progress"><div class="progress-bar" role="progressbar" style="width:';
                s += $("#ski-per-"+skiItemList[i]).val() + '%"></div></div></li>';
                $("#skills-list").append(s);
            }
            
            // var getImagePath = URL.createObjectURL($('#avt-file').files[0]);

            $('.avatar').css("cssText", "background: url(" + getImagePath + ") no-repeat;"
                + "background-size: cover;"
            );

            $("#myModal").modal("toggle");
        }
    });
});