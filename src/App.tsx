import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { getCourses } from "./api/KidsTech/Client";
import { Course } from "./api/KidsTech/types";
import CourseList from "./components/CourseList/CourseList";
import "./App.scss";

function App() {
  const [data, setData] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);
  const [activeTag, setActiveTag] = useState<string>("");

  useEffect(() => {
    getCourses()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleActiveTagChange = (value: string) => {
    setActiveTag(value);
  };

  const courses = data.filter(
    (item) => item.tags.includes(activeTag) || activeTag === ""
  );

  const tags = Array.from(new Set(data.map((item) => item.tags).flat()));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="App">
      <Navbar tags={tags} onChange={handleActiveTagChange} />
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
