var gulp = require('gulp');
var inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('inline-angular', function() {
  var result = gulp.src(['./src/app/**/*.component.ts', './src/app/**/*.module.ts'])
    .pipe(inlineNg2Template({
      useRelativePaths: true,
    }))
    .pipe(gulp.dest('.tmp/src/'));
});
