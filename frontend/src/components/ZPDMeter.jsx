export default function ZPDMeter({ value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="font-bold mb-4">
        ZPD Gap Estimation
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-purple-500 h-6 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>

      <p className="mt-3">{value}% Support Required</p>
    </div>
  );
}