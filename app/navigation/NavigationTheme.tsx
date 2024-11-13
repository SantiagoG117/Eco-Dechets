import AppColors from "@/constants/AppColors";
import { DefaultTheme } from "@react-navigation/native";


export default {
    //Copy all the properties of the DefaultTheme object
    ...DefaultTheme,
    //Override some of the properties of DefaultTheme
    colors: {
        //copy all the properties of DefaultTheme.colors
        ...DefaultTheme.colors,
        //Override properties
        primary: AppColors.primary,
        text: AppColors.primary,
        background: AppColors.white
    }
  }
