# Lo Lo Fi
A script to convert an image or a set of sequential images to an array of rgba values.
These values correspond to an rgb led in a 10x10 custom rbg led display.

## Workflow
`/bin/bash lo2fi.sh <videofile> <output_namespace>`
The script will read movie inputs from `/data_raw` directory and output sequential csv files in `/data_out/<movie_namespace>`

1. capture keyframes from a film at regular intervals
2. resize keyframes to the desired size (with 10px)
3. convert pixels to a `.csv` file containing RGB values for every pixel.
4. output the rgb values (on a screen or with P3 mockup)


### Tools
#### imagemagick
```
convert -resize x10 test_out23.png test_out23_sm.png // max height 10px
convert -resize 10x test_out23.png test_out23_sm.png // width 10px
```

#### ffmpeg
```
ffmpeg -ss <timestamp> -i <movie_filename> -frames:v 1 <output_filemane>
// example:
ffmpeg -ss 00:23:00 -i A.Girl.Walks.Home.Alone.at.Night.2014.720p.BRRip.900MB.MkvCage.mkv -frames:v 1 test_out23.png
```