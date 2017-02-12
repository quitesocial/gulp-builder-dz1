'use strict';

module.exports = function() {
    $.gulp.task('sprite-gif', function() {
        return $.gulp.src('./source/images/*.gif')
            .pipe($.gp.spritesmith({
                imgName: 'sprite.gif',
                cssName: 'sprite.css'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/images'));
    });
};