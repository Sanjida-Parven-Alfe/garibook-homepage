import { useState, useEffect } from "react";

export default function FakeWebChat() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-show tooltip when page loads
  useEffect(() => {
    setShowTooltip(true);
  }, []);

  const handleToggleChat = () => {
    setOpen(!open);
    setShowTooltip(false); // Hide tooltip when chat opens
  };

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <>
      {/* Floating Chat Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Welcome Tooltip Popup */}
        {showTooltip && !open && (
          <div className="mb-3 bg-white text-gray-800 text-sm font-medium px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce">
            <button
              onClick={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-gray-600 font-bold text-xs pr-1"
              aria-label="Close tooltip"
            >
              ✕
            </button>
            <span>Welcome to Garibook! Ask your query here! 👋</span>
          </div>
        )}

        {/* Chat toggle button */}
        <button
          onClick={handleToggleChat}
          aria-label="Open chat"
          className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition cursor-pointer"
        >
          <svg height="24" viewBox="0 0 24 24" width="24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </button>
      </div>

      {/* Main Chat Box Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[90vw] rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-blue-600 px-5 py-4 flex items-center justify-between">
            <h4 className="text-white font-semibold text-sm leading-snug">
              Welcome to Garibook Live Chat Support Service!
            </h4>
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg leading-none cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="p-5 space-y-3">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
            />
            <div className="flex gap-2">
              <select className="border border-gray-200 rounded-lg px-2 py-2.5 text-sm bg-white">
                <option>+880</option>
              </select>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500"
              />
            </div>
            <textarea
              placeholder="Write your query here"
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 resize-none"
            />
            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center rounded-lg bg-blue-600 text-white py-2.5 font-semibold text-sm hover:bg-blue-700 transition cursor-pointer"
            >
              ➤
            </button>
          </div>

          <div className="bg-blue-600 text-center text-white text-xs py-2">
            Powered by iDesk360
          </div>
        </div>
      )}

      {/* Fake "sent" popup toast */}
      {sent && (
        <div className="fixed bottom-24 right-6 z-[60] bg-gray-900 text-white text-sm px-5 py-3 rounded-xl shadow-lg">
          ✅ Your message has been sent!
        </div>
      )}
    </>
  );
}