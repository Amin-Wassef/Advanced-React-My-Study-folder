import "./ThemeStyles.css";
import { useTheme } from "../ThemeContext";

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
        //Basicly we do not need these two previous code lines to get the checkbox
        //As we will get a good toggle button (checkbox) without them
        //But the checkbox default state is unchecked (off) (false)
        //So we needed this context and values to start with it as already checked (on) (true)
      />
      <span className="slider round" />
    </label>
  );
};

export default SwitchTheme;
