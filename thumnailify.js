var gm = require('gm')

gm('img.jpg')
.thumb(200, 200, 'out.png', 80, function(err) {
  console.log(arguments)
})

