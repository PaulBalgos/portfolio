import React from "react";
import "../style.css"; // Create this CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Balgos-Portfolio. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;