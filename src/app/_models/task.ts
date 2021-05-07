export class Task 
{
    id: string = '';
    prodjectId: string = '';
    detail: string = '';
    createdOn: Date = new Date();
    status: string = '';
    assignedToUserId: string = '';

    constructor(id: string, projectId : string, details: string, createdOn : Date, status : string, assignedTo: string){
        this.id = id; this.prodjectId = projectId; this.detail = details; this.createdOn = createdOn; this.status = status; this.assignedToUserId = assignedTo;
    }
}
