import { ModuleTwo } from './moduletwo'

export class ModuleOne {

    doSomething():boolean {
        let mytwo = new ModuleTwo(12);
        return mytwo.ReturnFalse();
    }
}