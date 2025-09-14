import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'reflexiones_cansancio_v1';

export default function ReflectionsForm() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [saved, setSaved] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setSaved(JSON.parse(raw));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return setMsg('Escribe una reflexión antes de guardar.');
    const one = { id: Date.now(), name: name || 'Anónimo', text, date: new Date().toISOString() };
    const next = [one, ...saved];
    setSaved(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setText('');
    setName('');
    setMsg('Guardado localmente — solo visible en este navegador.');
    setTimeout(()=>setMsg(''), 3000);
  }

  function handleClear() {
    localStorage.removeItem(STORAGE_KEY);
    setSaved([]);
  }

  return (
    <section id="reflexiones" className="py-16 container-max mx-auto text-white">
      <h3 className="text-2xl font-semibold mb-4">Reflexiones</h3>
      <form onSubmit={handleSubmit} className="glass p-6 rounded-md space-y-4">
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre (opcional)" className="w-full p-3 rounded bg-transparent border border-white/10" />
        <textarea value={text} onChange={e=>setText(e.target.value)} rows="5" placeholder="Escribe tu opinión..." className="w-full p-3 rounded bg-transparent border border-white/10"></textarea>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/10 rounded">Guardar</button>
          <button type="button" onClick={handleClear} className="px-4 py-2 bg-red-600/30 rounded">Borrar todo</button>
        </div>
        {msg && <p className="text-sm text-green-300">{msg}</p>}
      </form>

      <div className="mt-8 space-y-4">
        {saved.length === 0 ? (
          <p className="text-white/70">Aún no hay reflexiones guardadas en este navegador.</p>
        ) : (
          saved.map(s => (
            <div key={s.id} className="glass p-4 rounded-md">
              <div className="flex justify-between text-sm text-white/70">
                <div>{s.name}</div>
                <div>{new Date(s.date).toLocaleString()}</div>
              </div>
              <p className="mt-2">{s.text}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
