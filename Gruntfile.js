module.exports = function(grunt){

  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),

  	// automatically include bower scripts in HTML
  	bowerInstall: {
  	 
  	  target: {
  	    src: [
  	      'index.html'
  	    ]
  	  }
  	}
  });

  grunt.loadNpmTasks('grunt-bower-install');

  

};