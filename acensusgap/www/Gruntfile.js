module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jst: {
        compile: {
            files: {
                "static/js/templates/all.js": ["templates/underscore/*.html" ]
            },
            options: {
                prettify: true
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.registerTask('default', ['jst']);
};
