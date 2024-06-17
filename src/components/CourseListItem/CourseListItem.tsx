import { Course } from "../../api/KidsTech/types";
import "./CourseListItem.scss";

const CourseListItem = ({ course }: { course: Course }) => {
  return (
    <div className="card">
      <div className="image" style={{ backgroundColor: course.bgColor }}>
        <img src={course.image} height={144} alt={course.name}></img>
      </div>
      <div className="title">{course.name}</div>
    </div>
  );
};

export default CourseListItem;
