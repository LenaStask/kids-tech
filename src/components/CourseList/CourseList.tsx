import { Course } from "../../api/KidsTech/types";
import CourseListItem from "../CourseListItem/CourseListItem";
import "./CourseList.scss";

const CourseList = ({ courses }: { courses: Course[] }) => {
  const items = courses.map((course) => (
    <CourseListItem key={course.id} course={course} />
  ));

  return <div className="list">{items}</div>;
};

export default CourseList;
