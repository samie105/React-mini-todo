import { createContext, useState } from "react";

export const Coursecontext = createContext();

const CoursecontextProvider = (props) => {
  const [creating, isCreating] = useState(false);
  const [level] = useState(["Language", "Plugins", "Toolspace"]);
  const [courses, setCourses] = useState([
    {
      courseName: "HTML & CSS",
      courseLevel: "Beginner",
      isEditing: false,
    },
    {
      courseName: "JavaScript",
      courseLevel: "medium",
      isEditing: false,
    },
    {
      courseName: "React JS",
      courseLevel: "advanced",
      isEditing: false,
    },
  ]);
  const [plcourses, setPlcourses] = useState([
    {
      courseName: "CameraJs",
      courseLevel: "Beginner",
      isEditing: false,
    },
    {
      courseName: "Animate CSS",
      courseLevel: "medium",
      isEditing: false,
    },
    {
      courseName: "AOS",
      courseLevel: "advanced",
      isEditing: false,
    },
  ]);
  const [toolcourses, setToolCourses] = useState([
    {
      courseName: "Adobe XD",
      courseLevel: "Beginner",
      isEditing: false,
    },
    {
      courseName: "Adobe Figma",
      courseLevel: "medium",
      isEditing: false,
    },
    {
      courseName: "Blender 3D",
      courseLevel: "advanced",
      isEditing: false,
    },
  ]);
  return (
    <Coursecontext.Provider
      value={{
        creating,
        isCreating,
        courses,
        setCourses,
        plcourses,
        setPlcourses,
        toolcourses,
        setToolCourses,
        level,
      }}
    >
      {props.children}
    </Coursecontext.Provider>
  );
};

export default CoursecontextProvider;
