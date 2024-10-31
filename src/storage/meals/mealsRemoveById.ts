import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsRemoveById(idRemove: string) {
    try {
        const storage = await mealsGetAll()
        const dataRemoved = storage.filter(meals => meals.id !== idRemove)
        const storageSave = JSON.stringify(dataRemoved)
        await AsyncStorage.setItem(MEALS_COLLECTION, storageSave);
    } catch (error) {
        throw error;
    }
}