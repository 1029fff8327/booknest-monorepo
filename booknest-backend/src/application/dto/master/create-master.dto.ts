export class CreateMasterDto {
  name: string;
  description?: string;
  email?: string;
  phone?: string;
  photo?: string;
  services: string[];
}
