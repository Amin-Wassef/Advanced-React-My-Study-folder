const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

const DessertsList = () => {
  const lowCaloriesDesserts = desserts
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      return a.calories - b.calories;
      //This is called Compared Function: https://www.w3schools.com/jsref/jsref_sort.asp
    })
    .map((dessert) => {
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });
  return (
    <>
      <p className="titles-style">
        Filtered and Sorted List Rendering in React
      </p>
      <ul>{lowCaloriesDesserts}</ul>
    </>
  );
};
export default DessertsList;
