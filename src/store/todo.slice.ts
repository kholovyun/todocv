import {createSlice} from "@reduxjs/toolkit"
import IStateTypes from "./stateTypes"


const namespace = 'todos'


export const  todoSlice = createSlice({
    name: namespace,
    initialState : {
        todos: [
            {id : 'e3421dddacw31',title: 'фвфвфвф', todos: [{text: "aaaaaa", completed: 1}, {text: "bbbbbb", completed: 0}, {text: "ccccccccc", completed: 1}]},
            {id : 'e1dddacw31',title: 'фвфвфвф', todos: [{text: "aaaaaa", completed: 0}, {text: "bbbbbb", completed: 0}, {text: "ccccccccc", completed: 0}]},
        ],
        loading : false,
        currentList: {} 
    } as IStateTypes, 
    reducers: {
        getData : (state): void => {
            const data = localStorage.getItem('todos')
            state.todos = data? JSON.parse(data) : []
        },
        addToDoList : (state, action): void => {
            state.todos = [...state.todos!, action.payload]
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        deleteToDoList : (state, action): void => {
            state.todos!.splice(action.payload, 1)
            localStorage.setItem('todos', JSON.stringify(state.todos))
        },
        selectToDoList : (state, action): void => {
            state.currentList = action.payload
        },
        updateToDoList : (state, action): void => {
           const index = state.todos!.findIndex(todo => todo.id === action.payload[0])
           const newArr = [...state.todos!]
           newArr[index].todos = action.payload[1]
           state.todos = newArr
           localStorage.setItem('todos', JSON.stringify(state.todos))
        }
    }
})

export const { addToDoList, deleteToDoList, selectToDoList, updateToDoList, getData} = todoSlice.actions
