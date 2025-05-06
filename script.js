// Функция для загрузки задач из localStorage
function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || []; // Получаем задачи из localStorage, если они есть
    todos.forEach(todo => {
      addTodoToList(todo); // Добавляем каждую задачу в список
    });
  }
  
  // Функция для добавления задачи в список
  function addTodo() {
    const input = document.getElementById("todo-input");
    const text = input.value.trim(); // Получаем текст задачи
  
    if (text === "") return; // Если текст пустой, не добавляем
  
    const todo = { text: text }; // Задача как объект с текстом
    addTodoToList(todo); // Добавляем задачу в список отображения
  
    // Получаем текущие задачи из localStorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo); // Добавляем новую задачу в массив
    localStorage.setItem("todos", JSON.stringify(todos)); // Сохраняем массив задач обратно в localStorage
  
    input.value = ""; // Очищаем поле ввода
  }
  
  // Функция для добавления задачи в список на экране
  function addTodoToList(todo) {
    const li = document.createElement("li");
    li.innerHTML = `${todo.text} <button onclick="removeTodo(this)">Удалить</button>`;
    
    document.getElementById("todo-list").appendChild(li);
  }
  
  // Функция для удаления задачи
  function removeTodo(button) {
    const li = button.parentElement;
    li.remove(); // Удаляем задачу из списка
  
    // Получаем все задачи из localStorage
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    
    // Удаляем задачу из массива
    const updatedTodos = todos.filter(todo => todo.text !== li.firstChild.textContent.trim());
    
    // Сохраняем обновлённый список задач в localStorage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  
  // Загружаем задачи при открытии страницы
  loadTodos();
  
  