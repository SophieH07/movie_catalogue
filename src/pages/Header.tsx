const Header = ({ user }: { user: string }) => {
  return (
    <div style={{ color: "white", textAlign: "center" }}>
      {user ? (
        <div>
          <h1>Welcome back {user}!</h1>
        </div>
      ) : (
        <div>
          <h1>Welcome to your own movie catalogue!</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
