'use strict';

module.exports = function() {
    $.gulp.task('imagemin', function() {
        return $.gulp.src('./source/images/**/*.{jpg, gif}')
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.root + '/assets/img'));
    });
};