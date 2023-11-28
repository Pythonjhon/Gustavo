function generarHistoriaAleatoria() {
    const nombre = document.getElementById("nombrePersonalizado").value || "Bob";
    const pais = document.getElementById("pais").value;

    let historia;

    if (pais === "reinoUnido") {
        historia = `Había una vez un joven llamado, ${nombre} cuya risa iluminaba cualquier habitación en la que entraba. Clara estaba profundamente enamorada de Martín, un chico amable y apasionado. Juntos, construyeron castillos de sueños y promesas.

        Un día, Martín partió en un viaje de negocios, prometiendo regresar pronto. La espera se hizo eterna para Clara, quien contaba los días con anhelo. Sin embargo, el destino tenía otros planes. Martín sufrió un accidente trágico y nunca regresó.
        
        La noticia dejó a Clara en un abismo de desesperación. Su corazón se rompió en mil pedazos, y la luz que una vez brilló en sus ojos se apagó. El nombre de Martín se convirtió en un susurro melancólico en los labios de Clara, y cada rincón de su vida estaba impregnado con la sombra de la pérdida.
        
        Aunque el tiempo avanzaba, Clara nunca pudo borrar la ausencia de Martín. Cada día, su corazón recordaba el amor que se llevó consigo el destino. La tristeza se convirtió en su compañera silenciosa, y el nombre de Martín resonaba como un eco melancólico en el silencio de su existencia.`;
    } else {
        historia = `Una vez en Estados Unidos, ${nombre} fue capturado por una enorme ballena azul. ${nombre} decidió medir su cuerpo en libras. Luego, ${nombre} subió a una montaña y midió su temperatura en grados Fahrenheit. Al final del día, ${nombre} volvió a casa, sintiéndose más fuerte que nunca.`;
    }

    document.getElementById("historia").textContent = historia;
}

document.getElementById("botonGenerar").addEventListener("click", generarHistoriaAleatoria);