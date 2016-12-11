var gulp   = require('gulp');
var gutil  = require('gulp-util');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  
var babel  = require('gulp-babel');
var browserify = require('gulp-browserify');

var dest        = {};
dest.min        = {}

//script paths
var dependencies = [
                //@ jquery
                'dependencies/jquery.min.js'
                ,'dependencies/jquery-migrate.min.js'
                //@ angular and ui router
                ,'dependencies/angular.min.js'
                ,'dependencies/angular-ui-router.min.js'
                //@ angular charts
                ,'dependencies/Chart.min.js'
                ,'dependencies/angular-chart.min.js'
                //@ crypto
                ,'dependencies/crypto.js'
                //@ uikit and components
                ,'dependencies/uikit.min.js'
                ,'dependencies/notify.min.js'
                //@ ngStorage
                ,'dependencies/ngStorage.min.js'
                //@ json-formatter
                ,'dependencies/json-formatter.min.js'
                //@ framify-paginate
                ,'dependencies/framify-paginate.js'
                //@ date-formatter
                ,'dependencies/date-formatter.min.js'
                //@ socket.io
                ,'dependencies/socket.io.min.js'
                ];

var bundled = [
                //@ jquery
                'dependencies/jquery.min.js'
                ,'dependencies/jquery-migrate.min.js'
                //@ angular and ui router
                ,'dependencies/angular.min.js'
                ,'dependencies/angular-ui-router.min.js'
                //@ angular charts
                ,'dependencies/Chart.min.js'
                ,'dependencies/angular-chart.min.js'
                //@ crypto
                ,'dependencies/crypto.js'
                //@ uikit and components
                ,'dependencies/uikit.min.js'
                ,'dependencies/notify.min.js'
                //@ ngStorage
                ,'dependencies/ngStorage.min.js'
                //@ json-formatter
                ,'dependencies/json-formatter.min.js'
                //@ framify-paginate
                ,'dependencies/framify-paginate.js'
                //@ date-formatter
                ,'dependencies/date-formatter.min.js'
                //@ socket.io
                ,'dependencies/socket.io.min.js'
                //@ framify.js
                ,'framify.js'
                ];

var Main_src   = ['framify.es6'];

dest.dependencies       = 'dist'
dest.bundled            = 'dist'
dest.main               = 'dist'
dest.min.dependencies   = 'dist'
dest.min.bundled        = 'dist'
dest.min.main           = 'dist'


gulp.task('minifyDependencies', function() {  
    return gulp.src(dependencies)
        // .pipe( browserify({ insertGlobals: true, debug: true }).on('error', gutil.log) ) 
        .pipe(babel({ presets: ['es2015'] }))       
        .pipe(concat('framify_dependencies.js'))
        .pipe(gulp.dest(dest.dependencies))
        .pipe(rename('framify_dependencies.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest.min.dependencies));
});


gulp.task('minifyBundle', function() {  
    return gulp.src(bundled)
        // .pipe( browserify({ insertGlobals: true, debug: true }).on('error', gutil.log) )
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('framify_bundled.js'))
        .pipe(gulp.dest(dest.bundled))
        .pipe(rename('framify_bundled.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest.min.bundled));
});


gulp.task('minifyMain', function() {  
    return gulp.src(Main_src)
        // .pipe( browserify({ insertGlobals: true, debug: true }).on('error', gutil.log) )
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('framify.js'))
        .pipe(gulp.dest(dest.main))
        .pipe(rename('framify.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dest.min.main));
});


gulp.task('build', ['minifyBundle','minifyDependencies','minifyMain']);
// gulp.task('build', ['bundle','dependencies','minifyDependencies']);

gulp.task('default', ['build'])