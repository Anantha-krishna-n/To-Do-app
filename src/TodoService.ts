import TodoType from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
    // Get todos
    getTodos: (): TodoType[] => {
        const todoStr = localStorage.getItem(LOCAL_STORAGE_KEY);
        return todoStr ? JSON.parse(todoStr) : [];
    },

    // Adding todos
    addTodos: (text: string): TodoType => {
        const todos = TodoService.getTodos();
        const newTodo: TodoType = { id: todos.length + 1, text, completed: false };
        const updatedTodos = [...todos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        return newTodo;
    },

    // Update Todo
    updateTodo: (todo: TodoType): TodoType => {
        const todos = TodoService.getTodos();
        const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
        return todo;
    },

    // Delete Todo
    deleteTodo: (id: number): void => {
        const todos = TodoService.getTodos();
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
};

export default TodoService;
