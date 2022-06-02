import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    

    return (
        <React.Fragment>
            <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
            />

            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />

            {/* Bob corrigió este map, de key, le puso el índice porque siempre es único,
            ya que antes yo lo tenia como todo.text.. jeje  */}
            <TodoList>
            {/* {searchedTodos.map((todo, i) => (
                <TodoItem 
                key={i} 
                text={todo.text}
                completed= {todo.completed}
                onComplete={() => completeTodo(i)}
                onDelete={() => deleteTodo(i)}
                /> */}

            {searchedTodos.map((todo) => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed= {todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
        );
}

export { AppUI };