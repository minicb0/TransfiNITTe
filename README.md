# TransfiNITTe

This repo is to hold the task of TransfiNITTe Hackathon. We have made this project under the sponsor challenge by BharatX.

## Problem Statement by: BharatX
	-Create a Family Tree of all families in India (Pan India) using Electoral Roll Pdf with the data available at nsvp.in.You are free to use any technology or any hack to crack the following
	problem statement.

## Project Idea:
	-To automate the task of generating a family tree using the details given for person, with the same precision as doing it manually.
 
## Inspiration:
	-Completing a task which could be helpful for data parsing and visualising in a structured manner. 

## Features included in the project:
	-Takes details of a person in Chennai from the user and generates the corresponding family tree of the person.
	

## How we built it:
	-Cracking captcha : Usng urllib3, we removed the grayscale of captcha and made it complete black and white and then using amazoncaptcha,  pyrtesseract, gunicorn, pillow. 
	-We made a API out of it and hosted it with Flask on heroku.
	-Obtained Part Number using PyMuPDF
	-Used Fitz to obtain text by iterating a rectangular block through each page of the PDF after making the PDF searchable, and saved it in JSON format. 
	-Constructed Family Tree based on given input details and the JSON file using React

## Challenges we ran into:
	-Time Constraint.
	-Adding videos as a part of news information.

## Accomplishments that we're proud of:
	-Fully functional end to end application with a beautiful UI.

## What we learnt:
	-Team work.
	-Idea pooling.
	-Time management.

## What's next:
	-To understand and acquire the data in order to use it to generate the family trees through out India.