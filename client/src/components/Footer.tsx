const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h4>About</h4>
          <p>Here you can find information about the store, its history, and what we offer.</p>
          <ul className="socials">
            <li><a href="#" target="_blank">Facebook</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Phone: 123-456-789</p>
          <p>Email: example@example.com</p>
          <p>Address: 123 Example Street, City, Country</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2023 Sample Store | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;




