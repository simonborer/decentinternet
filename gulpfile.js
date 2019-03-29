var gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  webp = require('gulp-webp'),
  imageminJpegtran = require('imagemin-jpegtran'),
  imageminPngquant = require('imagemin-pngquant'),
  imageminGifSicle = require('imagemin-gifsicle'),
  imageminOptiPng = require('imagemin-optipng'),
  imageminSvgo = require('imagemin-svgo'),
  imageresize = require('gulp-image-resize'),
  newer = require('gulp-newer'),
  fs = require('fs'),
  path = require('path');

var paths = {
  images: {
    src: './content/post',
    dest: './content/post'
  }
};

function images(folder_path) {
  return gulp.src(paths.images.src + '/' + folder_path + '/images/*.{png,jpg,gif,svg}')
  .pipe(newer(paths.images.src + '/' + folder_path + '/images/'))
  .pipe(imageresize({
      width : 600,
      crop : false,
      upscale : false
    }))
  .pipe(imagemin(
    [
      imageminJpegtran({progressive: true}),
      imageminPngquant({
        quality: [0.6, 0.8]
      }),
      imageminSvgo({
        plugins: [{removeViewBox: false}]
      }),
      imageminGifSicle()
    ],
    {verbose: true}
  ))
  .pipe(webp())
  .pipe(gulp.dest(paths.images.dest + '/' + folder_path + '/images/'));
}

function image_loop(done) {
  fs.readdir(paths.images.src, function(err, folders) {
    for(var i =0; i < folders.length; i++){
      var folder_path = path.join(paths.images.src, folders[i]);
      images(folders[i]);
    }
  });
  done();
}

gulp.task('default', gulp.series(
    image_loop
));