var thumbler = require('video-thumb');
thumbler.extract('challenge/video/lieber+sky+dive-SD.mp4', 'snapshot.png', '00:00:00', '200x200', function(){
  console.log(arguments)
  console.log('snapshot saved to snapshot.png (200x125) with a frame at 00:00:22');
})
