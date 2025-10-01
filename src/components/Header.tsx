import { Bell, Gift, Search } from "lucide-react";
import WalletPill from "./WalletPill";
import Logo from "./Logo";
import Avatar from '../assets/avtar.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-[#1E2641]/60 bg-[#0A0D1A]/70 backdrop-blur-md">
      <div className="mx-auto grid h-full max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center justify-center">
          <WalletPill />
        </div>
        <div className="flex items-center gap-2 justify-end">
          {[Search, Gift, Bell].map((Icon, i) => (
            <button
              key={i}
              className="grid h-10 w-10 place-items-center rounded-lg border border-[#1E2641] bg-[#12182C]/70 hover:border-[#2EEE9A]/40"
              aria-label={Icon.name}
            >
              <Icon size={18} />
            </button>
          ))}
          <img
            alt="User"
            className="ml-1 h-10 w-10 rounded-full ring-2 ring-[#2EEE9A]/40"
            src={Avatar}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
