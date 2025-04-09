document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        { title: "De Volta para o Futuro", image: "btf.jpg", id: 1 },
        { title: "Karate Kid", image: "karate kid.jpg", id: 2 },
        { title: "Star Wars", image: "star wars.jpg", id: 3 },
        { title: "E.T. O Extraterrestre", image: "et.jpg", id: 4 },
        { title: "Indiana Jones", image: "indiana jones.jpg", id: 5 },
        { title: "O Máscara", image: "Mascara.jpg", id: 6 }
    ];

    const movieContainer = document.getElementById("movieContainer");

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("col");
        movieCard.innerHTML = `
            <div class="card h-100 bg-dark text-white">
                <a href="detalhes.html?id=${movie.id}" class="text-decoration-none">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h4 class="card-title">${movie.title}</h4>
                        <button class="btn btn-outline-primary btn-sm like-button" data-id="${movie.id}">&#9733; Curtir</button>
                    </div>
                </a>
            </div>
        `;
        movieContainer.appendChild(movieCard);
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("like-button")) {
            event.preventDefault();
            event.target.classList.toggle("btn-success");
            event.target.innerHTML = event.target.classList.contains("btn-success") ? "❤️ Curtido" : "&#9733; Curtir";
        }
    });

    document.getElementById("searchButton").addEventListener("click", () => {
        const query = document.getElementById("searchInput").value.toLowerCase();
        window.location.href = `search.html?query=${query}`;
    });
});
