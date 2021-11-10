import { Procedure, ProcedureState } from "../../interfaces/procedure/ProcedureInterfaces";

type ProcedureAction = 
| {type: 'addProcedure', payload: Procedure}
| {type: 'toggleProcedure', payload: { id: string }}
| {type: 'showProcedure', payload: { id: string }};



export const procedureReducer = (state: ProcedureState, action: ProcedureAction)=> {

    console.log({action});

    switch (action.type) {
        case 'addProcedure':
            return {
                ...state,
                procedures: [ ...state.procedures, action.payload]
            }

            case 'toggleProcedure':
                return{
                    ...state,
                    procedures: state.procedures.map(({...procedure}) =>{
                        if(procedure.id === action.payload.id){
                            procedure.completed = !procedure.completed;
                            
                        }
                        return procedure;
                    })
                }
                case 'showProcedure':
                return { 
                    ...state,
                  
                    procedures:  state.procedures.map(({...procedure}) =>{
                        if(procedure.id === action.payload.id){
                            procedure.visible = true;
                        }
                        else{
                            procedure.visible = false;
                        }
                        return procedure;
                    }),
                    state: state.isSelected == true
                
                   
                }
               
        default:
            return state;
    }

}