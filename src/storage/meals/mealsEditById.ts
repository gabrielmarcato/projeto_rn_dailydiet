import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsModel } from "./mealsModel"
import { mealsGetAll } from "./mealsGetAll";

export async function mealsEditById(mealsEdit: MealsModel) {
    try {
        const storage = await mealsGetAll()
        const dataRemoved = storage.filter(meals => meals.id !== mealsEdit.id)
        const storageSave = JSON.stringify([...dataRemoved, mealsEdit])
        await AsyncStorage.setItem(MEALS_COLLECTION, storageSave);
    } catch (error) {
        throw error;
    }
}