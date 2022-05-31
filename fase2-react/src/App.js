import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './css/App.css';


const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso de react', completed: false },
  { text: 'Hacer mindfulness', completed: true },
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  //comment 

  if (!searchValue.length >=1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      console.log(todoText, searchText)
      
      todoText.includes(searchText);
    })
  }


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
      ya que antes yo lo tenia como todo.text.. */}
      <TodoList>
        {searchedTodos.map((todo, i) => (
          <TodoItem 
            key={i} 
            text={todo.text}
            completed= {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
};

export default App;