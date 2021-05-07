export class Project 
{
    id: string= '';
    name: string= '';
    detail: string= '';
    createdOn: Date= new Date();

    constructor(id: string, name: string, details: string, createdOn: Date){
        this.id = id; this.name = name; this.detail = details; this.createdOn = createdOn;
    }

}
