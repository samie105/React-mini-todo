import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ColorContext } from "../contexts/colorContext";
import { Coursecontext } from "../contexts/CourseContext";
import Category from "./CategoryPage";

const Home = () => {
  const { level, creating, isCreating } = useContext(Coursecontext);
  const { color, colorState, setColorState } = useContext(ColorContext);
  return (
    <div className="App">
      <div className="container">
        <div
          className="container-roller"
          style={{
            background: color[colorState].primary,
            transform: `rotate(${(-colorState + 1) * -90}deg)`,
          }}
        ></div>
        <div className="container-cover">
          <Category creating={creating} isCreating={isCreating} />
          <div className="tl-page">
            <div className="category-title">
              {" "}
              <div className="category-name ">
                {!creating && level[colorState]}
              </div>
              {!creating && (
                <div
                  className="create-button"
                  style={{ borderColor: color[colorState].primary }}
                >
                  <Link
                    to="create"
                    onClick={() => {
                      isCreating(true);
                      setColorState(3);
                    }}
                  >
                    {" "}
                    create
                  </Link>
                </div>
              )}{" "}
            </div>
            <div className="tl-items">
              <Outlet />
            </div>
          </div>

          {/* <TodoList /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
