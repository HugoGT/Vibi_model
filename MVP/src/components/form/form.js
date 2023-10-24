import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { PERU_DEPARTMENTS } from "./departments";
import { CbSelect } from "./combobox";
import { Feedback } from "./feedback";

const DEPARTMENTS = Object.keys(PERU_DEPARTMENTS);

export function VibiForm() {
  const [selectedTab, setSelectedTab] = useState("CM");
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const DISTRICTS = PERU_DEPARTMENTS[department];
  const [district, setDistrict] = useState(DISTRICTS[0]);
  const [message, setMessage] = useState([]);
  const [feedback, setFeedback] = useState("hidden");
  let body;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      credit: selectedTab,
      full_name: e.target.full_name.value,
      age: e.target.age.value,
      phone: "+51" + e.target.phone.value,
      email: e.target.email.value,
      dni: e.target.dni.value,
      dni_date: e.target.dni_date.value,
      home_price: e.target.home_price.value,
      currency: e.target.currency.value,
    };

    if (e.target.initial_payment) {
      formData.initial_payment = e.target.initial_payment.value;
    }
    if (e.target.situation) {
      formData.situation = e.target.situation.value;
    }
    if (department) {
      formData.department = department;
    }
    if (district) {
      formData.district = district;
    }
    if (e.target.income) {
      formData.income = e.target.income.value;
    }
    if (e.target.estimated_purchase) {
      formData.estimated_purchase = e.target.estimated_purchase.value;
    }

    body = JSON.stringify(formData);

    fetch("https://house-pricing-vibi.onrender.com/register/", {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response.message === "Registro exitoso") {
          window.location.href = "../exito";
        } else {
          setFeedback("text-red-500");
          setMessage(response.errors);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="overflow-hidden flex flex-col items-center px-8 py-12 sm:py-26 md:px-12">
      <div className="flex flex-col items-center max-w-3xl md:flex-row">
        <img
          className="w-20 py-4 md:w-24 md:py-0"
          src="/images/avatar.png"
          alt="persona"
        />
        <p className="sm:px-12 text-justify sm:text-lg md:px-8">
          ¡Hola!, En Vibi te ayudamos a financiar tu casa propia en la modalidad
          de crédito hipotecario o subsidio del estado. Comencemos completando
          la información a continuación:
        </p>
        <p className="hidden text-white text-justify md:block md:w-24">
          Con_Vibi_ayudamos_a_cumplir_tus_metas
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl py-4 md:pt-8 md:px-16"
      >
        <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="full_name"
            >
              Nombre completo:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="text"
              name="full_name"
              id="full_name"
              placeholder="Juan López"
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="age"
            >
              Edad:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="number"
              name="age"
              id="age"
              placeholder="27"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="phone"
            >
              Celular:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="text"
              name="phone"
              id="phone"
              placeholder="959515627"
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="email"
              name="email"
              id="email"
              placeholder="example@vibi.com"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="dni"
            >
              DNI:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="number"
              name="dni"
              id="dni"
              placeholder="31372589"
              required
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="dni_date"
            >
              Fecha de emisión:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="date"
              name="dni_date"
              id="dni_date"
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="home_price"
            >
              Valor de la vivienda:
              {selectedTab !== "CH" && (
                <span className="ml-2 text-xs text-secondary_vibi sm:text-sm">
                  (Opcional)
                </span>
              )}
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="number"
              name="home_price"
              id="home_price"
              placeholder="$23400 o S/. 65200"
              required={selectedTab === "CH"}
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="currency"
            >
              Moneda:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              list="currencies"
              name="currency"
              id="currency"
              required={selectedTab === "CH"}
            />
            <datalist id="currencies">
              <option value="Dólares" />
              <option value="Soles" />
            </datalist>
          </div>
        </div>

        <div className="flex flex-col mt-4 sm:mt-0">
          <p className="pb-2 font-medium text-sm sm:text-base">
            ¿Cómo deseas financiar tu vivienda?
          </p>
          <Tabs.Root defaultValue={selectedTab}>
            <Tabs.List
              className="flex flex-col mb-8 gap-4 sm:gap-0 sm:flex-row sm:justify-between"
              aria-label="Selecciona tu crédito"
            >
              <Tabs.Trigger
                className="inline-flex items-center justify-center py-3 px-4 ring-2 ring-gray-400 text-gray-600 rounded font-medium bg-white hover:bg-gray-100 data-[state=active]:ring-blue-500 data-[state=active]:text-blue-500 focus:ring-blue-500 sm:px-6"
                value="CM"
                onClick={() => setSelectedTab("CM")}
              >
                Crédito Mivivienda
              </Tabs.Trigger>
              <Tabs.Trigger
                className="inline-flex items-center justify-center py-3 px-4 ring-2 ring-gray-400 text-gray-600 rounded font-medium bg-white hover:bg-gray-100 data-[state=active]:ring-blue-500 data-[state=active]:text-blue-500 focus:ring-blue-500 sm:px-6"
                value="TP"
                onClick={() => setSelectedTab("TP")}
              >
                Techo Propio
              </Tabs.Trigger>
              <Tabs.Trigger
                className="inline-flex items-center justify-center py-3 px-4 ring-2 ring-gray-400 text-gray-600 rounded font-medium bg-white hover:bg-gray-100 data-[state=active]:ring-blue-500 data-[state=active]:text-blue-500 focus:ring-blue-500 sm:px-6"
                value="CH"
                onClick={() => setSelectedTab("CH")}
              >
                Crédito Hipotecario
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="mb-8" value="CM">
              <div className="flex flex-col gap-4 px-8 py-4 bg-info_vibi rounded sm:flex-row">
                <img
                  className="w-8 self-start"
                  src="/svg/info.svg"
                  alt="information"
                />
                <div className="">
                  <p className="text-sm text-justify sm:text-base">
                    Es un crédito hipotecario subsidiado por el estado que te
                    permite comprar una vivienda desde S/.65,200.00 hasta
                    S/.343,900.00. Además accede a los bonos del Buen Pagador y
                    Buen Pagador Sostenible.
                  </p>
                  <p className="pt-2 underline text-xs text-sky-500 hover:cursor-pointer hover:text-sky-400 sm:text-sm">
                    Conoce todos los beneficios
                  </p>
                </div>
              </div>
              <div className="mt-4 p-6 border border-gray-200 rounded text-sm sm:px-10 sm:text-base">
                <p className="mb-2 font-medium text-base sm:text-lg">
                  Para aplicar a Crédito Mivivenda tienes que cumplir con las
                  siguientes condiciones.
                </p>
                <p className="mb-4 text-secondary_vibi">
                  Lee con atención cada una de las condiciones, si tienes dudas
                  contacta con nuestros asesores.
                </p>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">Ser mayor de edad (+18).</p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    Contar con una cuota mínima desde el 7.5% del valor de la
                    vivienda.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    No ser porpietario o copropietario de otras viviendas a
                    nivel nacional. Aplicable al cónyuge, conviviente legalmente
                    reconocido o hijos menores de edad.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    No haber recibido apoyo habitacional previo del estado.
                  </p>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className="mb-8" value="TP">
              <div className="flex flex-col gap-4 px-8 py-4 bg-info_vibi rounded sm:flex-row">
                <img
                  className="w-8 self-start"
                  src="/svg/info.svg"
                  alt="information"
                />
                <div className="">
                  <p className="text-sm text-justify sm:text-base">
                    El estado otorga un bono familiar habitacional de
                    S/.43,412.50 como ayuda para comprar tu casa. Es un bono no
                    reembolsable.
                  </p>
                  <p className="pt-2 underline text-xs text-sky-500 hover:cursor-pointer hover:text-sky-400 sm:text-sm">
                    Conoce todos los beneficios
                  </p>
                </div>
              </div>
              <div className="mt-4 p-6 border border-gray-200 rounded text-sm sm:px-10 sm:text-base">
                <p className="mb-2 font-medium text-base sm:text-lg">
                  Para aplicar al bono habitacional familiar tienes que cumplir
                  con las siguientes condiciones.
                </p>
                <p className="mb-4 text-secondary_vibi">
                  Lee con atención cada una de las condiciones, si tienes dudas
                  contacta con nuestros asesores.
                </p>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    No exceder el ingreso familiar mensual neto de S/.3,715.00.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    Conformar un grupo familiar:
                    <br />
                    <span className="block text-sm mt-2 text-secondary_vibi">
                      Además de declarar a uno o más dependientes que pueden
                      ser: cónyugé o conviviente, hijos menores de 25 años o
                      mayores de 25 años con discapacidad, nietos o hermanos
                      menores de 25 años y padres o abuelos.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    No ser porpietario o copropietario de otras viviendas a
                    nivel nacional. Aplicable al cónyuge, conviviente legalmente
                    reconocido o hijos menores de edad.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <img
                    className="mt-[2px] w-4 sm:w-5"
                    src="/svg/check.svg"
                    alt=""
                  />
                  <p className="">
                    No haber recibido apoyo habitacional previo del estado.
                  </p>
                </div>
              </div>
            </Tabs.Content>
            <Tabs.Content className="mb-8" value="CH">
              <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="initial_payment"
                  >
                    Cuota inicial:
                  </label>
                  <input
                    className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    type="number"
                    name="initial_payment"
                    id="initial_payment"
                    placeholder="S/. 5000"
                    required={selectedTab === "CH"}
                  />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="situation"
                  >
                    ¿Cuál es tu situación laboral?:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    list="situations"
                    name="situation"
                    id="situation"
                    defaultValue="Dependiente"
                    required={selectedTab === "CH"}
                  />
                  <datalist id="situations">
                    <option value="Dependiente" />
                    <option value="Independiente" />
                  </datalist>
                </div>
              </div>

              <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="department"
                  >
                    ¿En qué departamento vives?:
                  </label>
                  <CbSelect
                    list={DEPARTMENTS}
                    selected={department}
                    setSelected={setDepartment}
                  />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="district"
                  >
                    ¿En qué distrito?:
                  </label>
                  <CbSelect
                    list={DISTRICTS}
                    selected={district}
                    setSelected={setDistrict}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:gap-4 sm:flex-row">
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="income"
                  >
                    ¿Cuál es tu ingreso mensual neto?:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    type="number"
                    name="income"
                    id="income"
                    placeholder="S/. 3000"
                    required={selectedTab === "CH"}
                  />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="estimated_purchase"
                  >
                    ¿Cuándo estimas comprar tu vivienda?:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    list="purchase_time"
                    name="estimated_purchase"
                    id="estimated_purchase"
                    defaultValue="De"
                    required={selectedTab === "CH"}
                  />
                  <datalist id="purchase_time">
                    <option value="Menos de 3 meses" />
                    <option value="De 3 a 6 meses" />
                    <option value="De 6 meses a 1 año" />
                    <option value="Más de 1 año" />
                  </datalist>
                </div>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <Feedback active={feedback} message={message} />

        <button
          className="inline-block mb-8 px-6 py-3 bg-vibi rounded text-sm text-white sm:mb-12 lg:text-base hover:bg-vibi_hover"
          type="submit"
        >
          Enviar
        </button>
        <a href="../" className="ml-6 underline hover:text-blue-700">
          Volver
        </a>
      </form>
    </div>
  );
}
