"use client";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";

export default function Video() {
	return (
		<div>
			<div>
				<HoverVideoPlayer
				videoSrc="/DnD Companion.mp4"
				pausedOverlay={
					<img
					src="DnD Companion.png"
					className="h-200 w-full object-cover"
					/>
				}
				/>
			</div>
		</div>
	);
}
