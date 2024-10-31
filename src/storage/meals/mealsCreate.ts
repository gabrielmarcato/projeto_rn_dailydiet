import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig"
import { MealsModel } from "./mealsModel"
import { mealsGetAll } from "./mealsGetAll"
import uuid from "react-native-uuid"

export async function mealsCreate(newMeal: MealsModel) {
    try {
        const model: MealsModel = {...newMeal, id: String(uuid.v4())}
        const storageMeals = await mealsGetAll()

        const storage = JSON.stringify([...storageMeals, model])
        await AsyncStorage.setItem(MEALS_COLLECTION, storage);
    } catch (error) {
        throw error
    }
}