export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/24105927486"
      target="_blank"
      rel="noopener noreferrer"
      className="position-fixed bottom-0 end-0 m-4 btn btn-success rounded-circle shadow"
      style={{
        width: "55px",
        height: "55px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      aria-label="Contacter SKD sur WhatsApp"
    >
      <i className="bi bi-whatsapp fs-4"></i>
    </a>
  );
}