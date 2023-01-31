import { useContext } from "react";
import { Link } from "react-router-dom";
import { ColorContext } from "../contexts/colorContext";

const Category = ({ creating, isCreating }) => {
  const { color, colorState, setColorState } = useContext(ColorContext);

  return (
    <>
      <div className="category-page">
        <div className="title">TODO</div>
        <div className="categories">
          <Link to="/">
            <div
              style={{
                background: colorState === 0 ? color[colorState].primary : " ",
              }}
              className={
                colorState === 0
                  ? "language category-item active"
                  : "language category-item"
              }
              onClick={() => {
                setColorState(0);
                isCreating(false);
              }}
            >
              Language
            </div>
          </Link>
          <Link to="/Plugins">
            {" "}
            <div
              style={{
                background: colorState === 1 ? color[colorState].primary : " ",
              }}
              className={
                colorState === 1
                  ? "plugins category-item active"
                  : "plugiins category-item"
              }
              onClick={() => {
                setColorState(1);
                isCreating(false);
              }}
            >
              Plugins
            </div>
          </Link>
          <Link to="Toolspace">
            {" "}
            <div
              style={{
                background: colorState === 2 ? color[colorState].primary : " ",
              }}
              className={
                colorState === 2
                  ? "toolspace category-item active"
                  : "toolspace category-item"
              }
              onClick={() => {
                setColorState(2);
                isCreating(false);
              }}
            >
              Toolspace
            </div>{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Category;
