const desserts = [
  {
    id: 1,
    title: "Tiramissu",
    description: "The best tiramissu in town",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flavoursholidays.co.uk%2Fblog%2Ftiramisu-recipe%2F&psig=AOvVaw3eeEdfKNapz_hbPGqeiz4o&ust=1697642009470000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi4prmv_YEDFQAAAAAdAAAAABAE",
    price: "$5.00",
  },
  {
    id: 2,
    title: "Lemon Ice Cream",
    description: "Mind blowing tast",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficecreamfromscratch.com%2Flemon-ice-cream%2F&psig=AOvVaw1wyZRoa4KipwMsClIX8o4J&ust=1697642230470000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCs1KKw_YEDFQAAAAAdAAAAABAJ",
    price: "$4.50",
  },
  {
    id: 3,
    title: "Chocolate mousse",
    description: "Unexplored flavour",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbakesbybrownsugar.com%2Fchocolate-mousse-trifle%2F&psig=AOvVaw3_ICcN7f_aGWvP0GKxxre6&ust=1697642331867000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICq-9Kw_YEDFQAAAAAdAAAAABAJ",
    price: "$6.00",
  },
];

//If Vanilla Javascript:

/**
function listRendering() {

  const desert = deserts.map(choose);
  function choose(deserts) {
    return
    {
        title: deserts.title,
        price: deserts.price
    }
  }
  
                    OR

  const desert = deserts.map(deserts => {
    return
    {
        title: deserts.title,
        price: deserts.price
    }
  });

  console.log(desert);
  return desert;
}
export default ListRendering;
*/

// If React:

function ListRendering() {
  const dessert = desserts.map((desserts) => {
    const list = `Name: ${desserts.title} => Price: ${desserts.price}`;
    return <li key={`Desert: ${desserts.id}`}>{list}</li>;
  });
  return (
    <>
      <p className="titles-style">List Rendering in React</p>
      <ul>{dessert}</ul>
    </>
  );
}

export default ListRendering;
