export default function ParticipationPanel({ a, b }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="font-bold mb-4">
        Participation Balance
      </h2>

      <div className="mb-4">
        <p>Student A: {a}%</p>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${a}%` }}
          />
        </div>
      </div>

      <div>
        <p>Student B: {b}%</p>

        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${b}%` }}
          />
        </div>
      </div>
    </div>
  );
}