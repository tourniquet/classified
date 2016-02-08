
module.exports = function(grunt) {

	grunt.config.set('webpack', {
		dev: {
      entry: 'assets/js/main.js',
      output: 'assets/js/script.js',
      watch: true
    }
	});

	grunt.loadNpmTasks('grunt-webpack');
};
