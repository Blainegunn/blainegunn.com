var bio = document.getElementById('bioView');
var contact = document.getElementById('contactView');
var resume = document.getElementById('resumeView');






var bioClick = bio.onclick = function(){
	bio.style.display="block";
	contact.style.display="none";
	resume.style.display="none";
}
var contactClick = contact.onclick = function(){
	contact.style.display="block";
	bio.style.display="none";
	resume.style.display="none";
}
var resumeClick = resume.onclick = function(){
	resume.style.display="block";
	bio.style.display="none";
	contact.style.display="none";
}