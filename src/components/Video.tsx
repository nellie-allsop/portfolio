'use client'
import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
	return (
		<div>
			<ReactPlayer url="/Test.mp4" width="200px" height="400px"
			loop={true} controls={true} playing={false} muted={true} />
		</div>
	);
}
