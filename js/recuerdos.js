document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

document.addEventListener('DOMContentLoaded', function () {
	var elem = document.querySelector('.masonry');
	var msnry = new Masonry(elem, {
		itemSelector: '.col',
		percentPosition: true
	});
});