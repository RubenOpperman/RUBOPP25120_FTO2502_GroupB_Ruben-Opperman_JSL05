// array of objects containing tasks
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 4,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 5,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 6,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

const todoContainer = document.getElementById("todo-container");
const doingContainer = document.getElementById("doing-container");
const doneContainer = document.getElementById("done-container");
const modal = document.getElementById("edit-modal");
const titleInput = document.getElementById("modal-title");
const descriptionInput = document.getElementById("modal-description");
const statusSelect = document.getElementById("modal-status");
const closeModalBtn = document.getElementById("close-modal");

const addModal = document.getElementById("add-modal");

let selectedTask = null;

/**
 * This function activates when a task is clicked and then retrieves the task clicked and opens a modal.
 *
 * @param {object} tasks - id, title, description and status.
 */
function openModal(task) {
  selectedTask = task;

  titleInput.value = task.title;
  descriptionInput.value = task.description;
  statusSelect.value = task.status;

  modal.showModal();
}

/**
 * This function closes the modal.
 */
function closeModal() {
  modal.close();
  selectedTask = null;
  titleInput.value = "";
  descriptionInput.value = "";
  statusSelect.value = "";
}
/**
 * This function takes in an array and sorts the tasks with the status todo and displays them dynamically.
 * @param {array} tasks -array of objects.
 */
function loadTodoTasks(tasks) {
  tasks.forEach((task) => {
    if (task.status === "todo") {
      const todoTask = document.createElement("div");
      todoTask.innerText = task.title;

      todoTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      todoTask.addEventListener("click", () => openModal(task));

      todoContainer.appendChild(todoTask);
    }
  });
}
/**
 * This function takes in an array and sorts the tasks with the status doing and displays them dynamically.
 * @param {array} tasks -array of objects.
 */
function loadDoingTasks(tasks) {
  tasks.forEach((task) => {
    if (task.status === "doing") {
      const doingTask = document.createElement("div");
      doingTask.innerText = task.title;

      doingTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      doingTask.addEventListener("click", () => openModal(task));

      doingContainer.appendChild(doingTask);
    }
  });
}
/**
 * This function takes in an array and sorts the tasks with the status done and displays them dynamically.
 * @param {array} tasks -array of objects.
 *
 */
function loadDoneTasks(tasks) {
  tasks.forEach((task) => {
    if (task.status === "done") {
      const doneTask = document.createElement("div");
      doneTask.innerText = task.title;

      doneTask.classList.add(
        "bg-primary-color",
        "text-primary-font-color",
        "leading-[19px]",
        "text-sm",
        "font-bold",
        "mb-5",
        "py-5",
        "pl-5",
        "rounded-md",
        "shadow-lg"
      );
      doneTask.addEventListener("click", () => openModal(task));

      doneContainer.appendChild(doneTask);
    }
  });
}

closeModalBtn.addEventListener("click", closeModal);

loadTodoTasks(initialTasks);
loadDoingTasks(initialTasks);
loadDoneTasks(initialTasks);
