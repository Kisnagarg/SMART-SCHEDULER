// Task Scheduling Functionality
const taskForm = document.getElementById('taskForm');
const taskList = document.querySelector('#taskList ul');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const taskName = document.getElementById('task').value;
  const deadline = document.getElementById('deadline').value;

  // Create a new task item
  const taskItem = document.createElement('li');
  taskItem.textContent = ⁠ ${taskName} - Deadline: ${new Date(deadline).toLocaleString()} ⁠;
  
  // Add task to list
  taskList.appendChild(taskItem);

  // Clear form fields
  taskForm.reset();
});

// Career Advisor Functionality
const careerQuizBtn = document.getElementById('careerQuizBtn');
const careerResults = document.getElementById('careerResults');

careerQuizBtn.addEventListener('click', () => {
  const suggestions = [
    'Consider a career in software development!',
    'How about digital marketing?',
    'Data science might be a great fit for you!',
    'Explore opportunities in project management.'
  ];

  // Random career suggestion
  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  careerResults.textContent = ⁠ Career Suggestion: ${randomSuggestion} ⁠;
});