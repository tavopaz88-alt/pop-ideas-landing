export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/19198641322"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center gap-2"
    >
      <span className="material-symbols-outlined text-[32px]">chat</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500 font-bold">
        Chat with us
      </span>
    </a>
  );
}
