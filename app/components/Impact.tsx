export default function Impact() {
  const stats = [
    { value: "130", label: "Asistentes" },
    { value: "6", label: "Speakers" },
    { value: "95%", label: "Tasa de satisfacción" },
  ];

  return (
    <section className="px-6 py-16 border-t border-gray-800">
      <h3 className="text-2xl font-bold mb-8">Impacto 2025</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl text-center">
            <p className="text-2xl font-bold text-orange-500">{item.value}</p>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}