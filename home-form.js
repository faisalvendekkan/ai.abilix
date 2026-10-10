const overview = document.querySelector('.hero-home')?.nextElementSibling;

if (overview) {
  overview.insertAdjacentHTML('afterend', `
    <section class="section home-lead-section" aria-labelledby="home-lead-title">
      <div class="container home-lead-grid">
        <div class="home-lead-copy">
          <span class="eyebrow">LET'S TALK</span>
          <h2 id="home-lead-title">Tell us what your business needs.</h2>
          <p>Exploring a better sales process, connected systems or practical AI training? Share a few details and our team will get back to you.</p>
          <div class="home-lead-points"><span>✓ A conversation about your goals</span><span>✓ Practical next steps for your team</span></div>
        </div>
        <div class="home-lead-panel">
          <form id="contact-form" class="home-lead-form" action="https://crm.abilix.in/f/032d9621574ff3a83628c9978771c002" method="post">
            <h3>Request a conversation</h3>
            <p>Fields marked * are required.</p>
            <div class="home-lead-fields">
              <label>Your name *<input type="text" name="name" placeholder="Your name" autocomplete="name" maxlength="100" required></label>
              <label>Phone / WhatsApp<input type="tel" name="phone" placeholder="Phone / WhatsApp" autocomplete="tel" maxlength="40"></label>
              <label class="home-lead-wide">Email<input type="email" name="email" placeholder="Email" autocomplete="email" maxlength="254"></label>
            </div>
            <label>How can we help?<textarea name="message" placeholder="How can we help?" rows="4" maxlength="2000"></textarea></label>
            <button class="button button-primary" type="submit">Send enquiry <span aria-hidden="true">→</span></button>
            <p class="home-lead-note">We’ll use your details to respond to your enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  `);

  // Load the connector after the dynamic form exists so it reliably attaches.
  const crmScript = document.createElement('script');
  crmScript.src = 'https://crm.abilix.in/public/webform.js';
  crmScript.dataset.form = '032d9621574ff3a83628c9978771c002';
  crmScript.dataset.target = '#contact-form';
  crmScript.async = true;
  document.head.appendChild(crmScript);
}
