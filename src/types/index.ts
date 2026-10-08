export type Gender = "female" | "male" | "other" | "prefer_not_to_say";

export type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

export type GoalType =
  | "lose_weight"
  | "improve_eating"
  | "control_hunger"
  | "build_routine"
  | "improve_fitness";

export type MealType = "breakfast" | "lunch" | "dinner" | "snack" | "drink";

export type SubscriptionPlan = "free" | "premium";

export interface LandingStep {
  title: string;
  description: string;
}
