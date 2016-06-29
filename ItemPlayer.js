jQuery(document).ready(function($) {

	function fixFirefox(e) {
		if (typeof e.offsetX === "undefined" || typeof e.offsetY === "undefined") {
			   var targetOffset = $(e.target).offset();
			   e.offsetX = e.pageX - targetOffset.left;
			   e.offsetY = e.pageY - targetOffset.top;
		}
		return e;
	}

	/* Init soundmanager2 */
	soundManager.setup({
		url: itemplayer_params.swf,
		onready: function() {
			$('.itemplayer').each(function() {
				var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
				    return v.toString(16);
				});
				$(this).attr('id', uuid);
				var player = $(this);
				var enclosure = $(this).attr('enclosure');
				soundManager.createSound({
					id: 'audio-' + uuid,
					url: enclosure,
					volume: 50,
					whileplaying: function() {
						var pct = 100.0 * this.position / this.duration;
						$('.itemplayer-progress', player).css('width', pct + '%');
						$('.itemplayer-playhead', player).css('width', pct + '%');
						
						var seconds = parseInt(this.position / 1000);
						var minutes = parseInt(seconds / 60);
						seconds = seconds - 60 * minutes;
						if (minutes < 10) {
							minutes = '0' + minutes;
						}
						if (seconds < 10) {
							seconds = '0' + seconds;
						}
						$('.itemplayer-current', player).text(minutes + ":" + seconds);

						
						seconds = parseInt(this.duration / 1000);
						minutes = parseInt(seconds / 60);
						seconds = seconds - 60 * minutes;
						if (minutes < 10) {
							minutes = '0' + minutes;
						}
						if (seconds < 10) {
							seconds = '0' + seconds;
						}
						$('.itemplayer-total', player).text(minutes + ":" + seconds);
					},
					onfinish: function() {
						$('.itemplayer-pause', player).click();
						this.setPosition(0);
						$('.itemplayer-progress', player).css('width', '0%');
						$('.itemplayer-playhead', player).css('width', '0%');
					}
				});
				$(this).find('div').each(function() {
					$(this).attr('itemplayer-id', uuid);
				});
			});
		}
	});
	
	$('.itemplayer-pause').hide();

	$('.itemplayer-waveform').click(function(e) {
		var id = $(this).attr('itemplayer-id');
		e = fixFirefox(e);
		var x = e.offsetX;
		var w = $(this).width();
		
		var audio = soundManager.getSoundById('audio-' + id, true);
		if ((audio == null) || (audio.playState == 0)){
			// No audio loaded or audio stopped
			return;
		}
		audio.setPosition(audio.duration * x / w);
	});
	
	$('.itemplayer-playhead').click(function(e) {
		e = fixFirefox(e);
		var id = $(this).attr('itemplayer-id');
		var player = $('.itemplayer#' + id);
		var x = e.offsetX;
		var w = $('.itemplayer-waveform', player).width();
		
		var audio = soundManager.getSoundById('audio-' + id, true);
		if ((audio == null) || (audio.playState == 0)){
			// No audio loaded or audio stopped
			return;
		}
		audio.setPosition(audio.duration * x / w);
	});
	
	$('.itemplayer-play').click(function() {
		var id = $(this).attr('itemplayer-id');
		var player = $('.itemplayer#' + id);
		var pause = $('.itemplayer-pause', player);
		$(this).hide();
		pause.show();
		soundManager.play('audio-' + id);
	});
	
	$('.itemplayer-pause').click(function() {
		var id = $(this).attr('itemplayer-id');
		var player = $('.itemplayer#' + id);
		var play = $('.itemplayer-play', player);
		$(this).hide();
		play.show();
		soundManager.pause('audio-' + id);
	});
	
	$('.itemplayer-volume').click(function(e) {
		e = fixFirefox(e);
		var volume = parseInt(100 * (e.offsetX / $(this).outerWidth()));
		var id = $(this).attr('itemplayer-id');
		var player = $('.itemplayer#' + id);
		var indicator = $('.itemplayer-volume-indicator', player);
		indicator.css('width', volume + '%');
		var sound = soundManager.getSoundById('audio-' + id);
		sound.setVolume(volume);
	});
});
