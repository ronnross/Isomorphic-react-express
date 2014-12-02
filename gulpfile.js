var gulp = require('gulp'),
    server = require('gulp-express');

gulp.task('default', function() {

});

gulp.task('server', function(){
  server.run({
    file: 'server.js'
  });

  // Restart the server when file changes
  gulp.watch(['elements/**/*.jsx'], server.notify);
  gulp.watch(['views/**/*.ejs'], server.notify);

});
