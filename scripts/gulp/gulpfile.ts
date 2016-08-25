import * as gulp from 'gulp'
import * as nodemon from 'gulp-nodemon'
import * as cached from 'gulp-cached'
import * as gulpTypescript from 'gulp-typescript'
import * as typescript from 'typescript'
import * as path from 'path'

const tsServerProject = gulpTypescript.createProject(path.join(__dirname, '../../../tsconfig.json'), {typescript: typescript})

const filePath = {
    clientNotTs: `client/**/!(*.ts|*.tsx)`,
    componentsNotTs: `components/**/!(*.ts|*.tsx)`,
    server: `server/**/*.ts`
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
 * 移动除了 ts 以外的部分
 */
gulp.task('move-client-others', ()=> {
    return gulp.src(filePath.clientNotTs)
        .pipe(cached(filePath.clientNotTs))
        .pipe(gulp.dest('built/client'))
})

/**
 * 移动除了 ts 以外的部分
 */
gulp.task('move-components-others', ()=> {
    return gulp.src(filePath.componentsNotTs)
        .pipe(cached(filePath.componentsNotTs))
        .pipe(gulp.dest('built/components'))
})

gulp.task('default', ['move-client-others', 'move-components-others', 'server-nodemon'], ()=> {
    gulp.watch(filePath.clientNotTs, ['move-client-others'])
    gulp.watch(filePath.componentsNotTs, ['move-components-others'])
})