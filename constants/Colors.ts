/* eslint-disable */
// Declare constant with a specific type
const lightMode = {
  background: "rgba(245, 245, 245, 1)",
  tabbarIcons: "white",
  tabbarLabelColor: "rgba(0, 0, 0 , 0.42)",
  activeTabbarIcons: "black",
  primary1: "white",
  primary2: "rgba(0, 6, 18, 0.95)",
  primary3: "black",
  primary4: "rgba(0, 0, 0, 0.84)",
  default1: "rgba(73, 166, 106, 1)",
  default2: "rgba(256, 256, 256, 0.7)",
  betIdAllBackgroundColor: "transparent",
  betIdBackgroundColor: "transparent",
  betIdBackgroundIconColor: "rgba(180, 180, 180, 0.35)",
  betIdTextColor: "black",
  transactionTemplateBackground: "transparent",
  transactionTemplateBackgroundinner: "transparent",
  inputBackground: "white",
  welcomeText: "rgba(0, 0, 0, 1)",
  placeHolderTextColor: "rgba(0, 0, 0, .45)",
  countrySelectionBorderColor: "rgba(0, 0, 0, 0.3)",
  countrySelectionTextColor: "white",
  statusBar: "light-content",
  depositBackground: "rgba(128, 128, 128, 0.1)",
  toastModalBackgroundColor: "rgba(250, 250, 250, 0.95)",
  toastText: "rgba(0, 0, 0, 1)",
};
const darkMode = {
  background: "#0C121D",
  tabbarBackground: "#0C121D",
  tabbarIcons: "#0C121D",
  activeTabbarIcons: "white",
  primary1: "white",
  primary2: "rgba(0, 6, 18, 0.95)",
  primary3: "white",
  primary4: "rgba(256, 256, 256, 0.84)",
  default1: "rgba(73, 166, 106, 1)",
  default2: "rgba(256, 256, 256, 0.7)",
  betIdAllBackgroundColor: "transparent",
  betIdBackgroundColor: "transparent",
  betIdBackgroundIconColor: "rgba(180, 180, 180, .2)",
  betIdTextColor: "white",
  welcomeText: "rgba(256, 256, 256, 0.9)",
  inputBackground: "rgba(50, 50, 50, 1)",
  placeHolderTextColor: "rgba(256, 256, 256, 0.45)",
  countrySelectionBorderColor: "rgba(256, 256, 256, 0.3)",
  countrySelectionTextColor: "black",
  statusBar: "dark-content",
  depositBackground: "rgba(0, 0, 0, 0.7)",
  toastModalBackgroundColor: "rgba(10, 10, 10, 0.8)",
  toastText: "rgba(256, 256, 256, 0.9)",
};
let Colors: any = null;
let constant: any = 2 ;
const switchConstantValue = (): void => {
  if (constant === 1) {
    constant = 2;
    Colors = darkMode;
    console.log("achieved 1");
  } else if (constant === 2) {
    constant = 1;
    Colors = lightMode;
    console.log("achieved 2");
  }
};
switchConstantValue();

export {Colors as default, switchConstantValue};
