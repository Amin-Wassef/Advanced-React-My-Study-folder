import "./App.css";
import WebUser from "./Components/Contexts/Web-User";
import ControlledForms1 from "./Components/Forms/Controlled-Forms-1";
import ControlledForms2 from "./Components/Forms/Controlled-Forms-2";
import GoalForm from "./Components/Hooks/UseStateAmin";
import GoalApp from "./Components/Hooks/UseStateMeta";
import Keys from "./Components/Keys";
import ListRendering from "./Components/Lists/List-Rendering";
import UseEffectSimple from "./Components/Hooks/useEffectSimple";
import ToggleButton from "./Components/Hooks/useEffect";
import ConfirmationDialog from "./Components/props.children/Dialog";
import Result from "./Components/props.children/Allert";
import LiveOrder from "./Components/React-api's/ReactDOTcloneElement_ReactDOTChildrenDOTmap";
import AllButtons from "./Components/SpreadOperator";
import Pointer from "./Components/Cross-Cutting-Concerns/HigherOrderComponent-(HOC)-WrappedConponent";
import Counts from "./Components/Cross-Cutting-Concerns/Render-props";
import LinkTesting from "./Components/Testing/LinkTest";
import DessertsList from "./Components/Lists/List-Rendering-With-Sorting";
import UncontrolledForm from "./Components/Forms/Uncontrolled-Form";
import UncontrolledFileForm from "./Components/Forms/Uncontrolled-Forms-fileForm";
import RegistartionFormAmin from "./Components/Forms/RegistrationFormAmin";
import RegistartionFormCoursera from "./Components/Forms/RegistrationFormCoursera";
import SwitchTheme from "./Components/Contexts/ThemeSwitch/ThemeIndex";
import { ThemeProvider } from "./Components/Contexts/ThemeContext";
import GiftCardApp from "./Components/Hooks/UseState";
import Fetch from "./Components/Fetch";
import TextInputWithFocusButton from "./Components/Hooks/UseRefHook";
import UseReducer from "./Components/Hooks/useReducer";
import Custom from "./Components/Hooks/CustomHook";
import Radio from "./Components/React-api's/Build-A-Radio-Group";
import BatteryStatusApp from "./Components/Hooks/BatteryStatusAlert";

function App() {
  return (
    <>
      <BatteryStatusApp />
      <ListRendering />
      <DessertsList />
      <Keys />
      <ControlledForms1 />
      <ControlledForms2 />
      <RegistartionFormAmin />
      <RegistartionFormCoursera />
      <UncontrolledForm />
      <UncontrolledFileForm />
      <WebUser />
      <ThemeProvider>
        <SwitchTheme />
      </ThemeProvider>
      <GoalForm />
      <GoalApp />
      <GiftCardApp />
      <UseReducer />
      <UseEffectSimple />
      <ToggleButton />
      <Fetch />
      <TextInputWithFocusButton />
      <ConfirmationDialog />
      <Result />
      <LiveOrder />
      <Radio />
      <AllButtons />
      <Pointer />
      <Counts />
      <Custom />
      <LinkTesting />
    </>
  );
}

export default App;
