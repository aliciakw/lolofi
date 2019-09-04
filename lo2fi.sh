#!/bin/bash
# Example usasge 
# /bin/bash lo2fi.sh data_raw/A.Girl.Walks.Home.Alone.at.Night.2014.720p.BRRip.900MB.MkvCage.mkv a_girl
# 
echo .....................................
echo .....................................
echo ...........making extra lofi.........
echo .....................................

VIDEOFILE=$1
NAMESPACE=$2
FRAMES=30
interval=1

echo $VIDEOFILE
echo $NAMESPACE

echo "Outputting $FRAMES frames..."
output_dir="data_out/$NAMESPACE"
$(mkdir -p $output_dir)
for ((i=1; i<=FRAMES; i++)); do
    minute=($i * $interval)
    timestamp="00:$minute:00"
    output_filename="$output_dir/$minute.png"
    echo "$timestamp --> $output_filename"
    $(ffmpeg -ss $timestamp -i $VIDEOFILE -frames:v 1 $output_filename)

done

echo .....................................
echo done.

