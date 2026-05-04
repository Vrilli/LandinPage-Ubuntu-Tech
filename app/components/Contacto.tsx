export default function Contact() {
  return (
    <section id="contacto" className="px-6 py-16">
      <h3 className="text-3xl font-bold mb-6">Contacto</h3>

      <form className="grid md:grid-cols-2 gap-4 max-w-3xl">
        <input placeholder="Nombre" className="p-3 bg-gray-900 rounded" />
        <input placeholder="Correo" className="p-3 bg-gray-900 rounded" />
        <textarea
          placeholder="Mensaje"
          className="p-3 bg-gray-900 rounded md:col-span-2"
        />
        <button className="bg-orange-500 px-6 py-3 rounded-xl text-black md:col-span-2">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}