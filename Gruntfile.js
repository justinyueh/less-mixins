module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			options: {
				// the banner is inserted at the top of the output
				banner: '/*! core.css <%= grunt.template.today("dd-mm-yyyy") %> */\n',
				//compress: true,
				sourceMap: true,
				sourceMapURL: 'core.css.map',
				sourceMapRootpath: '../',
				dumpLineNumbers: 'comments'
			},
			dist: {
				files: {
					'dist/core.css': ['less/bootstrap.less']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');

	// the default task can be run just by typing "grunt" on the command line
	grunt.registerTask('default', ['less']);

};