/* ============================================================
   Foundation One Inc. — Shared Components
   Injects nav and footer into every page
   ============================================================ */

const NAV_HTML = `
<nav class="navbar">
  <div class="container">
    <div class="navbar__inner">
      <a href="index.html" class="navbar__logo">
        <div class="logo-mark"><span>F¹</span></div>
        <div class="logo-text">
          <strong>Foundation One</strong>
          <small>Inc.</small>
        </div>
      </a>
      <div class="navbar__nav">
        <a href="index.html">Home</a>
        <a href="services.html">Services</a>
        <a href="commercial.html">Commercial</a>
        <a href="industries.html">Industries</a>
        <a href="programs.html">Programs</a>
        <a href="results.html">Results</a>
        <a href="about.html">About</a>
      </div>
      <a href="contact.html" class="btn btn-primary navbar__cta desktop">Request Assessment</a>
      <button class="navbar__hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="navbar__mobile">
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="commercial.html">Commercial</a>
    <a href="industries.html">Industries</a>
    <a href="programs.html">Programs</a>
    <a href="results.html">Results</a>
    <a href="about.html">About</a>
    <a href="contact.html" class="btn btn-primary">Request Assessment</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="index.html" class="navbar__logo" style="margin-bottom:0;">
          <div class="logo-mark"><span>F¹</span></div>
          <div class="logo-text">
            <strong>Foundation One</strong>
            <small>Inc.</small>
          </div>
        </a>
        <p>Professional exterior property maintenance and commercial hardscape services. Built for property managers, condominium corporations, and organizations that demand consistent, long-term results.</p>
      </div>
      <div class="footer__col">
        <h5>Services</h5>
        <ul>
          <li><a href="services.html#interlock">Interlock Restoration</a></li>
          <li><a href="services.html#polymeric">Polymeric Sanding</a></li>
          <li><a href="services.html#pressure">Pressure Washing</a></li>
          <li><a href="services.html#weed">Hardscape Weed Removal</a></li>
          <li><a href="services.html#walkway">Walkway Restoration</a></li>
          <li><a href="services.html#courtyard">Courtyard Restoration</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="programs.html">Maintenance Programs</a></li>
          <li><a href="industries.html">Industries Served</a></li>
          <li><a href="results.html">Before &amp; After</a></li>
          <li><a href="commercial.html">Commercial Services</a></li>
          <li><a href="contact.html">Request Assessment</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h5>Contact</h5>
        <div class="footer__contact-item">📞 <a href="tel:9052515678">905-251-5678</a></div>
        <div class="footer__contact-item">✉️ <a href="mailto:elliot.l.guay@gmail.com">elliot.l.guay@gmail.com</a></div>
        <div class="footer__contact-item" style="margin-top:16px;">
          <div>
            <p style="color:rgba(255,255,255,0.4);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px;">Hours</p>
            <p style="color:rgba(255,255,255,0.55);font-size:0.82rem;">Mon–Fri: 7:00 AM – 6:00 PM</p>
            <p style="color:rgba(255,255,255,0.55);font-size:0.82rem;">Sat: 8:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>© 2025 Foundation One Inc. All rights reserved.</p>
      <p>Serving the Greater Toronto Area &amp; surrounding regions</p>
    </div>
  </div>
</footer>
`;

// Inject on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAV_HTML;

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;
});
