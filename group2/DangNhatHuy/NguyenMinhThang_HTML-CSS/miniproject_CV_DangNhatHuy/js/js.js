  var obj = JSON.parse(localStorage.getItem("obj"));
  console.log(obj);
  window.onload = function() {
      alert(obj.name);
      $('#name').text(obj.name);
      $('#avatar').attr('src', 'images/' + obj.avatar)
      $('#birthday').text(obj.birthday);
      $('#relationship').text(obj.relationship);
      $('#nationality').text(obj.nationality);
      $('#languages').text(obj.languages);
      $('email').text(obj.email);
      $('#phone').text(obj.phone);
      $('#website').text(obj.website);
      $('#facebook').attr('href', obj.facebook);
      var index = obj.facebook.lastIndexOf('/');
      var facebookS = obj.facebook.substring(index + 1);
      $('#facebook').text(facebookS);
      $('#github').attr('href', obj.github);
      var index1 = obj.github.lastIndexOf('/');
      var githubS = obj.github.substring(index1 + 1);
      $('#github').text(githubS);
      $('#twitter').attr('href', obj.twitter);
      var index2 = obj.twitter.lastIndexOf('/');
      var twitterS = obj.twitter.substring(index2 + 1);
      $('#twitter').text(twitterS);

      for (var k = 0 in obj.others) {
          $('<div/>', {
              class: 'row other' + k,
          }).appendTo('.bg-4');
          $('.other' + k).css('margin-left', '0px')
          $('.other' + k).html('<h4 class="col-md-4 col-md-push-1">English</h4><div class="col-md-7 col-md-offset-1 progress" style="width:150px;margin-top:10px;padding-left:0px;"><div class="progress-bar progress-bar-striped active" role="progressbar"aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%">40%</div>')
          $('.other' + k + ' ' + 'h4').text(obj.others[k].otherName);
          $('.other' + k + ' ' + '.progress-bar').css('width', obj.others[k].otherPercent + '%');
          $('.other' + k + ' ' + '.progress-bar').text(obj.others[k].otherPercent + '%');
      }
      for (var j = 0 in obj.hobbie) {
          $('<img />', {
                  id: 'image' + j,
                  src: 'images/' + obj.hobbie[j].imageHo,
                  width: 100,
                  height: 100
              })
              .appendTo($('#hobbies'));
      }
      for (var h = 0 in obj.timelines) {
          $('<li />', {
              id: 'timeline' + h,
              class: 'timeline-item'
          }).appendTo('.timelines>.row>.col-md-12>ul');
          $('#timeline' + h).html('<div class="timeline-badge"><i class=""></i></div><div class="timeline-panel"><div class="timeline-heading"><h4 class="timeline-title"></h4><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i></small></p></div><div class="timeline-body"><p></p></div></div>')
          $('#timeline' + h + ' ' + '.timeline-title').text(obj.timelines[h].timetitle);
          $('#timeline' + h + ' ' + 'small').text(obj.timelines[h].timetimes + ' to ' + obj.timelines[h].timetimee);
          $('#timeline' + h + ' ' + '.timeline-body').text(obj.timelines[h].timebody);
          if (h % 2 == 0) {
              $('#timeline' + h + ' .timeline-badge i').addClass('fa fa-hand-o-left')
          } else {
              $('#timeline' + h + ' .timeline-badge i').addClass('fa fa-hand-o-right')
          }

      }
      for (var i = 0 in obj.skill) {
          $('<div/>', {
              class: 'demo' + i,
          }).appendTo('.rightside>.row>.skilllist');
          $(".demo" + i).addClass("huy");
          $(".demo" + i).addClass("col-xs-12 col-sm-3 col-md-3 col-lg-2");
          $(".demo" + i > "img").attr("title", "huy");
          var myProgress = $(".demo" + i).imgProgress({
              img_url: 'images/' + obj.skill[i].image,
              size: 250,
              backgroundColor: '#222222',
              foregroundColor: '#63e3ff',
              percent: obj.skill[i].percent
          });
          $(".demo" + i).imgProgressTo(obj.skill[i].percent);
      };

  }
