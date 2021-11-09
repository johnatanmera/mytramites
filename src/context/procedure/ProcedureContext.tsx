import { createContext } from "react";
import { ProcedureState } from "../../interfaces/procedure/ProcedureInterfaces";

export type ProcedureContextProps = {
    procedureState: ProcedureState,
    toggleProcedure: (id: string) => void,
    showProcedure: (id: string) => void,
}

export const ProcedureContext = createContext<ProcedureContextProps>({} as ProcedureContextProps);