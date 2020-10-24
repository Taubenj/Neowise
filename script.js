// première animation

MotionPathPlugin.convertToPath('line');
gsap.to('#soleil', {
	duration: 0,
	motionPath: {
		path: '#chemin-soleil',
		align: '#chemin-soleil',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#mercure', {
	duration: 8,
	motionPath: {
		path: '#chemin-mercure',
		align: '#chemin-mercure',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#venus', {
	duration: 10,
	motionPath: {
		path: '#chemin-venus',
		align: '#chemin-venus',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#mars', {
	duration: 4,
	motionPath: {
		path: '#chemin-mars',
		align: '#chemin-mars',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#jupiter', {
	duration: 11,
	motionPath: {
		path: '#chemin-jupiter',
		align: '#chemin-jupiter',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#terre', {
	duration: 7,
	motionPath: {
		path: '#chemin-terre',
		align: '#chemin-terre',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#uranus', {
	duration: 12,
	motionPath: {
		path: '#chemin-uranus',
		align: '#chemin-uranus',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#neptune', {
	duration: 14,
	motionPath: {
		path: '#chemin-neptune',
		align: '#chemin-neptune',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#saturne', {
	duration: 10,
	motionPath: {
		path: '#chemin-saturne',
		align: '#chemin-saturne',
	},
	ease: Linear.easeNone,
	repeat: -1,
});
gsap.to('#comete', {
	duration: 4,
	opacity: 0.1,
	motionPath: {
		path: '#chemin-comete',
		align: '#chemin-comete',
		autoRotate: true,
	},
	ease: Linear.easeNone,
	repeat: -1,
});

function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

etoile.addEventListener('click', clicksuretoile);

function clicksuretoile() {
	gsap.to('#etoile', {
		duration: 0,
		x: randomInteger(0, 1000),
		y: randomInteger(0, 650),
	});
}
clicksuretoile();
