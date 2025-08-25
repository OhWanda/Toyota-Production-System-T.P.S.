document.addEventListener("DOMContentLoaded", () => { /* Aspetta che la pagina sia caricata (HTML pronto) prima di eseguire lo script */
    const tooltipTargets = document.querySelectorAll(".tooltip-target"); /* Cerca tutti gli elementi della pagina con la classe .tooltip-target */

    // Creo il box tooltip
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip-box"); /* Gli aggiunge la classe CSS */
    document.body.appendChild(tooltipBox); /* Lo inserisce nel body della pagina */
    
    tooltipTargets.forEach(target => {
        target.addEventListener("mouseenter", (e) => { 
        tooltipBox.textContent = tooltipData[target.id]; /* Prende il contenuto all'interno della costante tooltipData */
        tooltipBox.style.opacity = "1"; /* Rende i box visibile */
        tooltipBox.style.transform = "translateY(0)"; 
    });

    target.addEventListener("mousemove", (e) => { /* Quando il mouse si muove sulla frase il box si muove 15 pixel in basso a destra col mouse*/
        tooltipBox.style.left = e.pageX + 15 + "px";
        tooltipBox.style.top = e.pageY + 15 + "px";
    });

    target.addEventListener("mouseleave", () => { /* Quando il muose si muove fuori dalla finestra diventa invisibile e fa un animazione in alto*/
        tooltipBox.style.opacity = "0";
        tooltipBox.style.transform = "translateY(-10px)";
    });
    });

    const tooltipData = {
        ToyodaSakichi: `Toyoda Sakichi (Kosai, 14 febbraio 1867 - Kosai, 30 ottobre 1930) è stato un inventore e imprenditore giapponese, 
        chiamato anche 'Re degli inventori giapponesi', 
        considerato il padre della rivoluzione industriale del suo paese. 
        \nFondatore della Toyota Industries, 
        da cui deriverà l'attuale multinazionale Toyota, grazie all'opera successiva del figlio Kiichirō.\n\n- Wikipedia`,
        KiichiroToyoda: `Kiichirō Toyoda (Toyoda Kiichirō; Shizuoka, 11 giugno 1894 - Toyota, 27 marzo 1952) è stato un imprenditore giapponese.\n
        Nato nel 1894, Kiichirō è figlio di Sakichi Toyoda, fondatore della Toyota Industries e considerato il padre della rivoluzione industriale giapponese. 
        \nFu il propugnatore della suddivisione dell'azienda originale in diversi settori, tra cui quello 
        automobilistico, con la fondazione dell'odierna Toyota.\n\n- Wikipedia`,
        Sovrapproduzione:`Il MUDA sovrapproduzione è il peggiore dei sette sprechi della Lean Production, 
        perché la sua presenza a sua volta è la causa principale anche di altri MUDA.
        \nLo spreco di sovrapproduzione avviene quando si producono prodotti o semilavorati in quantità eccessiva 
        o anticipando il momento in cui sia effettivamente necessario produrli (per esempio prima che ci sia richiesta da parte del cliente).\n\n - headvisor.it`,
    };

    const button = document.getElementById('scrollButton');
    const target = document.getElementById('target');

    button.addEventListener('click', () => {
        target.scrollIntoView({ behavior: 'smooth' });
    });
});