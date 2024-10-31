import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsModel } from "./mealsModel"

export async function mealsGetAll() {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
        const meals: MealsModel[] = storage ? JSON.parse(storage) : []
        return meals
    } catch (error) {
        throw error;
    }
}