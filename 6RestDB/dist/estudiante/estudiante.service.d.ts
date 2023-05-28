import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';
export declare class EstudianteService {
    private readonly estudianteRepository;
    private readonly logger;
    constructor(estudianteRepository: Repository<Estudiante>);
    create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante>;
    findAll(): Promise<Estudiante[]>;
    findOne(id: string): Promise<Estudiante>;
    update(id: string, updateEstudianteDto: UpdateEstudianteDto): Promise<Estudiante>;
    remove(id: string): Promise<void>;
}
