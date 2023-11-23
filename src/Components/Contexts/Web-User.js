import { UserProvider, useUser } from "./Context-User";

const LoggedInUser = () => {
  const { user } = useUser();
  //Destructuring for the useUser
  return (
    <p>
      Hello <span style={{ color: "Highlight" }}>{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2 style={{ textAlign: "right" }}>
        <LoggedInUser />
      </h2>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
      <h1
        style={{
          textAlign: "center",
          color: "burlywood",
        }}
      >
        Blog App
      </h1>
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h3 style={{ color: "blueviolet" }}> What is lorem ipsum?</h3>
      <p>
        Fugiat elit elit esse qui et. Nisi velit reprehenderit labore excepteur
        consequat ut proident sint officia dolore sit occaecat eu. Minim
        cupidatat est aliquip magna aliquip sint minim sunt et. Adipisicing ad
        commodo commodo eu non laborum eu laboris incididunt esse dolor veniam
        commodo eiusmod. Laborum duis ea cupidatat culpa. Exercitation ut duis
        ut nostrud occaecat consectetur officia tempor proident do pariatur
        voluptate aute dolor. Voluptate consequat amet et velit nostrud minim
        exercitation.
      </p>
      <p style={{ color: "mediumvioletred" }}>Written by: {user.name}</p>
      <p style={{ color: "mediumvioletred" }}>Communicate at: {user.email}</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Page />
    </>
  );
};

const WebUser = () => {
  return (
    <>
      <p className="titles-style">Contexts in React</p>
      <UserProvider>
        <App />
      </UserProvider>
    </>
  );
};

export default WebUser;
