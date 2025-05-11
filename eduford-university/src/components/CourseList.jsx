import React from "react";

import { courses } from "../data/data";
import CourseCard from "./CourseCard";
const CourseList = () => {
  return (
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 py-8 ">
      {courses.map((course, index) => (
        <div key={index}>
          <CourseCard  key={course} course={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
