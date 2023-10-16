import React, { Component } from "react";

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      full_name: "",
      phone: "",
      dni: "",
      fechaEmision: "",
      financiamiento: "", // Para almacenar la opción seleccionada
      precioVivienda: "",
      cuotaInicial: "",
    };
  }

  // Manejar cambios en los campos del formulario
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar los datos del formulario, por ejemplo, enviarlos a un servidor
  };

  render() {
    return (
      <div className="flex flex-col items-center px-8 md:px-12">
        <p className="w-full max-w-sm py-4 border-b-2 border-b-gray-300 text-sm text-center text-gray-500 md:text-base">
          Esto te tomará menos de 2 min
        </p>
        <form className="py-8" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombres:</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="apellido">Apellidos:</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              value={this.state.apellido}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="celular">Celular:</label>
            <input
              type="text"
              name="celular"
              id="celular"
              value={this.state.celular}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="dni">DNI:</label>
            <input
              type="number"
              name="dni"
              id="dni"
              value={this.state.dni}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="fechaEmision">Fecha de emisión:</label>
            <input
              type="date"
              name="fechaEmision"
              id="fechaEmision"
              value={this.state.fechaEmision}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label>¿Cómo deseas financiar tu vivienda?</label>
            <input
              type="radio"
              name="financiamiento"
              value="Opción 1"
              onChange={this.handleChange}
            />{" "}
            Opción 1
            <input
              type="radio"
              name="financiamiento"
              value="Opción 2"
              onChange={this.handleChange}
            />{" "}
            Opción 2
            <input
              type="radio"
              name="financiamiento"
              value="Opción 3"
              onChange={this.handleChange}
            />{" "}
            Opción 3
          </div>

          <div>
            <label htmlFor="precioVivienda">
              ¿Cuál es el precio de la vivienda?
            </label>
            <input
              type="number"
              name="precioVivienda"
              id="precioVivienda"
              value={this.state.precioVivienda}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="cuotaInicial">¿Cuál es tu cuota inicial?</label>
            <input
              type="number"
              name="cuotaInicial"
              id="cuotaInicial"
              value={this.state.cuotaInicial}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
