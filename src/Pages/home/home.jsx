import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Pagemodal from "../page_modal/pageModal";
import data from "../data/sems.json";
import Navigationbar from "../navigationbar/navigationbar";
import Social from "../social/social";

function Home() {
  const [selectedSemester, setSelectedSemester] = useState("");
  const [courseId, setCourseId] = useState(0);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courseActive, setCourseActive] = useState(false);

  const semesters = [
    "semester 3",
    "semester 4",
    "semester 5",
    "semester 6",
    "semester 7",
    "semester 8",
  ];

  const courses = [
    "First Year",
    "Computer Science",
    "Electronics & Communication",
    "Electrical and Electronics",
    "Mechanical",
    "Civil",
  ];

  const handleChangeCourse = (e) => {
    setSelectedCourse(e.target.value);
    setSelectedSemester("");
  };

  const handleChangeSemester = (e) => {
    setSelectedSemester(e.target.value);
  };

  if (!courseActive) {
    return (
      <>
        <section className="landing-page">
          <Navigationbar />
          <section className="home-page">
            <div className="home-items">
              <h1 className="macenotes">
                MACE <br />
                <span>NOTES</span>
              </h1>
            </div>
            <div className="home-items">
              <select
                id="course"
                value={selectedCourse}
                onChange={handleChangeCourse}
                required
              >
                <option value="">Select a course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {selectedCourse != "First Year" && (
                <div>
                  <select
                    id="semster"
                    value={selectedSemester}
                    onChange={handleChangeSemester}
                    required
                  >
                    <option value="">Select a semester</option>
                    {semesters.map((semester) => (
                      <option key={semester} value={semester}>
                        {semester}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                className="search my-1"
                onClick={() => {
                  if (selectedCourse == "First Year") {
                    setCourseActive(true);
                    setSelectedSemester("semester");
                  }
                  if (selectedSemester != "" && selectedCourse != "") {
                    setCourseActive(true);
                  }
                }}
              >
                Search
              </button>
            </div>
          </section>
          <Social />
        </section>
      </>
    );
  }
  return (
    <>
      <div>
        <button onClick={() => setCourseActive(false)}>back</button>
      </div>
      <Pagemodal
        sem={data[selectedCourse][selectedSemester]}
        heading="Subjects"
      />
    </>
  );
}

export default Home;
