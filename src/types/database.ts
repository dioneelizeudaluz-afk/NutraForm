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
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
