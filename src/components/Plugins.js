import { useContext, useId, useRef } from "react";
import { ColorContext } from "../contexts/colorContext";
import { Coursecontext } from "../contexts/CourseContext";
import { motion as m } from "framer-motion";
const Plugins = () => {
  const id = useId();
  const inputRef = useRef();
  const courseRef = useRef();
  const { plcourses, setPlcourses } = useContext(Coursecontext);
  const { explvl, color, colorState } = useContext(ColorContext);
  const changeCourseLevel = (courselevel, index) => {
    const newCourses = [...plcourses];
    newCourses.forEach((course, i) => {
      if (i === index) {
        course.courseLevel = courselevel;
      }
    });
    setPlcourses(newCourses);
  };
  const editCourse = (e, index) => {
    e.preventDefault();
    const newCourses = [...plcourses];
    newCourses.forEach((course, i) => {
      if (i === index && inputRef.current.value !== "") {
        course.courseName = inputRef.current.value;

        inputRef.current.value = "";
        course.isEditing = false;
      }
    });
    setPlcourses(newCourses);
  };
  const Edit = (index) => {
    const newCourses = [...plcourses];
    newCourses.forEach((course, i) => {
      if (i === index) {
        course.isEditing = !course.isEditing;
      } else {
        course.isEditing = false;
      }
    });
    setPlcourses(newCourses);
  };

  return (
    <>
      {plcourses &&
        plcourses.map((course, index) => {
          return (
            <>
              <m.div
                initial={{ x: "100vh" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.75 }}
                exit={{ x: "-100vh" }}
                key={id}
                ref={courseRef}
                className="tl-item overflow-hidden"
                onClick={() => Edit(index)}
                style={{
                  background: color[colorState].btn,
                  borderLeft:
                    course.courseLevel === "beginner"
                      ? `5px ${explvl.beginner} solid`
                      : course.courseLevel === "medium"
                      ? `5px ${explvl.medium} solid`
                      : course.courseLevel === "advanced"
                      ? `5px ${explvl.advanced} solid`
                      : `5px ${explvl.beginner} solid`,
                }}
              >
                {course.courseName}

                {course.isEditing && (
                  <div
                    key={id}
                    className="editing-tool"
                    onClick={(e) => e.stopPropagation()}
                    onMouseOver={(e) => e.stopPropagation()}
                  >
                    <div
                      className="cont"
                      style={{ background: color[colorState].primary }}
                    >
                      <div className="triangle">
                        {" "}
                        <div className="inner"></div>
                      </div>
                      <div className="editbar">
                        <div className="inner-bar">
                          <div className="edit-input">
                            <form onSubmit={(e) => editCourse(e, index)}>
                              <input
                                ref={inputRef}
                                type="text"
                                style={{
                                  background: color[colorState].btn,
                                }}
                                placeholder={course.courseName}
                                // onChange={(e) => {
                                //   return EditText(e, index);
                                // }}
                              />{" "}
                              <button
                                style={{
                                  background: color[colorState].primary,
                                }}
                              >
                                Change
                              </button>
                            </form>
                          </div>
                          <div className="edit-level">
                            <div
                              onClick={() =>
                                changeCourseLevel("Beginner", index)
                              }
                              className="novice"
                              style={{ background: explvl.beginner }}
                            >
                              New
                            </div>
                            <div
                              onClick={() => changeCourseLevel("medium", index)}
                              className="medium"
                              style={{ background: explvl.medium }}
                            >
                              Better
                            </div>
                            <div
                              onClick={() =>
                                changeCourseLevel("advanced", index)
                              }
                              className="Expert"
                              style={{ background: explvl.advanced }}
                            >
                              Pro
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </m.div>
            </>
          );
        })}
    </>
  );
};

export default Plugins;
