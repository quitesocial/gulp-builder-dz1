'use strict';

module.exports = function() {
    $.gulp.task('spritesmith', function() {
        return $.gulp.src('./source/images/*.png')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/images'));
    });
};