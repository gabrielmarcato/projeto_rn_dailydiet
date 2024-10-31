import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealsModel } from "./mealsModel";

export async function mealsGetAllGroup() {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION)
        const meals: MealsModel[] = storage ? JSON.parse(storage) : []

        const groups = meals.reduce((groups: any, meals: MealsModel) => {
            const date = meals.date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(meals);
            return groups;
        }, {});

        const groupArrays = Object.keys(groups).map((date) => {
            return {
                title: date.replaceAll("/", "."),
                data: groups[date]
            };
        });
        return groupArrays
    } catch (error) {
        throw error;
    }
}