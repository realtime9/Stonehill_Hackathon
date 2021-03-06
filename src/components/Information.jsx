import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../style/Information.css'
const Information = () => {
	return (
		<React.Fragment>
			<Header />
			<div>
				<p>Every project has a purpose behind it and so does this. This is not something made just for the hackathon
					but for the purpose of learning. This is not a project that is meant to be a final product. This is a project
					that is meant to be a learning experience and something that could be worked on for the long run.
				</p>

				<p>We would like to tell you a little more about the theme (UNSDG #4) and how our product relates to it.
					In addition to this, we would like to give you our rationale behind the functionality of the website, how
					it was made, and how it can be implemented on a large scale. We will also provide detailed information about
					each course along with why it is useful for you to do this subject specific online course

				</p>

				<hr />
				<h2>Relation with the theme (UNSDG #4)</h2>
				<div class="container">
					<div class="image">
						<img src={require('../images/SDG4.png')} alt="" />
					</div>
					<div class="text3">
						<p>Our product's purpose is to supply high school students with as much knowledge and information about
							colleges and college life as possible. This fits perfectly into the UNSDG #4 "Ensure
							inclusive and equitable quality education and promote lifelong learning opportunities for all".
							College is a very crucial part of a person's life and is one of the first stepping stones into
							the working world. Having more information about a university is always better. Apart from that,
							the course page also provides users with an oppurtunity to learn a course and provide a course
							with a reason for why it was useful for someone else. For example, we learnt web development from
							coursera courses. It is very streneous but definitely a skill worth learning. The best part is once
							the skill is mastered, it will remain with you forever.
						</p>
					</div>
				</div>



				<hr />
				<h2>
					Our purpose
				</h2>
				<div class="container">
					<div class="image">
						<div class="img2"><img src={require("../images/FutureReady-logos.jpeg")} alt="" /></div>
					</div>
					<div class="text2">
						<p>This project was made as a part of the 2022 Stonehill Hackathon and despite this looking like the initial
							purpose, we intend it to account for a lot more. As students who will be applying to a plethora of colleges
							this year, we understand the difficulty on specific information about colleges. The glittering generalities
							on college's websites are often not as useful as the specific information that is needed. This project aims to
							provide a more detailed and useful information about colleges by making a chat app that allows users to message
							verified college students (we will explain the verification process in a bit).
						</p>

					</div>
				</div>

				<hr />


				<h2>Functionality</h2>
				<h3>Chat room</h3>
				<p>The chat room was created mainly using React.js, a popular JavaScript library used to create interactive
					web apps. The chat room is a simple chat app that allows users to message verified college students. The way
					we verify college students is elementary at the moment. We are using a firebase database to check whether the
					college students email ends with ".edu". .edu emails are very difficult to obtain and are usually given by
					the college. This, however, wont be the case for the future. We will be using a more robust verification where
					we will create an AI algorithm to actually verify the user by connecting it to the source code. This way, it
					is all in the cloud, saves space and ram, and if more efficient.

					<h3>Courses</h3>
					<p>The courses page was mainly created using JavaScript. Instead of just cramming the best courses off Coursera
						and edX, we thought of letting the user create their own recommendation of courses along with how this helped
						them in their life. This way there is a personal connect and a way to learn something new.
						At the moment, we are saving everything using the local webstorage in the browser. On a larger scale,
						we will use Coursera and edX API's to integrate a search engine which will filter, sort, and display
						recommended courses in a better list. We will then create a proper functioning data base (MongoDB) to save
						these recommendations.
					</p>
				</p>
			</div>
			<Footer />
		</React.Fragment>
	)
}
export default Information;