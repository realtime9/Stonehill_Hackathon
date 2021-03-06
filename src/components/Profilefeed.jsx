import React, { useEffect, useState } from "react";
import '../style/Profile.css'
import { db } from "../scripts/firebase-config";
import { collection, onSnapshot } from 'firebase/firestore'
import Header from "./Header";
import Footer from "./Footer";

const ProfileFeed = () => {
	const [students, setStudents] = useState([]);
	console.log(setStudents);
	useEffect(() => {
		onSnapshot(collection(db, 'users'), (snapshot) =>
			setStudents(snapshot.docs.map(doc => doc.data())))
	}, [])
	return (
		<React.Fragment>
		<Header />
		<div id="parent-div">
			{students.map((student) => (
				<div className="child-div">
					<h1 className="profile-username">{student.username}</h1>
					<h3 className="profile-university">{student.university}</h3>
					<h5 className="profile-degree">{student.degree}</h5>
				</div>
			))}
		</div>
		<Footer />
		</React.Fragment>
	)
}
export default ProfileFeed;