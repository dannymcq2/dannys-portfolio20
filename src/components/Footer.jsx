function Footer() {
  return (
    <footer className="footer" id="footer">
      <p>&copy; {new Date().getFullYear()} Danny McHugh.</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/dannymcq2" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/na" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/na" target="_blank" rel="noopener noreferrer">
            Stack Overflow
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;