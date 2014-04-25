tmp.dir(function _tempDirCreated(err, path) {
  if (err) throw err;

  console.log("Dir: ", path);
})
var ExifImage = require('exif').ExifImage;

try {
  new ExifImage({ image : 'challenge/images/xzuvhgdQGul0amA3Qc7a_373A9681.jpg' }, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else
            console.log(exifData); // Do something with your data!
    });
} catch (error) {
    console.log('Error: ' + error.message);
}
