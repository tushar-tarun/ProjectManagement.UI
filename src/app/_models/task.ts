export interface Task 
{
    id: string;
    prodjectId: string;
    detail: string;
    createdOn: Date;
    status: string;
    assignedToUserId: string;
}
