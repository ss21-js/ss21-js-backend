import { Company } from 'src/modules/companies/entities/company.entity';
import { Job } from 'src/modules/companies/entities/job.entity';

export class JobWithCompany implements Job {
  _id: string;
  publisher_id: string;
  contactMail: string;
  jobName: string;
  jobDescription: string;
  jobQualifications: string[];
  skills: string[];
  workArea: string;
  workBasis: number;
  languages: string[];
  from: Date;
  to: Date;
  requested_ids: string[];
  final_accepted_id: string[];
  publisher: Company;

  constructor(partialJob: Partial<Job>, partialCompany: Partial<Company>) {
    Object.assign(this, partialJob);
    Object.assign(this.publisher, partialCompany);
  }
}