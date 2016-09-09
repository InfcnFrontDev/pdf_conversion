// 二哲 - 2016年08月15日
const path = require('path');
const gulp = require('gulp');
const ugjs = require('gulp-uglify');
const watch = require('gulp-watch');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const named = require('vinyl-named');
const del = require('del');
const watchPath = require('gulp-watch-path');
const replace = require('gulp-replace');

const rev = require('gulp-rev');
const ifElse = require('gulp-if-else');
const browserSync = require('browser-sync').create();
const base64 = require('gulp-base64');
const runSequence = require('run-sequence');
const bsReload = browserSync.reload;
const postcss = require('gulp-postcss'); //postcss本身
const autoprefixer = require('autoprefixer');
const precss = require('precss'); //提供像scss一样的语法
const cssnano = require('cssnano');  //更好用的css压缩!
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const revCollector = require('gulp-rev-collector');
const exec = require('child_process').exec;
const CDN = '/pdf_conversion';
var webpackConfig = {
    resolve: {
        root: path.join(__dirname, 'node_modules'),
        alias: {
            components: '../../components' // 组件别名,js里引用路径可直接 'components/xxx/yyy'
        },
        extensions: ['', '.js', '.vue', '.scss', '.css']
    },
    output: {
        // publicPath: 'yourcdnlink/static/',
        filename: '[name].js',
        chunkFilename: '[id].js?[hash]'
    },
    module: {
        noParse: [/vue.js/],
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url',
                query: {
                    //limit: 5000,
                    name: 'images/[name].[ext]?[hash:10]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    //limit: 5000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [],
    babel: { //配置babel
        "presets": ["es2015", 'stage-2'],
        "plugins": ["transform-runtime"]
    }
};

const processes = [
    autoprefixer({browsers: ['last 2 version', 'safari 5', 'opera 12.1', 'ios 6', 'android 4', '> 10%']}),
    precss,
    cssnano
];
// background: color($blue blackness(20%));  precss为了用这样的语法
const src = {
    css: './src/css/**/*.css',
    fonts: './src/fonts/**/*.{eot,svg,ttf,woff}',
    images: './src/images/**/*.{png,jpg,jpeg,gif}',
    js: './src/js/**/*.js',
    vendors: './src/vendors/**/*.*',
    sass: './src/sass/**/*.scss',
    components: './src/components/**/*.vue',
    es6: './src/es6/**/*.js',
    views: './src/views/**/*.html'
};
const dist = {
    css: './public/css/',
    fonts: './public/fonts/',
    images: './public/images/',
    js: './public/js/',
    vendors: './public/vendors/',
    views: './public/views'
};

const dev = {
    css: './dev/css/',
    fonts: './dev/fonts/',
    images: './dev/images/',
    js: './dev/js/',
    vendors: './dev/vendors/',
    views: './dev/views/'
};

var BUILD = 'DEV';
gulp.task('build', function () {
    BUILD = 'PUBLIC';
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'production'
    }));
    build(function () {
        del(['./src/tmp'])
    });
});
gulp.task('reload', function () {
    browserSync.init(dev.views, {
        startPath: "/views/",
        files: ["dev/css/**/*.*", "dev/js/**/*.*", "dev/views/**/*.*"],
        server: {
            baseDir: 'dev'
        },
        open: false,
        notify: true
    });
    webpackConfig.plugins.push(new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'dev'
    }));
    init();// watch
});

gulp.task('clean', function () {
    del([
        'public/**/*',
        'dev/**/*'
    ]);
});
gulp.task('css', function () {
    return gulp.src(src.css)
        .pipe(gulp.dest(dev.css));
});
gulp.task('fonts', function () {
    return gulp.src(src.fonts)
        .pipe(gulp.dest(dev.fonts));
});
gulp.task('images', function () {
    gulp.src(src.images)
        .pipe(gulp.dest(dev.images));
});
gulp.task('js', function () {
    return gulp.src(src.js)
        .pipe(gulp.dest(dev.js));
});
gulp.task('vendors', function () {
    return gulp.src(src.vendors)
        .pipe(gulp.dest(dev.vendors));
});
gulp.task('sass', function () {
    return gulp.src(src.sass)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processes))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(dev.css));
});
gulp.task('es6', function () {
    compileJS([src.es6, '!./src/vendors/**/*.js'], dev.js);
});
gulp.task('views', function () {
    return gulp.src(src.views)
        .pipe(gulp.dest(dev.views));
});
function init() {
    watch([src.css, src.fonts, src.images, src.js, src.vendors], function (event) {
        var paths = watchPath(event, 'src/', 'dev/');
        cp(paths.srcPath, paths.distDir);
    });
    watch([src.sass], function (event) {
        var paths = watchPath(event, 'src/sass/', 'dev/css/');
        return gulp.src(paths.srcPath)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(postcss(processes))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(paths.distDir));
    });
    watch([src.es6], function (event) {
        var paths = watchPath(event, 'src/es6/', 'dev/js/');
        console.log(paths);
        var sp = paths.srcPath.indexOf('\\') > -1 ? '\\' : '/';
        var business = paths.srcDir.split(sp);

        var path = paths.srcPath;
        if(business[business.length-1] === 'common'){ // 修改common目录，编译该模块所有js
            path = paths.srcDir.replace('common', '') + '*.js';
        }
        compileJS(path);
    });
    watch([src.components], function (event) {
        var paths = watchPath(event, 'src/components/', 'dev/js/');
        var business = paths.srcDir.split('\\');
        var jsFile = paths.srcFilename.split('.')[0].split('-')[0];

        var path;
        if(business.length == 2){
            path = './src/es6/' + jsFile + '.js';
        }else if(business.length == 3){
            if(business[2] === 'common'){
                path = './src/es6/**/*.js';
            }else if(business[2] === jsFile){
                path = './src/es6/'+ business[2] +'/*.js';
            }else{
                path = './src/es6/' + business[2] + '/' + jsFile + '.js';
            }
        }else{
            path = paths.srcDir + '/' + jsFile + '.js';
        }
        console.log(path);
        compileJS(path);
    });
    watch([src.views], function (event) {
        var paths = watchPath(event, 'src/views/', 'dev/views/');
        cp(paths.srcPath, paths.distDir);
    });

    gulp.start('css', 'fonts', 'images', 'js', 'vendors', 'sass', 'es6', 'views');

}
function compileJS(path, dest) {
    dest = dest || dev.js;
    webpackConfig.output.publicPath = BUILD === 'PUBLIC' ? '' + CDN + '/static/' : '/static/';

    return gulp.src(path)
        .pipe(named(function (file) {
            var path = JSON.parse(JSON.stringify(file)).history[0];
            var sp = 'es6\\';
            var target = path.split(sp)[1];
            return target.substring(0, target.length - 3);
        }))
        .pipe(webpackStream(webpackConfig))
        .on('error', function (err) {
            this.end()
        })
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest(dest))
}
function cp(from, to) {
    gulp.src(from)
        .pipe(gulp.dest(to));
}

function build(cb) {
    cp('./src/assets/images/**/*.*', './src/static/images');
    cp('./src/assets/fonts/**/*.{eot,svg,ttf,woff}', './src/static/fonts');
    runSequence('clean', 'sass', 'css:build', 'js:build', 'ugjs:build', 'views:build', 'images', 'fonts', function () {
        // 上传静态资源文件到CDN
        cb && cb();
        /*exec('node upload.js', function (err, output) {
         if(err) console.log(err);
         console.log(output);
         });*/
    });
}
