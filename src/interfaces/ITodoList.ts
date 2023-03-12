import ITask from "./ITask"

export default interface ITodoList {
    id: string
    title: string
    todos: ITask[]
}