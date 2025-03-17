import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="brand">
        <img src="/logo.png" alt="Logo" />
        <span>Event Management</span>
      </div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
