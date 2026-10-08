export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          display_name: string | null;
          avatar_url: string | null;
          birth_date: string | null;
          gender: string | null;
          height_cm: number | null;
          role: "user" | "admin";
          onboarded: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          display_name?: string | null;
          avatar_url?: string | null;
          birth_date?: string | null;
          gender?: string | null;
          height_cm?: number | null;
          role?: "user" | "admin";
          onboarded?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          display_name?: string | null;
          avatar_url?: string | null;
          birth_date?: string | null;
          gender?: string | null;
          height_cm?: number | null;
          role?: "user" | "admin";
          onboarded?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      goals: {
        Row: {
          id: string;
          user_id: string;
          goal_type: string;
          start_weight_kg: number | null;
          target_weight_kg: number | null;
          current_weight_kg: number | null;
          activity_level: string | null;
          active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          goal_type: string;
          start_weight_kg?: number | null;
          target_weight_kg?: number | null;
          current_weight_kg?: number | null;
          activity_level?: string | null;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          goal_type?: string;
          start_weight_kg?: number | null;
          target_weight_kg?: number | null;
          current_weight_kg?: number | null;
          activity_level?: string | null;
          active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_preferences: {
        Row: {
          id: string;
          user_id: string;
          wake_time: string | null;
          sleep_time: string | null;
          breakfast_time: string | null;
          lunch_time: string | null;
          dinner_time: string | null;
          meals_per_day: number | null;
          favorite_foods: Json;
          disliked_foods: Json;
          dietary_restrictions: Json;
          available_foods: Json;
          notifications_enabled: boolean;
          notification_water: boolean;
          notification_meals: boolean;
          notification_workout: boolean;
          notification_sleep: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          wake_time?: string | null;
          sleep_time?: string | null;
          breakfast_time?: string | null;
          lunch_time?: string | null;
          dinner_time?: string | null;
          meals_per_day?: number | null;
          favorite_foods?: Json;
          disliked_foods?: Json;
          dietary_restrictions?: Json;
          available_foods?: Json;
          notifications_enabled?: boolean;
          notification_water?: boolean;
          notification_meals?: boolean;
          notification_workout?: boolean;
          notification_sleep?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          wake_time?: string | null;
          sleep_time?: string | null;
          breakfast_time?: string | null;
          lunch_time?: string | null;
          dinner_time?: string | null;
          meals_per_day?: number | null;
          favorite_foods?: Json;
          disliked_foods?: Json;
          dietary_restrictions?: Json;
          available_foods?: Json;
          notifications_enabled?: boolean;
          notification_water?: boolean;
          notification_meals?: boolean;
          notification_workout?: boolean;
          notification_sleep?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      daily_routines: {
        Row: {
          id: string;
          user_id: string;
          routine_date: string;
          generated_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          routine_date: string;
          generated_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          routine_date?: string;
          generated_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      routine_tasks: {
        Row: {
          id: string;
          routine_id: string;
          user_id: string;
          scheduled_time: string;
          title: string;
          description: string | null;
          icon: string | null;
          category: string;
          completed: boolean;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          routine_id: string;
          user_id: string;
          scheduled_time: string;
          title: string;
          description?: string | null;
          icon?: string | null;
          category: string;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          routine_id?: string;
          user_id?: string;
          scheduled_time?: string;
          title?: string;
          description?: string | null;
          icon?: string | null;
          category?: string;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      habit_logs: {
        Row: {
          id: string;
          user_id: string;
          habit_key: string;
          log_date: string;
          completed: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          habit_key: string;
          log_date: string;
          completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          habit_key?: string;
          log_date?: string;
          completed?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      water_logs: {
        Row: {
          id: string;
          user_id: string;
          log_date: string;
          amount_ml: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          log_date: string;
          amount_ml: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          log_date?: string;
          amount_ml?: number;
          created_at?: string;
        };
      };
      weight_logs: {
        Row: {
          id: string;
          user_id: string;
          weight_kg: number;
          logged_at: string;
          note: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          weight_kg: number;
          logged_at: string;
          note?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          weight_kg?: number;
          logged_at?: string;
          note?: string | null;
          created_at?: string;
        };
      };
      sleep_logs: {
        Row: {
          id: string;
          user_id: string;
          log_date: string;
          sleep_time: string;
          wake_time: string;
          duration_minutes: number | null;
          quality: number | null;
          note: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          log_date: string;
          sleep_time: string;
          wake_time: string;
          duration_minutes?: number | null;
          quality?: number | null;
          note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          log_date?: string;
          sleep_time?: string;
          wake_time?: string;
          duration_minutes?: number | null;
          quality?: number | null;
          note?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      recipes: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string | null;
          category: string;
          image_url: string | null;
          ingredients: Json;
          steps: Json;
          prep_minutes: number | null;
          difficulty: string | null;
          servings: number | null;
          nutrition_approx: Json | null;
          is_premium: boolean;
          published: boolean;
          created_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description?: string | null;
          category: string;
          image_url?: string | null;
          ingredients?: Json;
          steps?: Json;
          prep_minutes?: number | null;
          difficulty?: string | null;
          servings?: number | null;
          nutrition_approx?: Json | null;
          is_premium?: boolean;
          published?: boolean;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string | null;
          category?: string;
          image_url?: string | null;
          ingredients?: Json;
          steps?: Json;
          prep_minutes?: number | null;
          difficulty?: string | null;
          servings?: number | null;
          nutrition_approx?: Json | null;
          is_premium?: boolean;
          published?: boolean;
          created_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      recipe_favorites: {
        Row: {
          id: string;
          user_id: string;
          recipe_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          recipe_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          recipe_id?: string;
          created_at?: string;
        };
      };
      workout_logs: {
        Row: {
          id: string;
          user_id: string;
          workout_key: string;
          workout_name: string;
          duration_minutes: number | null;
          completed_at: string;
          note: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          workout_key: string;
          workout_name: string;
          duration_minutes?: number | null;
          completed_at?: string;
          note?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          workout_key?: string;
          workout_name?: string;
          duration_minutes?: number | null;
          completed_at?: string;
          note?: string | null;
          created_at?: string;
        };
      };
      food_logs: {
        Row: {
          id: string;
          user_id: string;
          meal_type: string;
          description: string;
          photo_path: string | null;
          logged_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          meal_type: string;
          description: string;
          photo_path?: string | null;
          logged_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          meal_type?: string;
          description?: string;
          photo_path?: string | null;
          logged_at?: string;
          created_at?: string;
        };
      };
      food_analysis: {
        Row: {
          id: string;
          food_log_id: string;
          user_id: string;
          status: string;
          meal_name: string | null;
          protein: string | null;
          carbs: string | null;
          fats: string | null;
          vegetables_fiber: string | null;
          portion_estimate: string | null;
          recommendation: string | null;
          positives: Json | null;
          adjustments: Json | null;
          alternatives: Json | null;
          raw_response: Json | null;
          analyzed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          food_log_id: string;
          user_id: string;
          status?: string;
          meal_name?: string | null;
          protein?: string | null;
          carbs?: string | null;
          fats?: string | null;
          vegetables_fiber?: string | null;
          portion_estimate?: string | null;
          recommendation?: string | null;
          positives?: Json | null;
          adjustments?: Json | null;
          alternatives?: Json | null;
          raw_response?: Json | null;
          analyzed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          food_log_id?: string;
          user_id?: string;
          status?: string;
          meal_name?: string | null;
          protein?: string | null;
          carbs?: string | null;
          fats?: string | null;
          vegetables_fiber?: string | null;
          portion_estimate?: string | null;
          recommendation?: string | null;
          positives?: Json | null;
          adjustments?: Json | null;
          alternatives?: Json | null;
          raw_response?: Json | null;
          analyzed_at?: string | null;
          created_at?: string;
        };
      };
      ai_conversations: {
        Row: {
          id: string;
          user_id: string;
          role: "user" | "assistant" | "system";
          content: string;
          context: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role: "user" | "assistant" | "system";
          content: string;
          context?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: "user" | "assistant" | "system";
          content?: string;
          context?: Json | null;
          created_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          category: string;
          title: string;
          body: string | null;
          scheduled_for: string | null;
          read_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          category: string;
          title: string;
          body?: string | null;
          scheduled_for?: string | null;
          read_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          category?: string;
          title?: string;
          body?: string | null;
          scheduled_for?: string | null;
          read_at?: string | null;
          created_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          plan: string;
          status: string;
          started_at: string;
          expires_at: string | null;
          external_payment_id: string | null;
          metadata: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          plan?: string;
          status?: string;
          started_at?: string;
          expires_at?: string | null;
          external_payment_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          plan?: string;
          status?: string;
          started_at?: string;
          expires_at?: string | null;
          external_payment_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_users: {
        Row: {
          id: string;
          admin_user_id: string;
          action: string;
          target_table: string | null;
          target_id: string | null;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          admin_user_id: string;
          action: string;
          target_table?: string | null;
          target_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          admin_user_id?: string;
          action?: string;
          target_table?: string | null;
          target_id?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: {
      is_admin: {
        Args: Record<string, never>;
        Returns: boolean;
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
