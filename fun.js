var bio = document.getElementById('bioView');
var contact = document.getElementById('contactView');
var resume = document.getElementById('resumeView');
var blog = document.getElementById('blogView');
var home = document.getElementById('homeView');

var bioClick = bio.onclick = function(){
	bio.style.display="block";
	contact.style.display="none";
	resume.style.display="none";
	blog.style.display="none";
	home.style.display="none";
}
var contactClick = contact.onclick = function(){
	contact.style.display="block";
	bio.style.display="none";
	resume.style.display="none";
	blog.style.display="none";
	home.style.display="none";
}
var resumeClick = resume.onclick = function(){
	resume.style.display="block";
	bio.style.display="none";
	contact.style.display="none";
	blog.style.display="none";
	home.style.display="none";
}
var blogClick = blog.onclick = function(){
	blog.style.display="block";
	bio.style.display="none";
	contact.style.display="none";
	home.style.display="none";
	resume.style.display="none";
}
var homeClick = home.onclick = function(){
	home.style.display="block";
	bio.style.display="none";
	contact.style.display="none";
	blog.style.display="none";
	resume.style.display="none";
}
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'yIYp1utzWjU',
    });
    document.getElementById('resume').onclick = function() {
        player.playVideo();
    };
    document.getElementById('pause').onclick = function() {
        player.pauseVideo();
    };
    document.getElementById('mute').onclick = function() {
        player.mute();
    };
    document.getElementById('unmute').onclick = function() {
        player.unMute();
    };
}
