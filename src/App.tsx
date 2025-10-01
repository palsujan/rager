import Layout from "./components/Layout";
import ChallengeCard from "./components/ChallengeCard";

export default function App() {
  return (
    <Layout>
      <section className="mb-6">
        <div className="rounded-xl2 border border-ui-stroke bg-ui-card/60 p-4">
          <h1 className="text-xl font-semibold">Challenges</h1>
        </div>
                  <div className="mt-4 flex gap-2">
            {["Active","Completed","Missed"].map((t,i)=>(
              <button key={t}
                className={`rounded-lg px-3 py-1.5 text-sm border ${
                  i===0
                    ? "border-wgite bg-[#FF6412] text-white"
                    : "border-ui-stroke bg-ui-card/70 text-text-dim"
                }`}
              >{t}</button>
            ))}
          </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <ChallengeCard title="Deposit $50,000 on wallet via crypto and win upto" />
        <ChallengeCard title="Wager $50,000 via USD and win upto" />
        <ChallengeCard title="Wager $50,000 on Lunch Drink Slots" />
        <ChallengeCard title="Accept within 01:32:54" />
        <ChallengeCard title="Deposit $50,000 on wallet via crypto and win upto" />
        <ChallengeCard title="Deposit $50,000 on wallet via crypto and win upto" />
      </section>
    </Layout>
  );
}
