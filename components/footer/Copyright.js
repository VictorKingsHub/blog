// components/FooterCopyright.js (or wherever you keep your footer components)

import React from "react";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center py-4 text-white">
      {" "}
      {/* Add styling as needed */}
      <p>&copy; {currentYear} T&T Blog. All rights reserved.</p>
    </div>
  );
};

// In your Footer component (app/components/footer/Footer.js or similar)

// ... other footer imports

const Copyright = () => {
  // ... your other footer logic ...

  return (
    <footer className="footer bg-black text-base-100 text-base-content p-10">
      {/* ... your other footer content ... */}
      <FooterCopyright /> {/* Include the component */}
    </footer>
  );
};

export default Copyright;
