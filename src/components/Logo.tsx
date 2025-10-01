import logo from "../assets/logo.png";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="RAGER.BET Logo"
        className="h-8 w-auto"
      />
    </div>
  );
};

export default Logo;
