function process() {
    var name = $('#name').val();
    var avatar = $('#avatar')[0].files[0].name;
    var relationship = $('#relationship').val();
    var nationality = $('#nationality').val();
    var languages = $('#languages').val();
    var birthday = $('#birthday').val();
    var phone = $('#phone').val();
    var website = $('#website').val();
    var facebook = $('#facebook').val();
    var github = $('#github').val();
    var twitter = $('#twitter').val();
    var a = [];
    for (j = 1; j <= count2; j++) {
        var nameS = $('#skill' + j + ' ' + '#nameS').val();
        var percent = $('#skill' + j + ' ' + '#percent').val();
        // var image=$('#skill'+j+' '+'#hinhanh').val();
        var image = $('#skill' + j + ' ' + '#hinhanh')[0].files[0].name;
        // var clean=image.split('\\').pop(); // clean from C:\fakepath OR C:\fake_path
        var tmp = {
            nameS: nameS,
            image: image,
            percent: percent
        };
        a.push(tmp);
    }
    var b = [];
    for (var i = 1; i <= count; i++) {
        var imageHobbies = $('#hobbies' + i + ' ' + '#hobbies')[0].files[0].name;
        var hobbie = {
            imageHo: imageHobbies
        };
        b.push(hobbie);
    }
    var c = [];
    for (var k = 1; k <= count3; k++) {
        var otherName = $('#other' + k + ' ' + '#nameO').val();
        var otherPercent = $('#other' + k + ' ' + '#percentO').val();
        var other = {
            otherName: otherName,
            otherPercent: otherPercent
        };
        c.push(other);
    }
    var d = [];
    for (var h = 1; h <= count4; h++) {
        var timetitle = $('#timeline' + h + ' ' + '#time-title').val();
        var timetimes = $('#timeline' + h + ' ' + '#time-start').val();
        var timetimee = $('#timeline' + h + ' ' + '#time-end').val();
        var timebody = $('#timeline' + h + ' ' + 'textarea').val();
        var timeline = {
            timetitle: timetitle,
            timetimes: timetimes,
            timetimee: timetimee,
            timebody: timebody
        }
        d.push(timeline);
    }
    alert(name + birthday);
    var obj = {
        name: name,
        avatar: avatar,
        relationship: relationship,
        nationality: nationality,
        languages: languages,
        birthday: birthday,
        phone: phone,
        website: website,
        facebook: facebook,
        github: github,
        twitter: twitter,
        skill: a,
        hobbie: b,
        others: c,
        timelines: d
    };
    localStorage.setItem("obj", JSON.stringify(obj));
}
var count = 1,
    count2 = 1,
    count3 = 1,
    count4 = 1;
$(function() {
    $('.logout').click(function() {
        $("#signupForm").trigger('reset');
    })
    $('#add-others').click(function() {
        count3++;
        $('<div/>', {
            class: 'form-group',
            id: 'other' + count3
        }).appendTo('.list-other');
        $('#other' + count3).html('<label class="col-sm-4 control-label" for="nameO">Name</label><div class="col-sm-5"><input type="text" class="form-control" id="nameO" name="nameO"/></div><label class="col-sm-4 control-label" for="percentO">Percent</label><div class="col-sm-5"><input type="text" class="form-control" id="percentO" name="percentO"/></div>');
    });
    $('#add-timeline').click(function() {
        count4++;
        $('<li/>', {
            class: 'form-group',
            id: 'timeline' + count4
        }).appendTo('.timeline');
        $('#timeline' + count4).html('<label class="col-sm-4 control-label" for="time-title">Title</label><div class="col-sm-5"><input type="text" class="form-control" id="time-title" name="time-title"/></div><label class="col-sm-4 control-label" for="time-time">Time</label><div class="col-sm-5"><input type="date" class="form-control" id="time-start" name="times"/><input type="date" class="form-control" id="time-end" name="timee"/></div><label class="col-sm-4 control-label" for="time-body">Content</label><div class="col-sm-5"><textarea class="form-control" id="time-body" row="4" col="50" name="time-body"></textarea></div>')
    });
    $('#add-hobbies').click(function() {
        count++;
        $('<div/>', {
            class: 'form-group',
            id: 'hobbies' + count
        }).appendTo('.list-hobbies');
        $('#hobbies' + count).html('<label class="col-sm-4 control-label" for="nameS">Chose your hobbie</label><div class="col-sm-5"><input type="file" id="hobbies" name="pic" accept="image/*" style="margin:8px"></div>');
    });
    $('#add').click(function() {
        count2++;
        $('<div/>', {
            class: 'form-group skill' + count2,
            id: 'skill' + count2
        }).appendTo('.skills');
        $(".skill" + count2).html('<label class="col-sm-4 control-label" for="nameS">Name</label><div class="col-sm-5"><input type="text" class="form-control" id="nameS" name="nameS"/><input type="file" name="pic" accept="image/*" id="hinhanh" style="margin:10px"></div><label class="col-sm-4 control-label" for="percent">Percent</label><div class="col-sm-5"><input type="text" class="form-control" id="percent" name="percent"/></div>')
    })
});
