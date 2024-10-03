import workoutService from "../services/workouts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { Workout, Exercise, NewWorkout, NewExercise } from "../types";

type WorkoutState = Workout[];
const initialState: WorkoutState = [];

const workoutSlice = createSlice({
    name: 'workouts',
    initialState,
    reducers: {
        setWorkouts(_state, action: PayloadAction<Workout[] | undefined>) {
            return action.payload;
        },
        appendWorkout(state, action: PayloadAction<Workout | undefined>) {
            if (action.payload) {
                state.push(action.payload);
            }
        },
        appendExercise(state, action: PayloadAction<{workoutId: string, addedExercise: Exercise}>) {
            const { workoutId, addedExercise } = action.payload;
            const workout = state.find(w => w.id === workoutId);
            if (workout) {
                workout.exercises.push(addedExercise);
            }
        },
        updateWorkoutState(state, action: PayloadAction<Workout>) {
            const updatedWorkout = action.payload;
            const index = state.findIndex(w => w.id === updatedWorkout.id);
            if (index !== -1) {
                state[index] = updatedWorkout;
            }
        }
    }
});

export const { setWorkouts, appendWorkout, appendExercise, updateWorkoutState } = workoutSlice.actions;

export const initializeWorkouts = () => {
    return async (dispatch: AppDispatch) => {
        const workouts = await workoutService.getAll();
        dispatch(setWorkouts(workouts));
    };
};

export const createWorkout = (data: NewWorkout) => {
    return async (dispatch: AppDispatch) => {
        const newWorkout = await workoutService.create(data);
        dispatch(appendWorkout(newWorkout));
    };
};

export const addExercise = (workoutId: string, data: NewExercise) => {
    return async (dispatch: AppDispatch) => {
        try {
            const addedExercise = await workoutService.createExercise(workoutId, data);
            if (addedExercise) {
                dispatch(appendExercise({workoutId, addedExercise}));
            }
        }
        catch (error) {
            console.error('Failed to add exercise:', error);
            throw error;
        }
    };
};

export const updateWorkout = (updatedWorkout: Workout) => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await workoutService.update(updatedWorkout.id, updatedWorkout);
            if (result) {
                dispatch(updateWorkoutState(result));
            }
        }
        catch (error) {
            console.error('Failed to update:', error);
            throw error;
        }
    };
};

export const selectWorkouts = (state: RootState) => state.workouts;

export default workoutSlice.reducer;
