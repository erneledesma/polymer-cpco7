module.exports = function(grunt) {

    grunt.initConfig({
      'connect': {
        demo: {
          options: {
            hostname: 'localhost',
            open: true,
            port: 3000,
            keepalive: true
          }
        }
      },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('server', ['connect']);

};
