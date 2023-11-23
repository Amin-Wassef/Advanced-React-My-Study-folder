import * as React from "react";
// import React from "react";
// import { cloneElement } from "react";
// cloneElement()

//React.Children.map(children, callback "OR" function) is helpful in this case.
//Notice that in React.Children.map => Children is uppercase.
//But the children between brackets is lowercase, it is the props.

//Both of them are top level API's

// React.cloneElement(element,[props])
// React.cloneElement(element,{props})
/**
 * It clones and makes a new copy of the provided element.
 * The first argument is the element you want to clone NOT A FUNCTION OR A COMPONENT.
 * So this element may be the return of the component or the function.
 * The second argument is the props that will be added and merged with your original props passed into the component.
 * Notice that react.Children.map  replaces the children in its place in the code sequence not just calls it.
 * And React.cloneElement also replaces the element -to be cloned- in its place in the code sequence not just calls it.
 */

function Row({ children, space }) {
  const childStyle = {
    marginLeft: `${space}px`,
  };

  return (
    <div style={{ display: "flex" }}>
      {/* {children}========>👇🏻 */}
      {React.Children.map(children, (child, index) => {
        // return child;
        return React.cloneElement(child, {
          /**The meaning of these {} is considered as follows:
           * It should be props in the meaning of: add and merge props to previous child props .. so:
           * props ==> What does this props will take as object?
           * props.styleForEachChild ==> What does this object equivalent for?
           * styleforEachChild = style{childStyle} = style{{margineLeft: `${space}px`}}
           * So we shortcut all the previous in the following code:
           */
          style: {
            ...child.props.style,
            //to merge the pervious style
            //but this line can be neglected in this case as there are no previous specific style props available for the children.
            //flex style is global for the div that is why it is nit affected.
            ...(index > 0 ? childStyle : null) /**null OR just => {} */,
            //Q: Why we "MUST" make a copy of the element first then adding and merging the new props?
            //A: As props in react are "IMMUTABLE" objects, so you "MUST" create a copy of the element first and then perform the transformation in the copy.
          },
        });
      })}
    </div>
  );
}

// React.cloneElement(<Row />);

function LiveOrder() {
  return (
    <div>
      <p className="titles-style">
        <div>React.cloneElement(element, [props])</div>
        <div>React.Children.map(children, callback)</div>
      </p>
      <Row space={"32"}>
        <p>Pizza Margareta</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>Daniel</p>
      </Row>
    </div>
  );
}

export default LiveOrder;
