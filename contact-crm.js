const originalForm = document.querySelector('form.contact-form');

if (originalForm) {
  // app.js gives the original form a placeholder submit handler. Replacing the
  // node removes that handler while retaining the existing fields and design.
  const form = originalForm.cloneNode(true);
  const shell = document.createElement('div');
  shell.className = 'contact-form-shell';
  originalForm.replaceWith(shell);
  shell.appendChild(form);

  form.id = 'contact-form';
  form.action = 'https://crm.abilix.in/f/032d9621574ff3a83628c9978771c002';
  form.method = 'post';
  form.querySelector('.form-status')?.remove();

  const crmMessage = document.createElement('input');
  crmMessage.type = 'hidden';
  crmMessage.name = 'message';
  form.appendChild(crmMessage);

  form.addEventListener('submit', () => {
    const details = [form.querySelector('textarea').value.trim()];
    const company = form.querySelector('[name="company"]').value.trim();
    if (company) details.push(`Company: ${company}`);

    const [businessType, employeeRange] = form.querySelectorAll('select');
    if (businessType.selectedIndex > 0) details.push(`Business type: ${businessType.value}`);
    if (employeeRange.selectedIndex > 0) details.push(`Employees: ${employeeRange.value}`);

    const interests = Array.from(form.querySelectorAll('.check-grid input:checked'))
      .map(input => input.closest('label').textContent.trim());
    if (interests.length) details.push(`Interested in: ${interests.join(', ')}`);
    crmMessage.value = details.join('\n\n');
  });

  const crmScript = document.createElement('script');
  crmScript.src = 'https://crm.abilix.in/public/webform.js';
  crmScript.dataset.form = '032d9621574ff3a83628c9978771c002';
  crmScript.dataset.target = '#contact-form';
  crmScript.async = true;
  document.head.appendChild(crmScript);
}
