import "./Ayuda.css";
import { Button } from 'primereact/button';
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import Flechadevolver from "./Flechadevolver.png";
import { Accordion, AccordionTab } from 'primereact/accordion';

function Ayuda() {
    const [value, setValue] = useState('');
    const [botonPrincipal, setBotonPrincipal] = useState('FAQ');
    const [botonSecundario, setBotonSecundario] = useState('Servicio');

    const handlePrincipalClick = (boton) => {
        setBotonPrincipal(boton);
    };

    const handleSecundarioClick = (boton) => {
        setBotonSecundario(boton);
    };


    return (
        <div className="container-principal-ayuda">
            <div className="header-ayuda">
                <div className="logo">
                    <button><img src={Flechadevolver} alt="Volver" /></button>
                </div>
                <div className="titulos">
                    <h2>Ayuda & FAQS</h2>
                    <h3>¿Cómo Podemos Ayudarte?</h3>
                </div>
            </div>

            <div className="botones-principales">
                <Button
                    label="FAQ"
                    className={`${botonPrincipal === 'FAQ' ? 'p-button-primary' : 'p-button-outlined'} boton-grande`}
                    onClick={() => handlePrincipalClick('FAQ')}
                />
                <Button
                    label="Contáctanos"
                    className={`${botonPrincipal === 'Contactanos' ? 'p-button-primary' : 'p-button-outlined'} boton-grande`}
                    onClick={() => window.location.href = "https://www.facebook.com/PAZGOSOLUCIONES/"}
                />
            </div>


            <div className="botones-pequenos">

                <a href="https://www.facebook.com/PAZGOSOLUCIONES/"></a><Button
                    label="Servicio"
                    className={`${botonSecundario === 'Servicio' ? 'p-button-secondary' : 'p-button-outlined'} boton-pequeno`}
                    onClick={() => handleSecundarioClick('Servicio')}
                />
            </div>

            <div className="buscador">
                <FloatLabel>
                    <InputText id="buscar" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="buscar">Buscar</label>
                </FloatLabel>
            </div>

            <div className="card">
                <div className="card">
                    <Accordion activeIndex={0}>
                        <AccordionTab header="¿Cómo usar PFM?">
                            <p className="m-0">
                                Para usar nuestro sistema de cámaras de seguridad, simplemente conecta las cámaras al DVR o NVR, luego accede a la interfaz desde tu computadora o 
                                aplicación móvil. Desde allí podrás ver las cámaras en tiempo real, configurar alertas de movimiento y revisar grabaciones anteriores.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Cuánto cuesta usar PFM?" >
                            <p className="m-0">
                                El costo depende del tipo y cantidad de cámaras, así como de las características que desees (visión nocturna, cámaras IP, almacenamiento en la nube, etc).
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Cómo contactar con soporte?" >
                            <p className="m-0">
                                Puedes contactarnos a través de nuestra página de Facebook:&nbsp;
                                <a href="https://www.facebook.com/PAZGOSOLUCIONES/" target="_blank" rel="noopener noreferrer">
                                    PAZGOSOLUCIONES
                                </a>.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Cómo puedo restablecer mi contraseña si la olvido?">
                            <p className="m-0">
                                Si olvidaste la contraseña de acceso a tu sistema de cámaras o aplicación, puedes restablecerla desde el menú de configuración o contactando 
                                con nuestro soporte técnico para recibir ayuda paso a paso.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Existen medidas de privacidad o seguridad de datos implementadas?">
                            <p className="m-0">
                                Sí, todas nuestras cámaras y sistemas incluyen protocolos de seguridad como cifrado de video y contraseñas de acceso. Además, recomendamos cambiar la 
                                contraseña predeterminada tras la instalación para mayor seguridad.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Puedo personalizar la configuración dentro de la aplicación?">
                            <p className="m-0">
                                Sí, dentro de la aplicación puedes personalizar ajustes como zonas de detección de movimiento, notificaciones, horarios de grabación y 
                                usuarios autorizados. Esto te permite adaptar el sistema a tus necesidades específicas.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Puedo eliminar mi cuenta?">
                            <p className="m-0">
                                Sí. Si deseas eliminar tu cuenta o desactivarla, solo contáctanos y te ayudaremos a realizar el proceso de forma segura.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Cómo accedo a mi historial de gastos?">
                            <p className="m-0">
                                Puedes acceder a tu historial de pagos y facturación desde la sección de configuración de la cuenta en el portal web. Allí encontrarás 
                                detalles de tus compras, suscripciones y facturas descargables.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="¿Puedo utilizar la aplicación sin conexión?">
                            <p className="m-0">
                                Puedes acceder a las grabaciones almacenadas localmente sin internet, pero para visualizar en tiempo real o acceder desde fuera de casa 
                                necesitarás una conexión activa a internet.
                            </p>
                        </AccordionTab>

                    </Accordion>
                </div>
            </div>
        </div>
    );
}

export default Ayuda;
