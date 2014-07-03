module.exports = function ( grunt ) {

    grunt.initConfig({
      'connect': {
        demo: {
          options: {
            hostname  : 'localhost',
            keepalive : true,
            open      : true,
            port      : 3000
          }
        }
      },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('server', ['connect']);

};
