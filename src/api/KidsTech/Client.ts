import { Course } from "./types";

const getCourses = async (): Promise<Course[]> => {
  const res = await fetch("https://logiclike.com/docs/courses.json");
  if (!res.ok) {
    throw Error("Could not fetch data from this resourse!");
  }
  return await res.json();
};

export { getCourses };
