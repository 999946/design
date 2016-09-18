import * as gulp from 'gulp'
import * as nodemon from 'gulp-nodemon'
import * as cached from 'gulp-cached'

const filePath = {
    clientNotTs: `client/**/!(*.ts|*.tsx)`,
    componentsNotTs: `components/**/!(*.ts|*.tsx)`,
    server: `server/**/*.ts`,
    styles: `styles/**/*`
}

/**
 * nodemon 监听 server 热更新
 */
gulp.task('server-nodemon', function () {
    return nodemon({
        script: 'built/server/main.js',
        watch: ['built/server'],
        env: {'NODE_ENV': 'development'}
    })
})

/**
 * 移动 client 除了 ts 以外的部分
 */
gulp.task('move-client-others', ()=> {
    return gulp.src(filePath.clientNotTs)
        .pipe(cached(filePath.clientNotTs))
        .pipe(gulp.dest('built/client'))
})

/**
 * 移动 components 除了 ts 以外的部分
 */
gulp.task('move-components-others', ()=> {
    return gulp.src(filePath.componentsNotTs)
        .pipe(cached(filePath.componentsNotTs))
        .pipe(gulp.dest('built/components'))
})

/**
 * 移动 styles
 */
gulp.task('move-styles', ()=> {
    return gulp.src(filePath.styles)
        .pipe(cached(filePath.styles))
        .pipe(gulp.dest('built/styles'))
})

gulp.task('default', ['move-client-others', 'move-components-others', 'move-styles', 'server-nodemon'], ()=> {
    gulp.watch(filePath.clientNotTs, ['move-client-others'])
    gulp.watch(filePath.componentsNotTs, ['move-components-others'])
    gulp.watch(filePath.styles, ['move-styles'])
})

gulp.task('production', ['move-client-others', 'move-components-others', 'move-styles'])