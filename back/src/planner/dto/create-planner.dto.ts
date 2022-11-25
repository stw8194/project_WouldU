import { IsBoolean, IsDate, IsDateString, IsNumber, IsOptional, IsString, IsUrl } from "class-validator";

export class CreatePlannerDto {
  @IsString()
  description: string;

  @IsDateString()
  date: Date;

  @IsString()
  @IsUrl()
  @IsOptional()
  imgUrl: string;

  @IsString()
  userId: string;

  @IsNumber()
  priority: number;
}