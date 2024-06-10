function Footer()
{
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact us at: email@example.com | Phone: +123 456 7890</p>
        <nav>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}   

export default Footer;