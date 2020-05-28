import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User, Reports, GeneralReports, Player, File} from 'database/entities';
import IReportsStore from './IReportsStore';

export default class ReportsStore extends IReportsStore {
  constructor(
    @InjectRepository(Reports)
    private readonly repository: Repository<Reports>,
    @InjectRepository(GeneralReports)
    private readonly generalRepository: Repository<GeneralReports>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {
    super();
  }

  async createReports() {
    const newReports = await this.repository.create();
    await this.repository.insert(newReports);
    return newReports;
  }

  async createGeneralReports(date: string, notes: string, videosIds: File[]) {
    const newGenReports = await this.generalRepository.create({
      date,
      notes,
      videos: videosIds,
    });
    await this.generalRepository.insert(newGenReports);
    return newGenReports;
  }

  async addGenReport(generalReports: GeneralReports[], reportId: string) {
    await this.repository.save({id: reportId, generalReports});
  }

  async getReportsById(reportId: string) {
    return this.repository.findOne(reportId, {relations: ['generalReports']});
  }
}
