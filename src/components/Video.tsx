"use client";
import React from "react";
import ReactPlayer from "react-player";
import HoverVideoPlayer from "react-hover-video-player";

export default function Video() {
	return (
		<div>
			<div>
				<ReactPlayer
					url="/Test.mp4"
					width="200px"
					height="400px"
					loop={true}
					controls={true}
					playing={false}
					muted={true}
				/>
			</div>
			<div>
				<HoverVideoPlayer
				videoSrc="/Test.mp4"
				pausedOverlay={
					<img
					src="presentation.jpg"
					className="h-full w-full object-cover"
					/>
				}
				/>
			</div>
		</div>
	);
}
