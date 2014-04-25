var child_process = require('child_process')
var tmp = require('tmp')
var gm = require('gm')
var ExifImage = require('exif').ExifImage
var Q = require('q')

var filename = 'img.jpg'

function tmpdir() {
  var deferred = Q.defer()
  tmp.dir(function(err, path) {
    if (err) {
      return deferred.reject(err)
    }
    deferred.resolve(path)
  })
  return deferred.promise
}

function exif(path) {
  var deferred = Q.defer()
  try {
    new ExifImage({image: path}, function(err, data) {
      if (err) {
        return deferred.reject(err)
      }
      deferred.resolve(data)
    })
  } catch (err) {
    deferred.reject(err)
  }
  return deferred.promise
}

function thumbnail(herein, out) {
  var deferred = Q.defer()
  gm(herein).thumb(200, 200, out, 80, function(err) {
    if (err) {
      return deferred.reject(err)
    }
    deferred.resolve(out)
  })
  return deferred.promise
}

function videoScreenshot(herein, out) {
  var deferred = Q.defer()
  // ffmpeg -ss 00:00:00 -i challenge/video/lieber+sky+dive-SD.mp4 -s 200x200 -frames:v 1 out1.jpg
  child_process.exec('ffmpeg -ss 00:00:00 -i ' + herein + ' -frames:v 1 ' + out, function(err, stdout, stderr) {
    if (err) {
      deferred.reject(err)
    }
    deferred.resolve(out)
  })
  return deferred.promise
}

module.exports = {
  thumbnail: thumbnail,
  videoScreenshot: videoScreenshot,
  exif: exif,
  tmpdir: tmpdir
}
