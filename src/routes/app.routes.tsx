import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"

import { Home } from "@screens/Home"
import { Statistics } from "@screens/Statistics"
import { FormMeals } from "@screens/FormMeals"
import { FormPreview } from "@screens/FormPreview"
import { FormFinish } from "@screens/FormFinish"

import { MealsModel } from "@storage/meals/mealsModel"

type AppRoutes = {
    home: undefined
    stats: undefined
    meals: {
        id?: string
        meals?: MealsModel
    }
    preview: undefined
    finish: undefined
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home}/> 
            <Screen name="stats" component={Statistics}/> 
            <Screen name="meals" component={FormMeals}/> 
            <Screen name="preview" component={FormPreview}/> 
            <Screen name="finish" component={FormFinish}/> 
        </Navigator>
    )
}