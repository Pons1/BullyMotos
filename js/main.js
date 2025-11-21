// === BULLY MOTOS - MAIN JAVASCRIPT ===

// ==============================
// 1. LOADER (PANTALLA DE CARGA)
// ==============================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    // Esperar 1 segundo adicional para asegurar que todo cargó
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1000);
});

// ==============================
// 2. ANIMACIONES AOS
// ==============================
AOS.init({
    once: false,
    mirror: true,
    offset: 120,
    duration: 800,
    easing: 'ease-out-back',
});

// ==============================
// 3. PARALLAX EFECTO MOUSE
// ==============================
document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        const heroSection = document.getElementById('hero-section');
        const moto = document.getElementById('moto3d');

        if (!heroSection || !moto) return;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const mouseX = e.pageX - centerX;
        const mouseY = e.pageY - centerY;

        // Mover fondo
        const bgMoveX = -mouseX / 40;
        const bgMoveY = -mouseY / 40;
        heroSection.style.backgroundPosition = `calc(50% + ${bgMoveX}px) calc(50% + ${bgMoveY}px)`;

        // Mover moto
        const motoMoveX = mouseX / 25;
        const motoMoveY = mouseY / 25;
        moto.style.transform = `translateX(${motoMoveX}px) translateY(${motoMoveY}px)`;
    }
});

// ==============================
// 4. MODAL DE RESERVA
// ==============================
const modal = document.getElementById('bookingModal');
const closeBtn = document.getElementById('closeModal');
const openBtns = document.querySelectorAll('.open-modal-btn');

// Abrir modal
openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('modal-active');
    });
});

// Cerrar con X
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('modal-active');
    });
}

// Cerrar haciendo clic fuera
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('modal-active');
        }
    });
}
