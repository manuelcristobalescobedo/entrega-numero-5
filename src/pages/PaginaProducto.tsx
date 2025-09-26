import Filtro from "../component/Filtro";
import CarritoCompra from "../component/CarritoCompra";
import ProcesoCompra from "../component/Compra";
import "../App.css"
import ValidacionTop from "../component/ValidacionTop";


export default function PaginaProducto() {
  CarritoCompra();
  Filtro();
  ProcesoCompra();

  return (
    <>
    {/* <-- Principal --> */}
     <section className="SeccionPrincipal">
      {/* <--  Título  --> */}
      <div className="ComponenteTitulo">
        <div>
          <div>
            <h1>Título</h1>
            <a href="#">Ubicación</a>
          </div>
          <div>
            <a href="#">Primera etiqueta</a>
            <a href="#">Segunda etiqueta</a>
            <a href="#">Tercera etiqueta</a>
          </div>
        </div>
      </div>

      {/* <--  Galería  --> */}
      <div className="ComponenteGaleria">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* <--  Descripción  --> */}
      <div className="ComponenteDescripcion">
        <div>
          <h2>Descripción</h2>
          <p>
            Describir es explicar, de manera detallada y ordenada, cómo son las
            personas, animales, lugares, objetos, etc. La descripción sirve sobre
            todo para ambientar la acción y crear una que haga más creíbles los
            hechos que se narran. Muchas veces, contribuyen a detener la acción y
            preparar el escenario de los hechos que siguen.
          </p>
          <div>
            <div>
              <h3>
                <a href="#">Nombre del anunciante</a>
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>$39.990</h3>
            <p>por adulto</p>
          </div>
          <p>$29.990 por estudiante</p>
          <p>$19.990 por adulto mayor</p>
        </div>
      </div>
    </section>
    {/* <--  Reseñas  --> */}
    <section className="SeccionResenas">
        <h2>Reseñas</h2>
        <div>
            <a href="#">
                <h3>La evaluación es un proceso que se utiliza para determinar, de manera sistemática, el mérito, el valor y el significado de un trabajo o capacidad, ya sea intelectual o física.</h3>
                <p>★★★★★</p>
                <p>Nombre del usuario</p>
            </a>
            <a href="#">
                <h3>La evaluación es un proceso que se utiliza para determinar, de manera sistemática, el mérito, el valor y el significado de un trabajo o capacidad, ya sea intelectual o física.</h3>
                <p>★★★★★</p>
                <p>Nombre del usuario</p>
            </a>
            <a href="#">
                <h3>La evaluación es un proceso que se utiliza para determinar, de manera sistemática, el mérito, el valor y el significado de un trabajo o capacidad, ya sea intelectual o física.</h3>
                <p>★★★★★</p>
                <p>Nombre del usuario</p>
            </a>
        </div>
    </section>
    {/* <--  Disponibilidad  --> */}
    <section className="SeccionDisponibilidad">
        <div className="ComponenteCalendario">
            <h3>Disponibilidad</h3>
            <div>
                <div>
                    <h4>Enero de 2026</h4>
                    <div>
                        <a href="#">29</a>
                        <a href="#">30</a>
                        <a href="#">31</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">8</a>
                        <a href="#">9</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                        <a href="#">21</a>
                        <a href="#">22</a>
                        <a href="#">23</a>
                        <a href="#">24</a>
                        <a href="#">25</a>
                        <a href="#">26</a>
                        <a href="#">27</a>
                        <a href="#">28</a>
                        <a href="#">29</a>
                        <a href="#">30</a>
                        <a href="#">31</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">8</a>
                    </div>
                </div>
                <div>
                    <h4>Febrero de 2026</h4>
                    <div>
                        <a href="#">26</a>
                        <a href="#">27</a>
                        <a href="#">28</a>
                        <a href="#">29</a>
                        <a href="#">30</a>
                        <a href="#">31</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">8</a>
                        <a href="#">9</a>
                        <a href="#">10</a>
                        <a href="#">11</a>
                        <a href="#">12</a>
                        <a href="#">13</a>
                        <a href="#">14</a>
                        <a href="#">15</a>
                        <a href="#">16</a>
                        <a href="#">17</a>
                        <a href="#">18</a>
                        <a href="#">19</a>
                        <a href="#">20</a>
                        <a href="#">21</a>
                        <a href="#">22</a>
                        <a href="#">23</a>
                        <a href="#">24</a>
                        <a href="#">25</a>
                        <a href="#">26</a>
                        <a href="#">27</a>
                        <a href="#">28</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">7</a>
                        <a href="#">8</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="ComponenteActividad">
            <h3>Actividad ideal para</h3>
            <div>
                <a>Familia</a>
                <a>Amigos</a>
                <a>Solo</a>
                <a>Pareja</a>
            </div>
            <button className="ComponenteBotonFavoritos abrir-compra">
                <p>Comprar</p>
            </button>
            <button className="ComponenteBotonCarrito abrir-carrito">
                <p>Agregar al carrito</p>
            </button>            
        </div>
    </section>
    {/* <--  Informacion  --> */}
    <section className="SeccionInformacion">
        <div>
            <h4>En qué consiste</h4>
            <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
                <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
                <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
            </ol>
            <h4>Más información</h4>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
                <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
                <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
            </ul>
        </div>
        <div>
            <h4>Políticas de cancelación y modificación</h4>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
                <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
                <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
            </ul>
            <h4>Qué está incluido</h4>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
                <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
                <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
            </ul>
            <h4>Qué no está incluido</h4>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Curabitur pretium nibh erat, a luctus ante eleifend nec.</li>
                <li>Aenean condimentum velit facilisis ex ultrices commodo.</li>
                <li>In sodales odio sit amet orci facilisis, eget egestas diam blandit.</li>
            </ul>
        </div>
    </section>
    {/* <--  Pie de página  --> */}
    <footer className="PieDePagina">
        <div>
            <div>
                <a href="#">
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <path d="M13.861 11.1664L21.1447 2.69775H19.4187L13.0942 10.051L8.04291 2.69775H2.2168L9.8554 13.8171L2.2168 22.6978H3.94291L10.6217 14.9325L15.9563 22.6978H21.7824L13.8606 11.1664H13.861ZM11.4968 13.9151L10.7229 12.8078L4.56485 3.99743H7.21605L12.1857 11.1077L12.9596 12.2149L19.4195 21.4572H16.7683L11.4968 13.9155V13.9151Z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.6978C7 9.93633 9.23858 7.69775 12 7.69775C14.7614 7.69775 17 9.93633 17 12.6978C17 15.4592 14.7614 17.6978 12 17.6978C9.23858 17.6978 7 15.4592 7 12.6978ZM12 9.69775C10.3431 9.69775 9 11.0409 9 12.6978C9 14.3546 10.3431 15.6978 12 15.6978C13.6569 15.6978 15 14.3546 15 12.6978C15 11.0409 13.6569 9.69775 12 9.69775Z" fill="currentColor"/><path d="M17.25 8.69775C17.9404 8.69775 18.5 8.13811 18.5 7.44775C18.5 6.7574 17.9404 6.19775 17.25 6.19775C16.5596 6.19775 16 6.7574 16 7.44775C16 8.13811 16.5596 8.69775 17.25 8.69775Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.85848 2.76769C6.79447 2.81789 6.06786 2.98769 5.43265 3.23729C4.77524 3.49349 4.21804 3.8373 3.66363 4.3937C3.10923 4.9501 2.76782 5.5077 2.51342 6.1661C2.26722 6.80271 2.10042 7.52991 2.05342 8.59451C2.00642 9.65911 1.99602 10.0013 2.00122 12.7169C2.00642 15.4325 2.01842 15.7729 2.07002 16.8397C2.12082 17.9035 2.29002 18.6299 2.53962 19.2653C2.79622 19.9228 3.13963 20.4798 3.69623 21.0344C4.25284 21.589 4.81004 21.9296 5.47005 22.1844C6.10606 22.4302 6.83347 22.5978 7.89788 22.6444C8.96229 22.691 9.30489 22.7018 12.0197 22.6966C14.7345 22.6914 15.0763 22.6794 16.143 22.6288C17.6954 22.5551 19.2158 22.1289 20.3368 21.0026C21.4582 19.8759 21.8789 18.3555 21.9464 16.8019C21.993 15.7345 22.004 15.3937 21.9988 12.6785C21.9936 9.96332 21.9814 9.62292 21.9308 8.55651C21.8571 7.00241 21.4311 5.48433 20.305 4.3611C19.1798 3.23876 17.6566 2.8186 16.1038 2.75149C15.0393 2.70549 14.6967 2.69369 11.9809 2.69889C9.26509 2.70409 8.92509 2.71569 7.85848 2.76769ZM7.95587 4.76532L7.95273 4.76547C7.07742 4.80677 6.56983 4.93931 6.1641 5.09874L6.15888 5.10079C5.7435 5.26267 5.42601 5.4585 5.08039 5.80537C4.73463 6.15236 4.54006 6.47011 4.379 6.88695C4.221 7.29549 4.09019 7.80576 4.05147 8.68272C4.00653 9.7007 3.99603 10.0064 4.00121 12.7131C4.00639 15.4193 4.01834 15.7231 4.06768 16.7431L4.06774 16.7443C4.10961 17.621 4.24188 18.1287 4.40114 18.5341L4.40273 18.5381C4.5653 18.9546 4.76111 19.2721 5.10789 19.6176C5.45429 19.9627 5.77118 20.1567 6.19035 20.3186C6.59953 20.4767 7.1103 20.608 7.98535 20.6463C9.00391 20.6909 9.31064 20.7017 12.0159 20.6966C14.7212 20.6914 15.0273 20.6794 16.0482 20.631C17.329 20.5702 18.2833 20.2306 18.9193 19.5916C19.5568 18.9511 19.8927 17.9957 19.9483 16.7151C19.9929 15.6932 20.004 15.3876 19.9988 12.6824C19.9936 9.977 19.9815 9.6722 19.9331 8.6513C19.8723 7.36967 19.5332 6.41605 18.8926 5.7771C18.2549 5.14101 17.2988 4.805 16.0174 4.74963C14.9973 4.70554 14.6894 4.69371 11.9847 4.69889C9.27761 4.70407 8.9749 4.71564 7.95587 4.76532Z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <path d="M23 12.6978C23 6.62262 18.0751 1.69775 12 1.69775C5.92486 1.69775 1 6.62262 1 12.6978C1 18.1882 5.02254 22.7389 10.2812 23.5641V15.8774H7.48828V12.6978H10.2812V10.2743C10.2812 7.51744 11.9235 5.99463 14.4361 5.99463C15.6396 5.99463 16.8984 6.20947 16.8984 6.20947V8.9165H15.5114C14.1449 8.9165 13.7187 9.76443 13.7187 10.6343V12.6978H16.7695L16.2818 15.8774H13.7187V23.5641C18.9775 22.7389 23 18.1882 23 12.6978Z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <path d="M23.4982 6.35195C23.2227 5.30727 22.4086 4.48469 21.3764 4.20501C19.5041 3.69775 12 3.69775 12 3.69775C12 3.69775 4.49455 3.69775 2.62364 4.20501C1.59136 4.48469 0.777273 5.30727 0.501818 6.35195C3.25116e-08 8.24525 0 12.1978 0 12.1978C0 12.1978 3.25116e-08 16.1489 0.501818 18.0436C0.777273 19.0882 1.59136 19.9108 2.62364 20.1905C4.49591 20.6978 12 20.6978 12 20.6978C12 20.6978 19.5055 20.6978 21.3764 20.1905C22.4086 19.9108 23.2227 19.0882 23.4982 18.0436C24 16.1503 24 12.1978 24 12.1978C24 12.1978 24 8.24662 23.4982 6.35195ZM9.54545 15.7856V8.60993L15.8182 12.1978L9.54545 15.7856Z" fill="currentColor"/>
                    </svg>
                </a>
                <a href="#">
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 0 24 25">
                        <path d="M18.3113 6.90714C17.1994 6.16963 16.3969 4.9895 16.1466 3.6139C16.0924 3.31664 16.0629 3.01066 16.0629 2.69775H12.5144L12.5087 17.1669C12.449 18.7873 11.1384 20.0876 9.53153 20.0876C9.03205 20.0876 8.56177 19.9605 8.14795 19.7389C7.19844 19.2305 6.54869 18.2179 6.54869 17.0526C6.54869 15.3792 7.88692 14.0176 9.53153 14.0176C9.83849 14.0176 10.133 14.0691 10.4117 14.1581V10.4723C10.1235 10.4323 9.83051 10.4073 9.53153 10.4073C5.93009 10.4073 3 13.3885 3 17.0526C3 19.3008 4.10406 21.2904 5.78838 22.4935C6.84923 23.2512 8.13977 23.6978 9.53153 23.6978C13.133 23.6978 16.0631 20.7168 16.0631 17.0524V9.71538C17.4548 10.7317 19.16 11.3306 21 11.3306V7.7203C20.0088 7.7203 19.0858 7.42047 18.3115 6.90694L18.3113 6.90714Z" fill="currentColor"/>
                    </svg>
                </a>
            </div>
            <a href="#">
                <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M480.33-487.5q25.79 0 43.92-18.37 18.13-18.36 18.13-44.15t-18.4-43.92q-18.41-18.14-44.25-18.14-25.85 0-43.88 18.41-18.04 18.4-18.04 44.25 0 25.84 18.36 43.88 18.37 18.04 44.16 18.04ZM480-123.69q-143.44-123.84-214.64-228.5-71.2-104.66-71.2-193.58 0-119.01 79.8-204.43 79.81-85.41 205.54-85.41 125.73 0 206.04 85.41 80.3 85.42 80.3 204.43 0 88.92-70.69 193.13Q624.46-248.42 480-123.69Z"/>
                </svg>
                <p>Dirección</p>
            </a>
            <a href="#">
                <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M222.66-173.08q-20.5 2-36.54-12.34-16.04-14.35-16.04-34.85v-97.23q0-18.54 10.58-32.25 10.57-13.71 28.73-18.21l77.65-16.81q12.27-1.69 20.69.52 8.42 2.21 16.31 10.48l95.57 92.54q43.2-22.81 79.93-49.94 36.73-27.14 68.04-58.45 31.38-31.46 57.98-68.07 26.59-36.62 49.4-78.46l-90.46-88.31q-8.27-8-12.4-20.62-4.14-12.61-1.75-23.88l20.92-80.46q5.46-18.04 17.98-28.27t30.67-10.23h98.81q20.5 0 34.85 15.54 14.34 15.54 12.34 36.04-10 105.03-56.52 202.13-46.52 97.09-126.29 176.75-79.84 80.15-177.63 127.77-97.79 47.61-202.82 56.61Z"/>
                </svg>
                <p>Teléfono</p>
            </a>
            <a href="#">
                <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="M184.26-219.27q-24.35 0-42.27-17.92-17.91-17.91-17.91-42.27v-401.08q0-24.36 17.91-42.27 17.92-17.92 42.27-17.92h591.48q25.35 0 42.77 17.92 17.41 17.91 17.41 42.27v401.08q0 24.36-17.41 42.27-17.42 17.92-42.77 17.92H184.26ZM480-452.62l307.96-181.5-6.15-58.65L480-516.19 178.19-692.77l-6.15 58.65L480-452.62Z"/>
                </svg>
                <p>Correo electrónico</p>
            </a>
        </div>
        <div>
            <h4>Título de la categoría</h4>
            <ul>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
            </ul>
            <h4>Título de la categoría</h4>
            <ul>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
            </ul>
        </div>
        <div>
            <h4>Título de la categoría</h4>
            <ul>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
            </ul>
            <h4>Título de la categoría</h4>
            <ul>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
                <li>
                    <a href="#">Entrada de la categoría</a>
                </li>
            </ul>
        </div>
    </footer>
    {/* <--  Encabezado  --> */}
    <header className="Encabezado">
        <a>
            <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M762.69-160.92 524.46-399.16q-30 22.77-65.79 35.27-35.79 12.5-73.87 12.5-93.58 0-159.11-65.51-65.53-65.51-65.53-159.04 0-93.52 65.51-159.1 65.51-65.57 159.04-65.57 93.52 0 159.1 65.53 65.57 65.53 65.57 159.11 0 39.23-12.88 75.02-12.89 35.8-34.89 64.64l238.23 238.23-37.15 37.16ZM384.77-403.38q72.31 0 122.46-50.16 50.16-50.15 50.16-122.46t-50.16-122.46q-50.15-50.16-122.46-50.16t-122.46 50.16Q212.15-648.31 212.15-576t50.16 122.46q50.15 50.16 122.46 50.16Z"/>
            </svg>
        </a>
             {/* <-- ComponenteBusquedaPrincipal --> */}

        <ValidacionTop></ValidacionTop>

        <button className="abrir-carrito">
            <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                <path d="M273.2-121.77q-24.92 0-42.16-17.41-17.23-17.42-17.23-42.35t17.41-42.16q17.42-17.23 42.35-17.23 24.92 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.42 17.23-42.35 17.23Zm412.43 0q-24.93 0-42.17-17.41-17.23-17.42-17.23-42.35t17.42-42.16q17.41-17.23 42.34-17.23 24.93 0 42.16 17.41 17.23 17.42 17.23 42.34 0 24.93-17.41 42.17-17.41 17.23-42.34 17.23ZM229.18-753.15h523.55q15.34 0 22.33 11.37 6.98 11.38 1.78 23.78l-93.68 227.12q-6.66 16.96-21.72 27.46-15.07 10.5-33.83 10.5H318.62l-45.12 78.23q-3.08 4.61-.19 10 2.88 5.38 8.65 5.38h463.42v47.96H285.53q-37.07 0-54.17-29.72-17.09-29.73 1.1-59.62l55.08-93.63-130.83-305.26H76.08v-47.96h112.8l40.3 94.39Z"/>
            </svg>
        </button>
        <button className="abrir-filtros">
            <div style={{ backgroundImage: "url(public/photos/Imagen5.jpg)" }}></div>
        </button>
    </header>  
    {/* <--  Carro de compras  --> */}
    <section className="CarroDeCompras">
        <div>
            <h3>Número de ítems</h3>
            {/* <--  ComponenteTarjetaCarro  --> */}
            <a className="ComponenteTarjetaCarro">
                <div>
                    <div style={{ backgroundImage: "url(public/photos/Imagen1.jpg)" }}></div>
                </div>
                <div>
                    <h4>Título del ítem</h4>
                    <p>Cantidad de personas</p>
                    <p>Fecha del ítem</p>
                    <p>Hora del ítem</p>
                    <p>Precio del ítem</p>
                    <button>Revisar detalles</button>
                    <button>Editar</button>
                </div>
                <button>
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                    </svg>
                </button>
            </a>
            {/* <--  ComponenteTarjetaCarro  --> */}
            <a className="ComponenteTarjetaCarro">
                <div>
                    <div style={{backgroundImage: "url(public/photos/Imagen1.jpg)"}}></div>
                </div>
                <div>
                    <h4>Título del ítem</h4>
                    <p>Cantidad de personas</p>
                    <p>Fecha del ítem</p>
                    <p>Hora del ítem</p>
                    <p>Precio del ítem</p>
                    <button>Revisar detalles</button>
                    <button>Editar</button>
                </div>
                <button>
                    <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                    </svg>
                </button>
            </a>
            {/* <--  ComponenteTarjetaTotal  --> */}
            <div className="ComponenteTarjetaTotal">
                <h4>Detalles de la compra</h4>
                <div>
                    <p>Título de la actividad</p>
                    <p>Precio</p>
                    <p>Título de la actividad</p>
                    <p>Precio</p>
                    <p>Título de la actividad</p>
                    <p>Precio</p>
                </div>
                <div>
                    <p>Descuento de la actividad</p>
                    <p>Precio</p>
                </div>
                <div>
                    <p>Total a pagar</p>
                    <p>Precio</p>
                </div>
                <button>Pagar</button>
            </div>
            <button id="cerrar-carrito">
                <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                </svg>
            </button>
        </div>
    </section>
    {/* <--  Filtros de busqueda  --> */}
    <section className="FiltrosDeBusqueda">
        <div>
            <h3>Filtros de búsqueda</h3>

            {/* <--  ComponenteTarjetaFiltros  --> */}
            <form className="ComponenteTarjetaFiltros">
                <h4>Título del ítem</h4>
                <div>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                </div>
            </form>

            {/* <--  ComponenteTarjetaFiltros  --> */}
            <form className="ComponenteTarjetaFiltros">
                <h4>Título del ítem</h4>
                <div>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>  
                </div>
            </form>
            {/* <--  ComponenteTarjetaFiltros  --> */}
            <form className="ComponenteTarjetaFiltros">
                <h4>Título del ítem</h4>
                <div>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                </div>
            </form>
            {/* <--  ComponenteTarjetaFiltros  --> */}
            <form className="ComponenteTarjetaFiltros">
                <h4>Título del ítem</h4>
                <div>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                </div>
            </form>
            {/* <--  ComponenteTarjetaFiltros  --> */}
            <form className="ComponenteTarjetaFiltros">
                <h4>Título del ítem</h4>
                <div>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                    <label>
                        <input type="checkbox"></input>
                        Filtro
                    </label>
                </div>
            </form>   
            <button id="cerrar-filtros">
                <svg xmlns="http:{/* <-- www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                </svg>
            </button>
        </div>
    </section>
    {/* <--  Proceso de compra  --> */}
    <section className="ProcesoCompra">
        <div>
            <div>
                <div>Fecha y hora</div>
                <div>Cantidad de personas</div>
                <div>Pago</div>
            </div>
            <div>
                <h3>Seleccione fecha</h3>
                <div className="ComponenteCalendario2">
                    <div>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M13.7115 17.7115L6 10L13.7115 2.28857L14.8317 3.40878L8.24021 10L14.8317 16.5913L13.7115 17.7115Z"/>
                            </svg>
                        </button>
                        <h4>Enero</h4>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M7.12021 17.7115L6 16.5913L12.5912 10L6 3.40878L7.12021 2.28857L14.8317 10L7.12021 17.7115Z"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <p>L</p>
                        <p>M</p>
                        <p>M</p>
                        <p>J</p>
                        <p>V</p>
                        <p>S</p>
                        <p>D</p>
                        <a>1</a>
                        <a>2</a>
                        <a>3</a>
                        <a>4</a>
                        <a>5</a>
                        <a>6</a>
                        <a>7</a>
                        <a>8</a>
                        <a>9</a>
                        <a>10</a>
                        <a>11</a>
                        <a>12</a>
                        <a>13</a>
                        <a>14</a>
                        <a>15</a>
                        <a>16</a>
                        <a>17</a>
                        <a>18</a>
                        <a>19</a>
                        <a>20</a>
                        <a>21</a>
                        <a>22</a>
                        <a>23</a>
                        <a>24</a>
                        <a>25</a>
                        <a>26</a>
                        <a>27</a>
                        <a>28</a>
                        <a>29</a>
                        <a>30</a>
                        <a>31</a>
                    </div>
                </div>
                <h3>Disponibilidad de horarios</h3>
                <div className="ComponenteHorarios">
                    <a>09:20</a>
                    <a>11:20</a>
                    <a>13:20</a>
                    <a>15:20</a>
                    <a>17:20</a>
                </div>
            </div>
            <button id="cerrar-compra">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="m293.42-258.69-33.92-34.73L445.27-480 259.5-666.58l33.92-34.73L480-514.73l186.58-186.58 33.92 34.73L514.73-480 700.5-293.42l-33.92 34.73L480-445.27 293.42-258.69Z"/>
                </svg>
            </button>
        </div>
    </section>
    </>
    )
}