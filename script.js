function buscarCarros() {
    fetch("http://10.92.199.53:3000/carros")
        .then(res => res.json())
        .then(data => {

            let divContainer = document.getElementById("lista-carros");
            divContainer.innerHTML = ""
            

            data.forEach(carro => {
                let card = document.createElement("div");

                card.innerHTML = `
                    <div class="card">
                        <img src="${carro.imagem}" />
                        <h1>${carro.nome}</h1>
                    </div>
                `;

                divContainer.append(card);
            });
        });
}

function buscarMotos() {
    fetch("http://10.92.199.53:3000/motos")
        .then(res => res.json())
        .then(data => {

            let divContainer = document.getElementById("lista-motos");
            divContainer.innerHTML = ""
            

            data.forEach(moto => {
                let card = document.createElement("div");

                card.innerHTML = `
                    <div class="card">
                        <img src="${moto.imagem}" />
                        <h1>${moto.nome}</h1>
                    </div>
                `;

                divContainer.append(card);
            });
        });
}

function buscarVendedores() {
    fetch("http://10.92.199.53:3000/vendedores")
        .then(res => res.json())
        .then(data => {

            let divContainer = document.getElementById("lista-vendedores");
            divContainer.innerHTML = ""
            

            data.forEach(vendedor => {
                let card = document.createElement("div");

                card.innerHTML = `
                    <div class="card">
                        <img src="${vendedor.imagem}" />
                        <h1>${vendedor.nome}</h1>
                    </div>
                `;

                divContainer.append(card);
            });
        });
}

buscarMotos();
buscarCarros();
buscarVendedores();