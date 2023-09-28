window.addEventListener('DOMContentLoaded', function () {
    const owls = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Bubo_virginianus_nacurutu_-_Otter%2C_Owl%2C_and_Wildlife_Park.jpg/800px-Bubo_virginianus_nacurutu_-_Otter%2C_Owl%2C_and_Wildlife_Park.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ac/Flickr_-_Dario_Sanches_-_CORUJA-DA-IGREJA_%28Tyto_furcata%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Pulsatrix_perspicillata.jpg/800px-Pulsatrix_perspicillata.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Megascops_atricapilla_-Vale_do_Ribeira%2C_Registro%2C_Sao_Paulo%2C_Brazil-8.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Coruja-preta_%28Strix_huhula%29.jpg/800px-Coruja-preta_%28Strix_huhula%29.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mottled_Owl.jpg/1024px-Mottled_Owl.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Asio_flammeus_-Fazenda_Campo_de_Ouro%2C_Piraju%2C_Sao_Paulo%2C_Brasil-8.jpg/1024px-Asio_flammeus_-Fazenda_Campo_de_Ouro%2C_Piraju%2C_Sao_Paulo%2C_Brasil-8.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Mocho-diabo_no_Parque_Estadual_Intervales.jpg/800px-Mocho-diabo_no_Parque_Estadual_Intervales.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tawny-bellied_screech-owl.jpg/1024px-Tawny-bellied_screech-owl.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Megascops_sanctaecatarinae_-_Long-tufted_Screech_Owl.JPG/800px-Megascops_sanctaecatarinae_-_Long-tufted_Screech_Owl.JPG",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pulsatrix_koeniswaldiana_front.jpg/1024px-Pulsatrix_koeniswaldiana_front.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Strix_hylophila_-Reserva_Guainumbi%2C_Sao_Luis_do_Paraitinga%2C_Sao_Paulo%2C_Brasil-8.jpg/420px-Strix_hylophila_-Reserva_Guainumbi%2C_Sao_Luis_do_Paraitinga%2C_Sao_Paulo%2C_Brasil-8.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Cactus_Ferruginous_Pygmy-owl.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Burrowing_Owl_4354.jpg/800px-Burrowing_Owl_4354.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lophostrix_cristata_-Panama-8.jpg/1280px-Lophostrix_cristata_-Panama-8.jpg"
    ];
    
    function randomOwl() {
        const randomIndex = Math.floor(Math.random() * owls.length);
        return owls[randomIndex];
    }
    
    function loadOwls(n) {
        const bigDiv = document.getElementById('big-div');
    
        for (let i = 0; i < n; i++) { // Carrega 5 imagens por vez
            const imgSrc = randomOwl();
            const smallDiv = document.createElement('div');
            smallDiv.className = 'small-div';
            const newImg = document.createElement('img');
            newImg.src = imgSrc;
            newImg.classList.add('image');
            smallDiv.appendChild(newImg);
            bigDiv.appendChild(smallDiv);
        }
    }
    
    window.addEventListener('DOMContentLoaded', loadOwls(3));
    
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            loadOwls(1); // Carrega mais imagens quando o usuário rolar até o final
        }
    });
});
