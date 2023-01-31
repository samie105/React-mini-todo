import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Coursecontext } from "../contexts/CourseContext";
import { ColorContext } from "../contexts/colorContext";

const CreatePage = () => {
  const navigate = useNavigate();
  const { setColorState } = useContext(ColorContext);
  const {
    level,
    courses,
    setPlcourses,
    setCourses,
    setToolCourses,
    toolcourses,
    plcourses,

    isCreating,
  } = useContext(Coursecontext);
  const inputRef = useRef();
  const optionRef = useRef();

  // functions
  const createTodo = (e) => {
    e.preventDefault();

    if (
      optionRef.current.value === "Language" &&
      inputRef.current.value !== ""
    ) {
      const newcourse = [...courses];
      newcourse.push({
        courseName: inputRef.current.value,
        courseLevel: "Beginner",
        isEditing: false,
      });
      setCourses(newcourse);
      isCreating(false);

      navigate("/");
      setColorState(0);
    } else if (
      optionRef.current.value === "Plugins" &&
      inputRef.current.value !== ""
    ) {
      const newcourse = [...plcourses];
      newcourse.push({
        courseName: inputRef.current.value,
        courseLevel: "Beginner",
        isEditing: false,
      });
      setPlcourses(newcourse);
      isCreating(false);

      navigate("/Plugins");
      setColorState(1);
    } else if (
      optionRef.current.value === "Toolspace" &&
      inputRef.current.value !== ""
    ) {
      const newcourse = [...toolcourses];
      newcourse.push({
        courseName: inputRef.current.value,
        courseLevel: "Beginner",
        isEditing: false,
      });

      setToolCourses(newcourse);
      isCreating(false);

      navigate("/Toolspace");
      setColorState(2);
    }
    inputRef.current.value = "";
    // return newcourse;
  };

  return (
    <>
      <div className="create-container">
        <div className="create-header">Create a new todo</div>
        <div className="create-form">
          <form onSubmit={createTodo}>
            <div className="input-form w-full px-5 mt-10">
              <input
                ref={inputRef}
                className="w-full h-12"
                type="text"
                placeholder="To-do name"
              />
            </div>
            <div className="create-category">
              <div className="category-name py-5">Select a Category</div>
              <div className="px-5">
                <select ref={optionRef} className="h-12 px-5">
                  {level.map((c) => {
                    return <option>{c}</option>;
                  })}
                </select>
              </div>
            </div>

            <div className="button w-full text-center mt-8">
              {" "}
              <button className="px-7 py-3 font-bold bg-cyan-600 rounded-full">
                {" "}
                Create
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
