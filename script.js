document.getElementById('mcqForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const question = document.getElementById('question').value.trim();
  const optionInputs = document.querySelectorAll('.option-input');
  const preview = document.getElementById('preview');

  if (!question || Array.from(optionInputs).some(input => !input.value.trim())) {
    alert("Please fill in the question and all options.");
    return;
  }

  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  let html = `<strong>Q: ${question}</strong><ul>`;
  const optionLabels = ['A', 'B', 'C', 'D'];

  optionInputs.forEach((input, i) => {
    html += `<li><strong>${optionLabels[i]}.</strong> ${input.value.trim()}</li>`;
  });

  html += `</ul>`;
  questionDiv.innerHTML = html;

  preview.appendChild(questionDiv);

  // Reset form
  this.reset();
});
