var gulp        = require('gulp');
var gutil       = require('gulp-util');
var concat      = require('gulp-concat');  
var rename      = require('gulp-rename');  
var uglify      = require('gulp-uglify');  
var uglifyCss   = require('gulp-uglifycss');
var sourcify    = require('gulp-sourcemaps');
var babel       = require('gulp-babel');
var browserify = require('gulp-browserify');

var dest        = {};
dest.min        = {}

//script paths
var dependencies = [
                //@ jquery
                'dependencies/js/jquery.js'
                ,'dependencies/js/jquery-migrate.js'
                //@ angular and ui router
                ,'dependencies/js/angular.js'
                ,'dependencies/js/angular-ui-router.js'
                //@ angular charts
                ,'dependencies/js/Chart.js'
                ,'dependencies/js/angular-chart.js'
                //@ crypto
                ,'dependencies/js/crypto.js'
                //@ uikit and components
                ,'dependencies/js/uikit.min.js'
                ,'dependencies/js/notify.min.js'
                //@ ngStorage
                ,'dependencies/js/ngStorage.js'
                //@ json-formatter
                ,'dependencies/js/json-formatter.min.js'
                //@ framify-paginate
                ,'dependencies/js/framify-paginate.js'
                //@ date-formatter
                ,'dependencies/js/date-formatter.min.js'
                //@ socket.io
                ,'dependencies/js/socket.io.js'
                ];

var bundled = [
                //@ jquery
                'dependencies/js/jquery.js'
                ,'dependencies/js/jquery-migrate.js'
                //@ angular and ui router
                ,'dependencies/js/angular.js'
                ,'dependencies/js/angular-ui-router.js'
                //@ angular charts
                ,'dependencies/js/Chart.js'
                ,'dependencies/js/angular-chart.js'
                //@ crypto
                ,'dependencies/js/crypto.js'
                //@ uikit and components
                ,'dependencies/js/uikit.min.js'
                ,'dependencies/js/notify.min.js'
                //@ ngStorage
                ,'dependencies/js/ngStorage.js'
                //@ json-formatter
                ,'dependencies/js/json-formatter.min.js'
                //@ framify-paginate
                ,'dependencies/js/framify-paginate.js'
                //@ date-formatter
                ,'dependencies/js/date-formatter.min.js'
                //@ socket.io
                ,'dependencies/js/socket.io.js'
                //@ framify.js
                ,'framify.js'
                ];

var css     = [
                //@UIKIT dependencies
                'dependencies/css/uikit.min.css'
                ,'dependencies/css/uikit.almost-flat.min.css'
                ,'dependencies/css/main.min.css'    
                //@ Chartist css
                ,'dependencies/css/chartist.min.css'
                //@ Font awesome
                ,'dependencies/css/font-awesome.min.css'
                //@ JSON formatter
                ,'dependencies/css/json-formatter.min.css'
                //@ Responsive Table
                ,'dependencies/css/table-responsive.css'
                //@ angular-chart 
                ,'dependencies/css/angular-chart.min.css'
                //@ angular-material
                ,'dependencies/css/angular-material.min.css'
                ]

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
        .pipe(sourcify.init())
        .pipe(babel({ presets: ['es2015'] }))       
        .pipe(concat('framify_dependencies.js'))
        .pipe(gulp.dest(dest.dependencies))
        .pipe(rename('framify_dependencies.min.js'))
        .pipe(uglify())
        .pipe(sourcify.write('maps'))
        .pipe(gulp.dest(dest.min.dependencies));
});


gulp.task('minifyBundle', function() {  
    return gulp.src(bundled)
        // .pipe( browserify({ insertGlobals: true, debug: true }).on('error', gutil.log) )
        .pipe(sourcify.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('framify_bundled.js'))
        .pipe(gulp.dest(dest.bundled))
        .pipe(rename('framify_bundled.min.js'))
        .pipe(uglify())
        .pipe(sourcify.write('maps'))
        .pipe(gulp.dest(dest.min.bundled));
});


gulp.task('minifyMain', function() {  
    return gulp.src(Main_src)
        // .pipe( browserify({ insertGlobals: true, debug: true }).on('error', gutil.log) )
        .pipe(sourcify.init())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('framify.js'))
        .pipe(gulp.dest(dest.main))
        .pipe(rename('framify.min.js'))
        .pipe(uglify())
        .pipe(sourcify.write('maps'))
        .pipe(gulp.dest(dest.min.main));
});


gulp.task('cssMinify', function(){
    return gulp.src( css )
        .pipe(concat('framify_dependencies.css'))
        .pipe(gulp.dest(dest.main))
        .pipe(rename('framify_dependencies.min.css'))
        .pipe(uglifyCss())
        .pipe(gulp.dest(dest.min.main))
})

gulp.task('build', ['minifyBundle','minifyDependencies','minifyMain','cssMinify']);
// gulp.task('build', ['bundle','dependencies','minifyDependencies']);

gulp.task('default', ['build'])