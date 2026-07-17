import { contact } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
        <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.2.58 4.27 1.6 6.06L4 29l8.1-1.56a12.9 12.9 0 0 0 3.92.6h.01C22.6 28.04 28 22.63 28 16.02 28 9.4 22.63 3 16.02 3Zm0 23.36h-.01a10.9 10.9 0 0 1-3.4-.55l-.24-.08-4.8.92.98-4.7-.16-.24a10.86 10.86 0 0 1-1.66-5.7C6.73 9.49 10.9 5.3 16.02 5.3c5.13 0 9.3 4.18 9.3 9.32 0 5.14-4.17 9.34-9.3 9.34Zm5.11-6.98c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.19.28-.72.9-.88 1.08-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.37a8.35 8.35 0 0 1-1.54-1.92c-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.46.1-.19.05-.35-.02-.5-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.48-.63-.48h-.54c-.19 0-.5.07-.76.35-.26.28-1 .97-1 2.37s1.02 2.75 1.16 2.94c.14.19 2 3.05 4.84 4.28.68.29 1.2.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33Z" />
      </svg>
    </a>
  );
}
