import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Shoes, Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ShoesCreateInput): Promise<Shoes> {
    return this.prisma.shoes.create({ data });
  }

  findAll(): Promise<Shoes[]> {
    return this.prisma.shoes.findMany({ orderBy: { id: 'asc' } });
  }

  findOne(userWhereUniqueInput: Prisma.ShoesWhereUniqueInput): Promise<Shoes> {
    return this.prisma.shoes.findUnique({ where: userWhereUniqueInput });
  }

  update(params: {
    where: Prisma.ShoesWhereUniqueInput;
    data: Prisma.ShoesUpdateInput;
  }): Promise<Shoes> {
    const { where, data } = params;
    return this.prisma.shoes.update({
      data,
      where,
    });
  }

  remove(where: Prisma.ShoesWhereUniqueInput): Promise<Shoes> {
    return this.prisma.shoes.delete({ where });
  }
}
