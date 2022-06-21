import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import Award from "@mui/icons-material/EmojiEvents";
import Community from "@mui/icons-material/People";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University, Institut Teknologi Adhi Tama Surabaya
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <br />
          <li>Informatics Engineering</li>
          <li>
            software engineering laboratory assistant
            <p>
              Assisting Informatics Lecturers and Students in the OOP practicum
              (Object Oriented Programming) in JAVA and Database practicum, as
              student mentor and teacher
            </p>
          </li>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2018 - October 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            PT.Ternaknesia Farm Innovation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Internship as Android Developer
          </h4>
          <p>
            Fully responsible for the creation of the Financial Report Recording
            software application Android Based Farm
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2021 - September 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            PT. Bixbox Teknologi Perkasa
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Intensif Probation and Staff IT
          </h4>
          <p>Responsible as Backend Developer in Golang programming language</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Award />}
        >
          <h3 className="vertical-timeline-element-title">Warung Pintar</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Finalis Hackathon Pintar 1.0
          </h4>
          <p>
            Create an Android-based application with the application name
            Nggolleh (Nggeledrek oleh oleh)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Mei 2019 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<Community />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Science Indonesia East Java area
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Internal Management as a member of the Advocate team
          </h4>
          <br />

          <p>
            Serving as a forerunner of cooperation and communication with
            agencies/communities outside of DSI East Java for data
            implementation issues and data usage initiation
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
