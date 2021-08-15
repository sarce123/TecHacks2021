window.logout = async function() {
	await fetch('/~/techacks_hackathon/logout', { method: 'POST'});
	alert('Logged Out!');
	location.href = '/~/techacks_hackathon/index'
}