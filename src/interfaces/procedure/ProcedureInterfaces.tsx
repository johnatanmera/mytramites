export interface Status{
   statusId: string, statusTitle: string, statusDescription: string, statusDate: string
}


export interface Procedure {
  id: string;
  title: string;
  description: string;
  statusList: Status[];
  completed: boolean;
  visible: boolean;
}

export interface ProcedureState {
  procedureCount: number;
  procedures: Procedure[];
  isSelected: boolean;
  pending: number;
}
