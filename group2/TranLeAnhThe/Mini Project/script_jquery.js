function removeElementFromArray(arr, value) {
    var item;
    console.log(arr);
    console.log(value);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('#img-url').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    $("#img-file").change(function() {
        readURL(this);
        $(this).hide();
    });

    $("#img-url").click(function() {
        $("#img-file").show();
    })
    var counted = 1;
    var arr_edu = ["0"];
    var check_form_education = false;
    $("#form-education0").validate({
        rules: {
            "school": {
                required: true
            },
            "location": {
                required: true
            },
            "major": {
                required: true
            },
            "degree": {
                required: true
            },
            "datefrom": {
                required: true
            },
            "dateto": {
                required: true
            }
        },
        submitHandler: function() {
            check_form_education = true;
        }
    });

    var check_form_experience = false;
    $("#form-experience0").validate({
        rules: {
            "company": {
                required: true
            },
            "company-website": {
                required: true
            },
            "job-title": {
                required: true
            },
            "location": {
                required: true
            },
            "datefrom": {
                required: true
            },
            "dateto": {
                required: true
            }
        },
        submitHandler: function() {
            check_form_experience = true;
        }
    });

    var check_form_about_me = false;
    $("#form-about-me").validate({
        rules: {
            "description-aboutme": {
                required: true
            }
        },
        submitHandler: function() {
            check_form_about_me = true;
        }
    });
    var check_form_skill = false;
    $("#form-skill0").validate({
        rules: {
            "skill-name": {
                required: true
            },
            "skills": {
                required: true
            }
        },
        submitHandler: function() {
            check_form_skill = true;
        }
    });
    $('#content-education').on('click', '.btn-add', function() {
        var newEdu = $(document.createElement('div')).attr("id", 'edu' + counted);
        newEdu.html(
            '<hr>' +
            '<form class="form-education" id="form-education' + counted + '">' +
            '<div class="form-inline">' +
            '<div class="form-group">' +
            '<input class="input form-control school" type="text" name="school" id="school' + counted + '" size="31" placeholder="School">' +
            '</div>' +
            '<div class="form-group">' +
            '<input class="input form-control location" type="text" name="location" id="locaion-ed' + counted + '" size="31" placeholder="Location">' +
            '</div>' +
            '<div class="form-group">' +
            '<input class="input form-control major" type="text" name="major" id="major' + counted + '" size="31" placeholder="Major">' +
            '</div>' +
            '<div class="form-group">' +
            '<input class="input form-control degree" type="text" name="degree" id="degree' + counted + '" size="31" placeholder="Degree">' +
            '</div>' +
            '</div>' +

            '<br>' +
            '<div class="row">' +
            '<div class="col-md-1">' +
            '<label>From </label>' +
            '</div>' +
            '<div class="col-md-11">' +
            '<input type="text" class="datepicker" id="datefrom-ed' + counted + '" name="datefrom" size="28" placeholder="click to chose date">' +
            '</div>' +
            '<br>' +
            '<div class="col-md-1">' +
            '<label>To </label>' +
            '</div>' +
            '<div class="col-md-11">' +
            '<input type="text" class="datepicker datepicker-ed-to" id="dateto-ed' + counted + '" name="dateto" size="28" value="Present" placeholder="Present">' +
            '</div>' +
            '</div>' +
            '<br>' +
            '<div class="description-education">' +
            '<textarea class="form-control" name="description-education" rows="6" id="des-education' + counted + '" placeholder="More description"></textarea>' +
            '</div>' +
            '</form>' +
            '<button class="btn btn-primary btn-add">Add More</button>' +
            '<button class="btn btn-warning remove-field" id="remove-field' + counted + '">Remove</button>');
        newEdu.appendTo("#content-education");

        var newEduCv = $(document.createElement('div')).attr({ "id": 'edu-cv' + counted, "class": "view-cv-left" });
        newEduCv.html(
            '<hr>' +
            '<h5 class="school-cv need-strong" id="school-cv' + counted + '"> </h5>' +
            '<h5 class="date-from-ed-cv need-strong" id="date-from-ed-cv' + counted + '"></h5>' +
            '<h5 class="date-to-ed-cv need-strong" id="date-to-ed-cv' + counted + '"></h5>' +
            '<h5 class="majoir-cv need-strong" id="major-cv' + counted + '"></h5>' +
            '<h5 class="degree-cv need-strong" id="degree-cv' + counted + '"></h5>' +
            '<h5 class="des-education-cv" id="des-education-cv' + counted + '"></h5>');
        newEduCv.appendTo("#content-cv-education");
        arr_edu.push(counted.toString());
        check_form_education = false;
        $("#form-education" + counted).validate({
            rules: {
                "school": {
                    required: true
                },
                "location": {
                    required: true
                },
                "major": {
                    required: true
                },
                "degree": {
                    required: true
                },
                "datefrom": {
                    required: true
                },
                "dateto": {
                    required: true
                }
            },
            submitHandler: function() {
                check_form_education = true;
            }
        });
        counted++;
    });

    $("#education").on("click", ".remove-field", function() {
        if (arr_edu.length === 1) {
            alert("Must least one");
            return false;
        }
        var remove_button_id = this.id;
        var edu_cv = "#edu-cv" + this.id[this.id.length - 1];
        if (arr_edu[0] === this.id[this.id.length - 1]) {
            var item = "#edu" + arr_edu[1];
            console.log("Gia tri item : " + item);
            $(item).find("hr").remove();
            var item_cv = "#edu-cv" + arr_edu[1];
            $(item_cv).find("hr").remove();
        }

        $(edu_cv).remove();
        $(this).parent('div').remove();
        arr_edu = removeElementFromArray(arr_edu, this.id[this.id.length - 1]);
    });

    var arr_ex = ["0"];

    var countex = 1;
    $("#content-experience").on("click", '.btn-add-ex', function() {

        var newEx = $(document.createElement('div')).attr("id", "ex" + countex);
        newEx.html(
            '<hr>' +
            '<form class="form-experience" id="form-experience' + countex + '">' +
            '<div class="form-inline">' +
            '<div class="form-group">' +
            '<input class="input form-control company" type="text" name="company" id="company' + countex + '" size="31" placeholder="Company">' +
            '</div>' +
            '<div class="form-group">' +
            '<input class="input form-control company-website" type="text" name="company-website" id="company-website' + countex + '" size="31" placeholder="Company website">' +
            '</div>' +
            '<div class="form-group">' +
            '<input class="input form-control job-title" type="text" name="job-title" size="31" id="job-title' + countex + '" placeholder="Job title">' +
            '</div>' +
            '<div class="form-group">' +
            '<input class="input form-control location-ex" type="text" name="location" size="31" id="location-ex' + countex + '" placeholder="Location">' +
            '</div>' +
            '</div>' +
            '<br>' +
            '<div class="row">' +
            '<div class="col-md-1">' +
            '<label>From </label>' +
            '</div>' +
            '<div class="col-md-11">' +
            '<input type="text" class="datepicker datepicker-ex-from" id="datefrom-ex' + countex + '" name="datefrom" size="28" placeholder="click to chose date">' +
            '</div>' +
            '<br>' +
            '<div class="col-md-1">' +
            '<label>To </label>' +
            '</div>' +
            '<div class="col-md-11">' +
            '<input type="text" class="datepicker datepicker-ex-to" id="dateto-ex' + countex + '" name="dateto" size="28" value="Present" placeholder="Present">' +
            '</div>' +
            '</div>' +
            '<br>' +
            '<div class="description-experience">' +
            '<textarea class="form-control description-experience" name="description-experience" id="des-experience' + countex + '" rows="6" placeholder="More description"></textarea>' +
            '</div>' +
            '</form>' +
            '<button class="btn btn-primary btn-add-ex">Add More</button>' +
            '<button class="btn btn-warning remove-field-ex" id="remove-field-ex' + countex + '">Remove</button>');
        newEx.appendTo("#content-experience");
        var newExCv = $(document.createElement('div')).attr({ "id": 'ex-cv' + countex, "class": "view-cv-left" });
        newExCv.html(
            '<hr>' +
            '<h5 class="company-cv need-strong" id="company-cv' + countex + '"> </h5>' +
            '<h5 class="date-from-ex-cv need-strong" id="date-from-ex-cv' + countex + '"></h5>' +
            '<h5 class="date-to-ex-cv need-strong" id="date-to-ex-cv' + countex + '"></h5>' +
            '<h5 class="company-website-cv" id="company-website-cv' + countex + '"></h5>' +
            '<h5 class="job-title-cv" id="job-title-cv' + countex + '"></h5>' +
            '<h5 class="location-ex-cv" id="location-ex-cv' + countex + '"></h5>' +
            '<h5 class="des-experience-cv" id="des-experience-cv' + countex + '"></h5>');
        newExCv.appendTo("#content-cv-experience");
        arr_ex.push(countex.toString());
        $("#form-experience" + countex).validate({
            rules: {
                "company": {
                    required: true
                },
                "company-website": {
                    required: true
                },
                "job-title": {
                    required: true
                },
                "location": {
                    required: true
                },
                "datefrom": {
                    required: true
                },
                "dateto": {
                    required: true
                }
            },
            submitHandler: function() {

            }
        });
        countex++;
    });

    $("#experience").on("click", ".remove-field-ex", function() {
        if (arr_ex.length === 1) {
            alert("Must least one");
            return false;
        }
        var remove_button_id = this.id;
        var ex_cv = "#ex-cv" + this.id[this.id.length - 1];
        if (arr_ex[0] === this.id[this.id.length - 1]) {
            var item = "#ex" + arr_ex[1];
            console.log("Gia tri item : " + item);
            $(item).find("hr").remove();
            var item_cv = "#ex-cv" + arr_ex[1];
            $(item_cv).find("hr").remove();
        }

        $(ex_cv).remove();
        $(this).parent('div').remove();
        arr_ex = removeElementFromArray(arr_ex, this.id[this.id.length - 1]);
    });

    var arr_skill = ["0"];
    var countskill = 1;
    $("#content-skill").on("click", '.btn-add-skill', function() {
        var newSkill = $(document.createElement('div')).attr({ "id": "skill" + countskill, "class": "view-cv-left" });
        newSkill.html(
            '<hr>' +
            '<form class="form-skill" id="form-skill' + countskill + '">' +
            '<div class="row">' +
            '<div class="col-md-6">' +
            '<input class="input form-control skill-name" type="text" name="skill-name" id="skill-name' + countskill + '"  placeholder="Skill Name">' +
            '</div>' +
            '</div>' +
            '<textarea class="form-control skill-des" id="skill-des' + countskill + '" name="skills" rows="10" placeholder="More description"></textarea>' +
            '</form>' +
            '<button class="btn btn-primary btn-add-skill">Add More</button>' +
            '<button class="btn btn-warning remove-field-skill" id="remove-skill' + countskill + '">Remove</button>');
        newSkill.appendTo("#content-skill");
        var newSkillCv = $(document.createElement('div')).attr("id", "skill-cv" + countskill);
        newSkillCv.html(
            '<hr>' +
            '<h5 class="skill-name-cv need-strong" id="skill-name-cv' + countskill + '"></h5>' +
            '<h5 id="skill-des-cv' + countskill + '"></h5>');
        newSkillCv.appendTo("#content-cv-skill");
        arr_skill.push(countskill.toString());
        $("#form-skill" + countskill).validate({
            rules: {
                "skill-name": {
                    required: true
                },
                "skills": {
                    required: true
                }
            },
            submitHandler: function() {
                check_form_skill = true;
            }
        });
        countskill++;
    });

    $("#skills").on("click", ".remove-field-skill", function() {
        if (arr_skill.length === 1) {
            alert("Must least one");
            return false;
        }
        var remove_button_id = this.id;
        var skill_cv = "#skill-cv" + this.id[this.id.length - 1];
        if (arr_skill[0] === this.id[this.id.length - 1]) {
            var item = "#skill" + arr_skill[1];
            console.log("Gia tri item : " + item);
            $(item).find("hr").remove();
            var item_cv = "#skill-cv" + arr_skill[1];
            $(item_cv).find("hr").remove();
        }
        $(skill_cv).remove();
        $(this).parent('div').remove();
        arr_skill = removeElementFromArray(arr_skill, this.id[this.id.length - 1]);
    });

    $('body').on('focus', ".datepicker", function() {
        if ($(this).hasClass('hasDatepicker') === false) {
            $(this).datepicker({
                changeDate: true,
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-MM-yy',
                onClose: function(dateText, inst) {
                    $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
                }
            });
        }
    });

    $("#view-cv").hide();
    $("#form-cv").show();

    // // Present education
    // $("body").on("click", ".btn-ed-present", function() {
    //     var id_button = this.id;
    //     var id_datepicker = "#dateto-ed" + id_button[this.id.length - 1];
    //     $(id_datepicker).val('');
    //     $(this).attr("class", "btn btn-warning btn-ed-present");
    // });

    // $("body").on("click", ".datepicker-ed-to", function() {
    //     var id_datepicker = this.id;
    //     var id_button = "#btn-ed" + this.id[this.id.length - 1];
    //     $(id_button).attr("class", "btn btn-primary btn-ed-present");
    // });

    // // Present experience
    // $("body").on("click", ".btn-ex-present", function() {
    //     var id_button = this.id;
    //     var id_datepicker = "#dateto-ex" + id_button[this.id.length - 1];
    //     $(id_datepicker).val('');
    //     $(this).attr("class", "btn btn-warning btn-ex-present");
    // });

    // $("body").on("click", ".datepicker-ex-to", function() {
    //     var id_datepicker = this.id;
    //     var id_button = "#btn-ex" + this.id[this.id.length - 1];
    //     $(id_button).attr("class", "btn btn-primary btn-ex-present");
    // });

    //


    var check_form_contact = false;
    $("#form-contact-info").validate({
        rules: {
            street: {
                required: true,
            },
            area: {
                required: true
            },
            city: {
                required: true
            },
            zipcode: {
                required: true
            },
            phone: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            street: {
                required: "Please enter street"
            },
            area: {
                required: "Please enter your area",
                minlength: "Your area must be at least 5 characters"
            },
            city: {
                required: "Please enter your city"
            },
            zipcode: {
                required: "Please enter your zipcode"
            },
            phone: {
                required: "Please enter your phone number"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            }
        },
        submitHandler: function() {
            check_form_contact = true;
        }
    });
    if ($('#street').val() === "" || $('#area').val() === "" || $('#city').val() === "" || $('#zipcode').val() === "" || $('#phone').val() === "" || $('#email').val() === "") {
        check_form_contact = false;
    }
    var check_form_objective = false;
    $("#form-objective").validate({
        rules: {
            objective: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            objective: {
                required: "Please enter your objective",
                minlength: "Your objective must be at least 20 characters"
            }
        },
        submitHandler: function() {
            check_form_objective = true;
        }
    });

    var check_form_name = false;
    $("#form-contact-name").validate({
        rules: {
            yourname: {
                required: true
            }
        },
        messages: {
            yourname: {
                required: "Please enter your name"
            }
        },
        submitHandler: function() {
            check_form_name = true;
        }
    });
    $("#create").on("click", function() {
        $("#form-contact-name").submit();
        $("#form-contact-info").submit();
        $("#form-objective").submit();
        $(".form-education").submit();
        $(".form-experience").submit();
        $(".form-skill").submit();
        $("#form-about-me").submit();
        if (check_form_about_me === true && check_form_name === true && check_form_contact === true && check_form_objective === true && check_form_education === true) {
            $("#form-cv").hide(100);
            $("#view-cv").show(100);
        }

        // contact info
        $("#name-cv").text($("#yourname").val());
        $("#street-cv").text($("#street").val());
        $("#area-cv").text($("#area").val());
        $("#city-cv").text($("#city").val());
        $("#zipcode-cv").text($("#zipcode").val());
        $("#phone-cv").text($("#phone").val());
        $("#email-cv").text($("#email").val());
        // objective
        $("#des-objective-cv").text($("#des-objective").val());
        // education
        for (var i = 0; i < arr_edu.length; i++) {
            var index = arr_edu[i];
            $("#school-cv" + index).text($("#school" + index).val());
            $("#major-cv" + index).text($("#major" + index).val());
            $("#degree-cv" + index).text($("#degree" + index).val());
            $("#des-education-cv" + index).text($("#des-education" + index).val());

            $("#date-from-ed-cv" + index).text($("#datefrom-ed" + index).val() + " - ");
            var dateto = "#dateto-ed" + index;
            var value = $(dateto).val();
            if (value === "") {
                $("#date-to-ed-cv" + index).text("Present");
            } else {
                $("#date-to-ed-cv" + index).text($("#dateto-ed" + index).val());
            }
        }

        // experience
        for (var j = 0; j < arr_ex.length; j++) {
            var i = arr_ex[j];
            $("#company-cv" + i).text($("#company" + i).val());
            $("#company-website-cv" + i).text($("#company-website" + i).val());
            $("#job-title-cv" + i).text($("#job-title" + i).val());
            $("#location-ex-cv" + i).text($("#location-ex" + i).val());
            $("#des-experience-cv" + i).text($("#des-experience" + i).val());

            $("#date-from-ex-cv" + i).text($("#datefrom-ex" + i).val() + " - ");
            var dateto = "#dateto-ex" + i;
            var value = $(dateto).val();
            if (value === "") {
                $("#date-to-ex-cv" + i).text("Present");
            } else {
                $("#date-to-ex-cv" + i).text($("#dateto-ex" + i).val());
            }
        }


        // skills
        for (var i = 0; i < countskill; i++) {
            $("#skill-name-cv" + i).text($("#skill-name" + i).val());
            $("#skill-des-cv" + i).text($("#skill-des" + i).val());
        }

        // about me
        $("#about-me-des-cv").text($("#about-me-des").val());
    });

    $("#back").on("click", function() {
        $("#view-cv").hide(100);
        $("#form-cv").show(100);
    });
});