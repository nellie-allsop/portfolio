import { Metadata } from "next";
import React from "react";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Autism",
	description: "Pages on Nellie's work around autism",
};

export default function Autism() {
	return (
		<div className="flex flex-col items-center min-h-screen mx-64">
			<h1 className="font-bold text-4xl text-green p-2">Autism</h1>

			<div>
				<h2 className="text-4xl">My background</h2>
				<p className="  rounded-2xl shadow-xl m-8">
					I&apos;ve been autistic as long as I&apos;ve existed, but I was
					diagnosed as having Autism Spectrum Disorder (ASD) at the age of 25
					through the Lorna Wing Centre. Prior to that point, I had assumed I
					was just an anxious sibling of an autistic person (my younger brother)
					and it took a mental health crisis for me to realise that my brain was
					wired like his. Aside from my personal experiences of autism, I spent
					many years volunteering at and subsequently working for the National
					Autistic Society between 2015 and 2023 where I was able to speak to
					thousands of people about autism and gain professional experience
					working in the field of autism. During that period I also signed up to
					be an 'expert by experience' with the National Autism Trainer Programme
					(NATP), which is jointly run by Anna Freud and AT-Autism.
				</p>
				<h2 className="text-4xl">Today</h2>
				<p className="className=  rounded-2xl shadow-xl m-8">
					After leaving my last job to pursue a new career path, I completed
					some coding bootcamps and continued to train as part of the NATP team
					and am looking forward to co-delivering training in an NHS community
					mental health settings soon. My mission now is to educate everyone I
					can on autism, but particularly those in the tech sector. The truth
					is, I can&apos;t tell you exactly what percentage of tech sector
					employees are autistic, and one of the reasons for that is that so
					many of those autistic people are probably undiagnosed or haven't
					disclosed their autism diagnosis at work. But if I can help a handful
					of employees at a handful of tech organisations, then I&apos;d be
					happy!
				</p>
				{/* <a href="www.autism.org.uk/what-we-do/autism-training-and-best-practice/diagnostic-services>Lorna Wing Centre</a> */}
			</div>
		</div>
	);
}
