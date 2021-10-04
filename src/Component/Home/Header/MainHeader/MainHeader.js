import React from 'react';
import photo1 from '../../../Image/rokomari01.PNG'
import photo2 from '../../../Image/rokomari02.PNG'
import photo3 from '../../../Image/rokomari3.PNG'

const MainHeader = () => {
    return (
        <section class="container mt-3">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={photo1} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={photo2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={photo3} class="d-block w-100" alt="..." />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MainHeader;