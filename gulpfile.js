const { watch } = require('gulp');
const { spawn } = require('child_process');

function defaultTask(cb) {
	console.log('Hello there');
	cb();
}

// Rebuild tailwind css file
const css = cb => {
	spawn('npm run build:css', { shell: true }).stdout.on('data', data => {
		console.log(data.toString());
		cb();
	});
};

exports.default = function() {
	watch('src.css', css);
};
