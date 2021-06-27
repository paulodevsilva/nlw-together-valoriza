import { EntityRepository, Repository } from 'typeorm';
import { Compliment } from '../entities/Compliment';
import { Tag } from '../entities/Tag';

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories };
