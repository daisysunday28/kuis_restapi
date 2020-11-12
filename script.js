$(document).ready(function () {
  $('#neonthis').novacancy({
    'reblinkProbability': 0.4,
    'blinkMin': 0.2,
    'blinkMax': 0.6,
    'loopMin': 1,
    'loopMax': 2,
    'color': 'red',
    'glow': ['0 0 80px red', '0 0 30px red', '0 0 6px red'],
    'off': 2,
    'blink': 0,
    'autoOn': true
  });
});

// Session yang akan datang
function LaterSeason() {
  $('#content').html(`
		<h2>Later Season</h5>
		<hr>
		`);
  $.ajax({
    url: 'https://api.jikan.moe/v3/season/later',
    type: 'get',
    dataType: 'json',
    success: function (result) {
      let anime = result.anime;
      console.log(anime);

      $.each(anime, function (i, data) {
        $('#content').append(`		

						<div class="card mb-2 w-80">
				          <div class="row no-gutters">
				            <div class="text-center">
				              <img src="`+ data.image_url + `" class="card-img">
				            </div>
				            <div class="col-md-9">
				              <div class="card-body mb-4 mr-2" style="max-height: 167px; >
				                	<h5 class="card-title">`+ data.title + `</h5>
					                <h6 class="card-subtitle mb-1 text-muted">Type &nbsp;&nbsp;&nbsp;&nbsp;: `+ data.type + `</h6>
					                <h6 class="card-subtitle mb-3 text-muted">Source : `+ data.source + `</h6>
					                <h6 class="card-text">`+ data.synopsis + `</p>
				              </div>
				            </div>
				          </div>
				        </div>	  
				                
						`);
      });
    }
  });
}

//Jadwal Anime
function ScheduleAnime(subtype) {
  $('#content').html(`
		<h2>`+ subtype + `</h2>
		<hr>
		`);
  $.ajax({
    url: 'https://api.jikan.moe/v3/schedule/' + subtype,
    type: 'get',
    dataType: 'json',
    success: function (result) {
      let anime;
      if (subtype === "sunday") {
        anime = result.sunday;
      } else if (subtype === "monday") {
        anime = result.monday;
      } else if (subtype === "tuesday") {
        anime = result.tuesday;
      } else if (subtype === "wednesday") {
        anime = result.wednesday;
      } else if (subtype === "thursday") {
        anime = result.thursday;
      } else if (subtype === "friday") {
        anime = result.friday;
      } else if (subtype === "saturday") {
        anime = result.saturday;
      }
      console.log(anime);

      $.each(anime, function (i, data) {
        $('#content').append(`				 
		              	
		              	<div class="card mb-3 w-80 h-60" style="max-height: 400px;">
				          <div class="row no-gutters">
				            <div class="col-md-3 mb-3 mt-3 text-center">
				              <img src="`+ data.image_url + `" class=" alt="...">
				            </div>
				            <div class="col-md-9">
				              <div class="card-body mb-4" style="max-height: 380px; >
				                <h5 class="card-title">`+ data.title + `</h5>
				                <h6 class="card-subtitle mb-2 text-muted">Type &nbsp;&nbsp;: `+ data.type + `</h6>
				                <h6 class="card-subtitle mb-2 text-muted">Score : `+ data.score + `</h6>
				                <p class="card-text">`+ data.synopsis + `</p>
				                <p class="card-text"><small class="text-muted">`+ data.members + ` Member</small></p>
				              </div>
				            </div>
				          </div>
				        </div>	        
						`);
      });
    }
  });
}


// DROPDOWN
$('.dropdown-item').on('click', function () {
  let kategori = $(this).html();

  if (kategori == "Sunday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'sunday';
    ScheduleAnime(subtype);
  }

  if (kategori == "Monday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'monday';
    ScheduleAnime(subtype);
  }

  if (kategori == "Tuesday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'tuesday';
    ScheduleAnime(subtype);
  }

  if (kategori == "Wednesday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'wednesday';
    ScheduleAnime(subtype);
  }

  if (kategori == "Thursday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'thursday';
    ScheduleAnime(subtype);
  }

  if (kategori == "Friday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'friday';
    ScheduleAnime(subtype);
  }

  if (kategori == "Saturday") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');

    subtype = 'saturday';
    ScheduleAnime(subtype);
  }
})

// fungsi warna pada link nav
$('.nav-link').on('click', function () {
  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  let kategori = $(this).html();

  if (kategori == "Home") {
    home();
  }

  if (kategori == "Later Season") {
    $('#content').html('');
    $('.hero').removeClass('hero');
    $('.neon-text').html('');
    LaterSeason();
  }
});