import React from 'react';

function ResumeDisplay({ resume }) {
    return (
        <>
            <h2>Your completed resume</h2>
            <h3>{resume.firstName} {resume.lastName}</h3>
            <p>Email: {resume.myEmail}</p>
            <p>Relevant web link: {resume.myLink}</p>
            <h2>Education</h2>
            <p>School: {resume.mySchool}</p>
            <p>Degree: {resume.myDegree}</p>
            <p>Graduation date: {resume.myGradDate}</p>
            <h2>Most Recent Work XP</h2>
            <p>Employer: {resume.myLastEmployer}</p>
            <p>Role/Title: {resume.myLastTitle}</p>
            <p>Start date: {resume.myLastStartDate}</p>
            <p>End date: {resume.myLastEndDate}</p>
            <p>Description: {resume.myLastDescription}</p>
            <h2>Most Recent Work XP</h2>
            <p>Project Name: {resume.myProject}</p>
            <p>Description: {resume.myProjectDescription}</p>
            <p>Relevant web link: {resume.myProjectLink}</p>

        </>
    );
}

export default ResumeDisplay;