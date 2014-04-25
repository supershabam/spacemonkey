* filesystem as a datastore
* upload is stream to temp dir, on complete move to live dir
* remove means delete live dir files

live dir

{id}.raw
{id}.json
{id}.thumb.png (200x200)

json file

{
  mime: String,
  date: exif || Date.now(),
  name: exif || upload name,
  exif: {
    geo: {},
    camera: {}
  }
}

video

* upload to temp
* extract thumb
* extract exif
* move to live

image

* upload to temp
* extract thumb
* extract exif
* move to live
