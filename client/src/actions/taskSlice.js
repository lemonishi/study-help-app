import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: 1, title: "hello", content: "content" }],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        title: action.payload,
        content: action.payload,
      };
      state.tasks.push(task);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
