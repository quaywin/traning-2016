// setTimeout(function() {
// $(".progress-bar").css('width', '70%');
// }, 2000);
// $("#createForm").click(function(){
//     $("#CV").hide();
// });

$(document).ready(function () {
    $(".scrollEf a,.scrollEf").on('click', function (event) {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
        // if (this.hash !== "") {
        //     event.preventDefault();
        //     var hash = this.hash;
        //     $('html, body').animate({
        //         scrollTop: $(hash).offset().top
        //     }, 900, function () {
        //         window.location.hash = hash;
        //     });
        // }
    });
    $("#viewDemo").click(function () {
        $("#cover").hide();
        $("#CV").show();
        $('#home').popover("show");
    });
    $("#home").click(function () {
        $("#CV").hide();
        $("#cover").show();
    });
    $('#birthdayForm').datepicker({
        autoclose: true,
        startView: 2,
        format: 'dd/mm/yyyy'
    });

    $('#profilePicForm').change(function () {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profilePic').attr('src', e.target.result);
        }
        reader.readAsDataURL(this.files[0]);

    });
    $(document).on('click', '.btn-add', function (e) {
        e.preventDefault();

        var controlForm = $(this).parents('.controls form:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
        controlForm.find('.spinner:last input').val(10);
    }).on('click', '.btn-remove', function (e) {
        $(this).parents('.entry:first').remove();

        e.preventDefault();
        return false;
    });

    $(document).on('click', '.add', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
            input.val(parseInt(input.val(), 10) + 10);
        } else {
            btn.next("disabled", true);
        }
    }).on('click', '.sub', function () {
        var btn = $(this);
        var input = btn.closest('.spinner').find('input');
        if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
            input.val(parseInt(input.val(), 10) - 10);
        } else {
            btn.prev("disabled", true);
        }
    });
    $(window).scroll(function () {
        $('#home').popover("hide");
        $(".objects").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            $(".progress-bar").css('width', '0%');
            if (pos < winTop + 700) {
                $.each($('#skills .progress-bar'), function () {

                    $(this).css('width', $(this).attr('aria-valuenow') + "%");
                    setTimeout(function () {
                        // $(this).css('width', $(this).attr('aria-valuenow')+"%" );
                        // $(this).css('width', '0%' );
                    }, 2000);
                });

            }
        });
        $(".Exp").each(function () {
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            $(this).removeClass("slide");
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    $('footer').hover(function () {
        $(this).find('.glyphicon').css('color', 'lightsalmon');
    }, function () {
        $(this).find('.glyphicon').css('color', 'coral');
    });
    $("#create").click(function () {
        if (checkForm()) {
            $("#cover").hide();
            $("#CV").show();
            $("#myModal").modal('hide');

            $('#home').attr('data-content','Click Home To Edit Your Résumé');
            $('#home').attr('data-toggle','modal');
            $('#home').attr('data-target','#myModal');
            $('#home').popover("show");

            $(".name").html($("#nameForm").val());
            $(".job").html($("#jobForm").val());
            if (!$('#profilePicForm').val())
                $('#profilePic').attr('src', 'img/zllhx5yg0mc-william-stitt1.jpg');
            $("#birthday").html($("#birthdayForm").val());
            $("#callNum").html($("#callNumForm").val());
            $("#location").html($("#locationForm").val());
            $("#email").html($("#emailForm").val());
            $("#introduce").html($("#introduceForm").val());
            $('#skills').html("");
            $('.carousel-indicators').html("");
            $('.carousel-inner').html("");
            $.each($('#skillsForm .controls .entry'), function () {
                var skill = $(this).find('input:first').val().toUpperCase(),
                    skillPer = $(this).find('input:last').val();
                $('#skills').append("<div class='objects'><p class='col-sm-3 text-center'></p><div class='progress text-center'><div class=' progress-bar progress-bar-danger' role='progressbar'  aria-valuemin='0' aria-valuemax='100' ></div></div></div>");
                $('#skills').find('.objects:last p').html(skill);
                $('#skills').find('.objects:last .progress-bar').attr('aria-valuenow', skillPer).css('width', skillPer + "%").html(skillPer + "%");
            });
            /*HOBBIES */
            var hobbySel = false;
            $.each($('#hobbiesForm input'), function () {
                if (!$(this).prop('checked')) {
                    $('.' + $(this).val()).attr("style", "display: none");

                } else {
                    $('.' + $(this).val()).css("display", "");
                    hobbySel = true;
                }
            });
            if (!hobbySel)
                $('#hobbies').hide();

            /*education */
            var eduIndi = 0;
            $.each($('#educationForm .controls .entry'), function () {
                var edu = $(this).find('input:first').val(),
                    eduStt = $(this).find('input:last').val();
                if (edu && eduStt) {
                    $('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="' + eduIndi + '" ></li>');
                    $('.carousel-inner').append('<div class="item"><p></p></div>');
                    $('.carousel-inner').find('p:last').html(edu).append('<br><span>' + eduStt + '</span>');
                    if (eduIndi === 0) {
                        $('.carousel-indicators li').addClass('active');
                        $('.carousel-inner .item').addClass('active');
                    }
                    eduIndi++;
                }
            });
            if (eduIndi === 0)
                $('#education').hide();
            /*experience */
            $('#experienceBox').html('<div id="timeline"></div>');
            var expCount = 1;
            $.each($('#experienceForm .controls .entry'), function () {
                $('#experienceBox').append('<div class="Exp"><div class="timePoint"></div><div><h4></h4><span></span><p></p></div></div>');
                var currentExp = $('#experienceBox').find('.Exp:last'),
                    time1 = $(this).find('div:last input:first').val(),
                    time2 = $(this).find('div:last input:last').val(),
                    timeExp;
                if (time1 || time2) {
                    if (time1 && !time2 || !time1 && time2) {
                        timeExp = time1 + time2;
                    } else {
                        timeExp = time1 + '-' + time2;
                    }

                    currentExp.find('h4').html(timeExp);
                    if ($(this).find('input:first').val() || $(this).find('input:nth-child(1)').val()) {
                        currentExp.find('span').html($(this).find('input:first').val());
                        currentExp.find('p').html($(this).find('input:nth-child(1)').val());
                        if (expCount % 2 !== 0) {
                            currentExp.find('div:last').addClass('rightExp');
                        } else {
                            currentExp.find('div:last').addClass('leftExp');
                        }
                        expCount++;
                    }
                }
            });
            if (expCount === 1)
                $('#experience').hide();
        }
    });

});
function checkForm() {
    var rs = true;
    $.each($('.importantForm'), function () {
        var thisInput = $(this).find('input,textarea');
        thisSpan = $(this).find('span:first');
        thisInput.css('border-color', '#ccc');
        thisSpan.css('color', 'black');
        $('.alert-danger').hide();
        if (!thisInput.val()) {
            rs = false;
            thisInput.css('border-color', 'red');
            thisSpan.css('color', 'red');
            $('.alert-danger').show();
        }
    });
    return rs;
}