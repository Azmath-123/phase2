import React from "react";
function Header(){
    return(
        <header className="header">
      <div className="header-content">
        <h1>My Website</h1>
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
    </header>
    )
}
export default Header;