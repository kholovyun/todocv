import ITodoList from "../interfaces/ITodoList";


export default interface IStateTypes {
    todos: ITodoList[] | null
    loading: boolean,
    currentList: ITodoList
}