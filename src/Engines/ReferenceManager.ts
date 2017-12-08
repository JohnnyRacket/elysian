import { StagedReference } from './StagedReference';
export class ReferenceManager{
    
    private stagedReferences: StagedReference[] =  [];

    public getReferencesForStage(stage: string){//accessing these refs will remove them
        let stageReferences = this.stagedReferences.filter( object => {
            if(object.stage == stage) return object;
        });
        //remove the refs
        let newStagedRefs: StagedReference[] = this.stagedReferences.filter( object => {
            if(object.stage != stage) return object;
        });
        this.stagedReferences = newStagedRefs;
        return stageReferences.map(object => {
            return object.object;
        });
    }

    public addReferenceToStage(object: Object, stage: string){
        let reference = new StagedReference(object,stage);//might need to rework this to pass in a SR to start to properly link
        this.stagedReferences.push(reference);
    }
}