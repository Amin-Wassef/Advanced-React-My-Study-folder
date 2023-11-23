import { useEffect, useState } from "react";

const withMousePosition = (WrappedComponent) => {
  //This is the HOC here
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      //I don't understand why we need the useEffect here as no difference in the result but God wiiling I understand later
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      window.addEventListener("mousemove", handleMousePositionChange);

      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <>
      <p>
        Mouse Position is
        <div>X: {mousePosition.x}</div>
        <div>Y: {mousePosition.y}</div>
      </p>
    </>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <>
      ({mousePosition.x}, {mousePosition.y})
    </>
  );
};
const PanelMouseTraker = withMousePosition(PanelMouseLogger);
const PointMouseTraker = withMousePosition(PointMouseLogger);

const Pointer = () => {
  return (
    <>
      <p className="titles-style">
        Higher Order Component (HOC) Wrapped Conponent
      </p>
      <div>
        <PanelMouseTraker />
      </div>
      <div>
        <PointMouseTraker />
      </div>
    </>
  );
};

export default Pointer;

//Have a look also on the lesson video (5:17:30 - 5:18:30)
