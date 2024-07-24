interface IRepository {
    getAllAsync(): Promise<any[]>;
    getByIdAsync(id: string): Promise<any>;
    addAsync(entity: any): Promise<void>;
    updateAsync(id: string, entity: any): Promise<void>;
    deleteAsync(id: string): Promise<void>;
}

class Repository implements IRepository {
    private model: any;
    constructor(model: any) {
        this.model = model;
    }

    getAllAsync = async () => await this.model.find();
    getByIdAsync = async (id: string) => await this.model.findById(id);
    addAsync = async (entity: any) => new this.model(entity).save();
    updateAsync = async (id: string, entity: any) => this.model.findByIdAndUpdate(id, entity, { new: true });
    deleteAsync = async (id: string) => await this.model.findByIdAndDelete(id);
}

export default Repository;