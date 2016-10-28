var gulp = require('gulp');
var typescript = require('gulp-tsc');
var Server = require('karma').Server;

gulp.task('default', ['compile'], function(){
});

/* Compile typescript */
gulp.task('compile', function(){
  gulp.src(['src/**/*.ts'])
    .pipe(typescript())
    .pipe(gulp.dest('dest/'))
});

gulp.task('test',['compile'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// karma`.config,js is configured to watch for changing files from testdesc folder
// gulp first compile ts files into testdest
// then karma kicks off specs
// using browsify for ts require modules in karma tests 

//Compile the task first, then start watching
gulp.task('watch',['compile'], function() {

  gulp.watch('src/**/*.ts', ['compile']);
  
  // var watcher = gulp.watch('src/**/*.ts', ['compile','test']);
  // watcher.on('change', function(event) {
  //   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  // });
});