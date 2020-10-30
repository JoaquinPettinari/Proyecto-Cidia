import React from 'react';

function ColumnaDetalleDatos({tituloDato1, infoDato1, validacionDato1 , tituloDato2, infoDato2, validacionDato2 , tituloDato3, infoDato3, validacionDato3}){
    return(
        <div>
            {
                validacionDato1 && 
                <div className="contenedor">
                        <div className="tituloDetalles">{tituloDato1}</div>
                        <div className="infoDetalles">{infoDato1}</div>
                </div>
            }
            {   
                validacionDato2 &&
                <div className="contenedor">
                        <div className="tituloDetalles">{tituloDato2}</div>
                        <div className="infoDetalles">{infoDato2}</div>
                </div>
            }
            {
                validacionDato3 &&
                <div className="contenedor">
                    <div className="tituloDetalles">{tituloDato3}</div>
                    <div className="infoDetalles">{infoDato3}</div>
                </div>
            }
        </div>
    );

}



export default ColumnaDetalleDatos;