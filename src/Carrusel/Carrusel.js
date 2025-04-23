import imagen1 from "../coming.png"

export function Carrusel() {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/*Importando imagen de public*/}
                        <img src="images.jpg" className="d-block w-100" alt="logo" />
                    </div>
                    <div className="carousel-item">
                        {/*Importando imagen de SRC*/}
                        <img src={imagen1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        {/*Importando usando url externa*/}
                        <img src="https://img.freepik.com/vector-gratis/proximamente-estilo-grunge-abstracto-salpicaduras-negras_1017-26690.jpg?semt=ais_hybrid&w=740" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
