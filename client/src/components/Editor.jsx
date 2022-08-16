import { useState } from "react";

function Editor() {
  const [note, setNote] = useState(`yes
yarn is better package manager
fly :)`);
  
  return (
    <textarea
      id="message"
      onChange={(el) => setNote(el.target.value)}
      value={note}
      className="block resize-none font-mono p-2 outline-none h-[90vh] w-full text-sm text-gray-100 bg-gray-900 border-none"
      placeholder="Your notes..."
    ></textarea>
  );
}

export default Editor;
