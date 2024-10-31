import { MealsModel } from "@storage/meals/mealsModel"

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined
            stats: undefined
            meals: {
                id?: string
                meals?: MealsModel
            }
            preview: {
                id: string
                diet: string
            }
            finish: {
                diet: string
            }
        }
    }
}