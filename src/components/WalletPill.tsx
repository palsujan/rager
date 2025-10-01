import { ChevronDown, Wallet, Bitcoin } from "lucide-react";

const WalletPill = () => {
  return (
    <button
      className="flex items-center gap-2 rounded-xl2 border border-ui-stroke bg-ui-card/70 px-4 py-2 shadow-glass hover:shadow-glow transition"
    >
      <Bitcoin size={18} />
      <span className="text-sm">$2.609876</span>
      <ChevronDown size={16} className="opacity-70" />
      <div className="ml-2 grid h-6 w-6 place-items-center rounded-md bg-brand-green/15">
        <Wallet size={16} className="text-brand-neon" />
      </div>
    </button>
  );
};

export default WalletPill;
