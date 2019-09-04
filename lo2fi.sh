#!/bin/bash
# Example usasge 
# /bin/bash lo2fi.sh data_raw/A.Girl.Walks.Home.Alone.at.Night.2014.720p.BRRip.900MB.MkvCage.mkv a_girl
# 
echo ......................................
echo ......................................
echo ..........making xxxtra lofi..........
echo ......................................

VIDEOFILE=$1
NAMESPACE=$2
FRAMES=30
interval=1

echo $VIDEOFILE
echo $NAMESPACE

echo "Outputting $FRAMES frames..."
output_dir="data_out/$NAMESPACE"

$(npm run build)
$(mkdir -p $output_dir)
$(mkdir -p "$output_dir/img")

for ((i=1; i<=FRAMES; i++)); do
    minute=($i * $interval)
    timestamp="00:$minute:00"
    img_tmpfile="$output_dir/img/$minute.png"
    img_tmpfile_sm="$output_dir/img/$minute-sm.png"
    csv_filename="$output_dir/$minute.txt"
    echo "$timestamp --> $img_tmpfile -> $csv_filename"
    # 1. Extract frame as an image
    $(ffmpeg -ss $timestamp -i $VIDEOFILE -frames:v 1 $img_tmpfile)
    # 2. Resize to screen resolution
    $(convert -resize 10x $img_tmpfile $img_tmpfile_sm)
    # 3. Use JIMP to convert pixels to csv output
    $(node lib/index.js $img_tmpfile_sm $csv_filename) 
    # 4. Clean up
    $(rm $img_tmpfile)
    # $(rm $img_tmpfile_sm)
done

echo .....................................
echo done.

