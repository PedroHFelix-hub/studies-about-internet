const tooltipTexts = {
    "internetemerge.html": "Learn how the internet was born 🌐",
    "webevolution.html":   "See how the web evolved over the decades 📡",
    "computer and data.html": "Understand computers and data 💾",
    "developerroles.html": "Discover the roles of a developer 👨‍💻"
};

const tooltip = document.getElementById("tooltip");
const navButtons = document.querySelectorAll("button.nav");

navButtons.forEach(button => {
    const link = button.querySelector("a");
    const href = link ? link.getAttribute("href") : null;
    const text = href ? tooltipTexts[href] : null;

    if (!text) return;

    button.addEventListener("mousemove", (e) => {
        tooltip.textContent = text;
        tooltip.classList.add("visible");
        tooltip.style.left = (e.clientX + 12) + "px";
        tooltip.style.top  = (e.clientY + 12) + "px";
    });

    button.addEventListener("mouseleave", () => {
        tooltip.classList.remove("visible");
    });
});


// ── 2. BOTÃO VOLTAR AO TOPO ───────────────────────────────────────────────
// Aparece quando o usuário rola mais de 200px.
// Ao clicar, sobe suavemente ao topo da página.

const btnTopo = document.createElement("button");
btnTopo.id = "btn-topo";
btnTopo.title = "Back to top";
btnTopo.innerHTML = "&#8679;"; // seta para cima ↑
document.body.appendChild(btnTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnTopo.style.display = "flex";
    } else {
        btnTopo.style.display = "none";
    }
});

btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// ── 3. DESTAQUE DO BOTÃO DA PÁGINA ATUAL ─────────────────────────────────
// Compara a URL atual com o href de cada botão de navegação.
// Se coincidir, adiciona a classe "active" para destacar visualmente.

const currentPage = window.location.pathname.split("/").pop();

navButtons.forEach(button => {
    const link = button.querySelector("a");
    if (link && link.getAttribute("href") === currentPage) {
        button.classList.add("active");
        button.style.filter = "brightness(0.85)";
        button.style.boxShadow = "inset 0 3px 8px rgba(0,0,0,0.25)";
    }
});