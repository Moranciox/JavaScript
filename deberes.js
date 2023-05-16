// Variables globales
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTaskInput');
const addTaskButton = document.getElementById('addTaskButton');

// Función para añadir una tarea a la lista
function addTask() {
  // Obtenemos el valor del input
    const taskName = newTaskInput.value;

  // Creamos un nuevo elemento de lista
    const newTask = document.createElement('li');
    newTask.classList.add('list-group-item');
    newTask.innerHTML = `
    <div class="input-group">
        <div class="form-check" style="padding-bottom: 10px;">
            <input class="form-check-input" type="checkbox" onchange="toggleTask(this)">
            <label class="form-check-label">${taskName}</label>
        </div>
        <div class="d-flex" style="position:absolute;right:10px;">
          <button class="btn btn-danger ms-auto" onclick="deleteTask(this)">Eliminar</button>
        </div>
    </div>
    `;

  // Agregamos el nuevo elemento a la lista
    taskList.appendChild(newTask);

  // Limpiamos el valor del input
    newTaskInput.value = '';
}

// Función para marcar o desmarcar una tarea como completada
function toggleTask(checkbox) {
    const label = checkbox.parentElement.querySelector('label');
    label.classList.toggle('text-decoration-line-through');
}

// Función para eliminar una tarea de la lista
function deleteTask(button) {
    const task = button.closest('li');
    task.remove();
}

// Evento para añadir una tarea cuando se hace clic en el botón
addTaskButton.addEventListener('click', addTask);

// Evento para añadir una tarea cuando se presiona Enter en el input
newTaskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});