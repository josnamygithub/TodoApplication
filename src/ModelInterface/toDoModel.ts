export interface Task {
    id: number;
    title: string;
    description: string;
    status: 'incompleted'| 'completed';
    editing ?: boolean;
  }