import React from 'react'
import './App.css' 
import Card from './assets/Components/Cards.jsx'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=256",
    company: "Google",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$62/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=256",
    company: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=256",
    company: "Apple",
    datePosted: "1 week ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=256",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=256",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=256",
    company: "Netflix",
    datePosted: "2 weeks ago",
    post: "Platform Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=256",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=256",
    company: "Uber",
    datePosted: "3 weeks ago",
    post: "Backend Developer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$68/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=256",
    company: "NVIDIA",
    datePosted: "4 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$75/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=openai.com&sz=256",
    company: "OpenAI",
    datePosted: "5 weeks ago",
    post: "Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA",
  },
];
  return (
    <div className = "parent">

        {jobOpenings.map(function(elem,idx){

          return <div key = {idx}>
            <Card brandLogo = {elem.brandLogo} company = {elem.company} datePosted = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2}
                pay = {elem.pay} location = {elem.location}/>
          </div>
        })}

    </div>
  )
}

export default App