import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { PERU_DEPARTMENTS } from "./departments";
import { CbSelect } from "./combobox";

const DEPARTMENTS = Object.keys(PERU_DEPARTMENTS);

export function VibiForm() {
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const DISTRICTS = PERU_DEPARTMENTS[department];
  const [district, setDistrict] = useState(DISTRICTS[0]);
  return (
    <div className="overflow-hidden flex flex-col items-center px-8 md:px-12">
      <p className="w-full max-w-md py-4 border-b-2 border-b-gray-300 text-sm text-center text-gray-500 mb-4 md:text-base">
        Esto tomará menos de 5 min
      </p>
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
      <form className="w-full max-w-2xl py-4 md:pt-8 md:px-16">
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
            />
          </div>
          <div className="flex flex-col sm:w-1/2">
            <label
              className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
              htmlFor="initial_payment"
            >
              ¿Cuál es tu cuota inicial?:
            </label>
            <input
              className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
              type="number"
              name="initial_payment"
              id="initial_payment"
              placeholder="S/. 5000"
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
            />
          </div>
        </div>

        <div className="flex flex-col mt-4 sm:mt-0">
          <p className="pb-2 font-medium text-sm sm:text-base">
            ¿Cómo deseas financiar tu vivienda?
          </p>
          <Tabs.Root className="" defaultValue="tab1">
            <Tabs.List
              className="flex flex-col mb-8 gap-4 sm:gap-0 sm:flex-row sm:justify-between"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="inline-flex items-center justify-center py-2 px-4 ring-2 ring-gray-400 text-gray-600 rounded font-medium bg-white hover:bg-gray-100 data-[state=active]:ring-blue-500 data-[state=active]:text-blue-500 focus:ring-blue-500"
                value="tab1"
              >
                Crédito Hipotecario
              </Tabs.Trigger>
              <Tabs.Trigger
                className="inline-flex items-center justify-center py-2 px-4 ring-2 ring-gray-400 text-gray-600 rounded font-medium bg-white hover:bg-gray-100 data-[state=active]:ring-blue-500 data-[state=active]:text-blue-500 focus:ring-blue-500"
                value="tab2"
              >
                Techo Propio
              </Tabs.Trigger>
              <Tabs.Trigger
                className="inline-flex items-center justify-center py-2 px-4 ring-2 ring-gray-400 text-gray-600 rounded font-medium bg-white hover:bg-gray-100 data-[state=active]:ring-blue-500 data-[state=active]:text-blue-500 focus:ring-blue-500"
                value="tab3"
              >
                Crédito Mivivienda
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className="" value="tab1">
              <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="full_name"
                  >
                    Valor de la vivienda:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="S/. 60000"
                  />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="age"
                  >
                    ¿Cuál es tu situación laboral?:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    list="situations"
                    name="situation"
                    id="situation"
                    defaultValue="Dependiente"
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

              <div className="flex flex-col sm:gap-4 sm:pb-4 sm:flex-row">
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="dni"
                  >
                    ¿Cuál es tu ingreso mensual neto?:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    type="number"
                    name="dni"
                    id="dni"
                    placeholder="S/. 3000"
                  />
                </div>
                <div className="flex flex-col sm:w-1/2">
                  <label
                    className="font-medium mt-4 text-sm sm:text-base sm:pr-4 sm:mt-0"
                    htmlFor="dni_date"
                  >
                    ¿Cuándo estimas comprar tu vivienda?:
                  </label>
                  <input
                    className="p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                    list="purchase_time"
                    name="estimated_purchase"
                    id="estimated_purchase"
                    defaultValue="De"
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
            <Tabs.Content className="" value="tab2">
              <div className="flex flex-col gap-4 px-8 py-4 bg-sky-100 rounded sm:flex-row">
                <img
                  className="w-8 self-start"
                  src="/svg/information.svg"
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
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    No exceder el ingreso familiar mensual neto de S/.3,715.00.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    Conformar un grupo familiar:
                    <br />
                    <span className="block mt-2 text-secondary_vibi">
                      Además de declarar a uno o más dependientes que pueden
                      ser: cónyugé o conviviente, hijos menores de 25 años o
                      mayores de 25 años con discapacidad, nietos o hermanos
                      menores de 25 años y padres o abuelos.
                    </span>
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    No ser porpietario o copropietario de otras viviendas a
                    nivel nacional. Aplicable al cónyuge, conviviente legalmente
                    reconocido o hijos menores de edad.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    No haber recibido apoyo habitacional previo del estado.
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-4">
                <p className="sm:text-lg">
                  !Por último! Completa la información de la vivienda a comprar
                </p>
                <label
                  className="font-medium mt-4 text-sm sm:text-base"
                  htmlFor="home_price"
                >
                  ¿Cuál es el precio de la vivienda?
                  <span className="text-xs text-gray-400 sm:text-sm">
                    (Opcional)
                  </span>
                </label>
                <input
                  className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                  type="number"
                  name="home_price"
                  id="home_price"
                  placeholder="S/. 60000"
                />
              </div>
            </Tabs.Content>
            <Tabs.Content className="" value="tab3">
              <div className="flex flex-col gap-4 px-8 py-4 bg-sky-100 rounded sm:flex-row">
                <img
                  className="w-8 self-start"
                  src="/svg/information.svg"
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
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">Ser mayor de edad (+18).</p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    Contar con una cuota mínima desde el 7.5% del valor de la
                    vivienda.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    No ser porpietario o copropietario de otras viviendas a
                    nivel nacional. Aplicable al cónyuge, conviviente legalmente
                    reconocido o hijos menores de edad.
                  </p>
                </div>
                <div className="flex items-start gap-2 mb-3">
                  <img className="w-4 sm:w-5" src="/svg/check.svg" alt="" />
                  <p className="leading-4">
                    No haber recibido apoyo habitacional previo del estado.
                  </p>
                </div>
              </div>
              <div className="flex flex-col my-4">
                <p className="sm:text-lg">
                  !Por último! Completa la información de la vivienda a comprar
                </p>
                <label
                  className="font-medium mt-4 text-sm sm:text-base"
                  htmlFor="home_price"
                >
                  ¿Cuál es el precio de la vivienda?
                  <span className="text-xs text-gray-400 sm:text-sm">
                    (Opcional)
                  </span>
                </label>
                <input
                  className="px-4 py-2 border border-gray-400 rounded focus:outline-none focus:border-blue-500"
                  type="number"
                  name="home_price"
                  id="home_price"
                  placeholder="S/. 60000"
                />
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <a
          href="../exito"
          className="inline-block mb-8 mt-4 px-6 py-3 bg-vibi rounded text-sm text-white sm:mb-12 lg:text-base"
          type="submit"
        >
          Enviar
        </a>
        <a href="../" className="ml-6 underline hover:text-blue-700">
          Volver
        </a>
      </form>
    </div>
  );
}
