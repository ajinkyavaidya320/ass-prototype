export default function ScaffoldCard({ text }) {
  return (
    <div className="bg-indigo-100 p-6 rounded-2xl shadow">
      <h2 className="font-bold text-xl mb-2">
        AI Scaffold Suggestion
      </h2>

      <p>{text}</p>
    </div>
  );
}