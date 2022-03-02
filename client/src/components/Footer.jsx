import React from "react";

function Footer() {
    return (
        <footer>
            <div className="newsWrapper">
                <div className="newsContainer">
                    <div className="newsText">
                        <h5>OceanSale News!</h5>
                        <h6>Receba todos as novidades e descontos por email!</h6>
                    </div>
                    <section className="newsLetter">
                        <form className="formNewsLetter">
                            <input placeholder="Qual seu nome?"></input>
                            <input type="email" placeholder="Digite seu Email"></input>
                            <button className="btn btn-light">Cadastrar</button>
                        </form>
                    </section>
                </div>
            </div>
            <div className="footerAbout">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris est velit, laoreet sed blandit sit amet, elementum ut dolor.
                    Mauris rhoncus, dui vel luctus facilisis, quam libero fermentum odio, id mollis orci massa vel sapien.
                    Nulla ut libero ac ante finibus mollis. Aenean mollis massa at metus scelerisque ultrices.
                    Praesent porttitor ultrices magna eget dignissim. Curabitur dolor eros, ullamcorper ut viverra a, mattis in purus.
                    Fusce vel sodales velit. Quisque imperdiet elit ac nisi faucibus finibus.
                    Praesent rutrum neque felis, euismod venenatis tortor consequat eu.
                    Fusce ac laoreet urna. Quisque pretium suscipit porta.
                    Phasellus a justo eget quam sodales lacinia et at dui. Fusce eget porta purus, vel egestas odio.
                    Quisque consequat pharetra tincidunt. Quisque sit amet urna efficitur, pharetra augue ut, hendrerit neque.
                    Suspendisse non facilisis odio. Nulla iaculis nibh vitae tortor maximus, et tincidunt nisi condimentum.
                    Nunc non commodo arcu, vitae eleifend augue.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec in velit faucibus, facilisis libero sed, consequat velit. In vitae pellentesque lectus.
                    Cras felis nulla, elementum sed libero vitae, tristique consectetur lectus.
                    Proin et leo est. Cras a ante vestibulum ipsum ullamcorper iaculis.
                </p>
            </div>
        </footer>
    )
}

export default Footer