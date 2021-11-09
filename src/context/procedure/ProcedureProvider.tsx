import { ProcedureState } from "../../interfaces/procedure/ProcedureInterfaces";
import { ProcedureContext } from "./ProcedureContext";
import { procedureReducer } from "./ProcedureReducer";
import { useReducer } from "react";

const INITIAL_STATE: ProcedureState = {
  procedureCount: 4,
  procedures: [
    {
      id: '1',
      title: "Crédito de Libre Inversion",
      description: "Un crédito de libre inversión es un tipo de crédito de consumo. Es denominado de libre inversión porque a diferencia de otros créditos, no necesitas informarle a tu entidad financiera para qué vas a usar el dinero.",
      statusList: [
        { statusId: '1', statusTitle: "Solicitud crédito de libre inversión", statusDescription: "Enviaste la solicitud de crédito con tu información financiera.", statusDate: "01/04/2021" },
        { statusId: '2', statusTitle: "Verificación", statusDescription: "Uno de nuestros asesores se contactó contigo para verificar la información que nos proporcionaste.", statusDate: "03/04/2021" },
        { statusId: '3', statusTitle: "Revisando tu capacidad de endeudamiento", statusDescription: "Uno de nuestros asesores estudió tu capacidad de endeudamiento recuerdo a tu información en las centrales de riesgo-", statusDate: "06/04/2021" },
        { statusId: '4', statusTitle: "Estudio", statusDescription: "Nuestra plataforma procesó toda la información y te comunicó las condiciones de financiación más favorables que podemos ofrecerte.", statusDate: "08/04/2021" },
        { statusId: '5', statusTitle: "Desembolso", statusDescription: "Una vez aprobado el crédito, procedimos a hacer el desembolso del dinero.", statusDate: "17/04/2021" },
        
      ],
      completed: true,
      visible: true,
    },
    {
      id: '2',
      title: "Tarjeta de crédito",
      description: "La tarjeta de crédito es un instrumento material de identificación, que puede ser una tarjeta de plástico con una banda magnética, un microchip y un número en relieve.",
      statusList: [
        { statusId: '1', statusTitle: "Solicitud tarjeta de crédito", statusDescription: "Enviaste la solicitud de crédito a la entidad bancaria.", statusDate: "12/06/2021" },
        { statusId: '2', statusTitle: "Verificación de edad", statusDescription: "Uno de nuestros asesores pudo verificar que eres apto para adquirir nuestra tarjeta de crédito.", statusDate: "13/06/2021" },
        { statusId: '3', statusTitle: "Verificación de ingresos", statusDescription: "Se pudo verificar correctamente que los ingresos se adecúan a la solicitud de la tarjeta.", statusDate: "14/06/2021" },
        { statusId: '3', statusTitle: "Envío de tarjeta de crédito", statusDescription: "La entidad bancaria envió exitósamente la tarjeta de crédito a tu dirección de residencia.", statusDate: "14/06/2021" },
      ],
      completed: false,
      visible: false,
    },
    {
      id: '3',
      title: "Reportes en centrales de riesgo",
      description: "Las empresas que guardan nuestro historial crediticio se conocen popularmente como Centrales de Riesgo. Sin embargo, el término adecuado debería ser Operadores de Información.",
      statusList: [
        { statusId: '1', statusTitle: "Toma de solicitud", statusDescription: "La entidad bancaria ingresó tus datos al sistema.", statusDate: "07/07/2021" },
        { statusId: '2', statusTitle: "Diligenciamiento de formato", statusDescription: "La entidad bancaria diligenció el formato establecido para consulta ante centrales de riesgo.", statusDate: "07/07/2021" },
        { statusId: '3', statusTitle: "Trámite de firma", statusDescription: "La entidad bancaria tramitó la firma con tu autorización para realizar la consulta.", statusDate: "10/07/2021" },
        { statusId: '4', statusTitle: "Generación de consulta", statusDescription: "Se realizó la consulta con la entidad correspondiente (DataCrédito).", statusDate: "10/07/2021" },
        { statusId: '5', statusTitle: "Recepción de respuesta", statusDescription: "Se obtuvo la respuesta de la central de riesgo.", statusDate: "15/07/2021" },
      ],
      completed: false,
      visible: false,
    },
    {
      id: '4',
      title: "Crédito de libranza",
      description: "La libranza es un instrumento financiero que consiste en un crédito o préstamo de dinero, facilitado por una entidad prestadora a un deudor, y respaldado en el flujo de caja proveniente del sueldo de ese deudor.",
      statusList: [
        { statusId: '1', statusTitle: "Diligenciamiento de formulario", statusDescription: "Enviaste el formulario de solicitud de crédito.", statusDate: "19/08/2021" },
        { statusId: '2', statusTitle: "Aprobación de crédito", statusDescription: "La entidad bancaria aprobó tu crédito de libranza.", statusDate: "25/08/2021" },
        { statusId: '3', statusTitle: "Impresión de garantías", statusDescription: "Imprimiste y legalizaste las garantías de crédito.", statusDate: "27/08/2021" },
      ],
      completed: false,
      visible: false,
    },
    {
      id: '5',
      title: "Crédito de Vehículo",
      description: "Un crédito de vehículo es un préstamo realizado por diversas entidades financieras con el único objetivo de adquirir un auto o una moto ya sean nuevos o usados",
      statusList: [
        { statusId: '1', statusTitle: "Visita al concesionario", statusDescription: "Elegiste el vehículo por el cual solicitaste el crédito e informaste a la entidad bancaria.", statusDate: "03/09/2021" },
        { statusId: '1', statusTitle: "Revisión de capacidad de endeudamiento", statusDescription: "La entidad bancaria revisó tu capacidad de endeudamiento evaluando tus ingresos e historial crediticio.", statusDate: "03/09/2021" },
      ],
      completed: false,
      visible: false,
    },
    
  ],
  pending: 3,
  isSelected: false,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const ProcedureProvider = ({ children }: props) => {

  const [procedureState, dispatch] = useReducer(procedureReducer, INITIAL_STATE);

  const toggleProcedure = (id: string) => {
    dispatch({ type: 'toggleProcedure', payload: {id}})
  }

  const showProcedure = (id: string) => {
   dispatch({ type: 'showProcedure', payload: {id}})
  }

  return (
    <ProcedureContext.Provider value={{procedureState, toggleProcedure, showProcedure}}>{children}</ProcedureContext.Provider>
  );
};
