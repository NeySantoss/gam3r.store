import { PrismaClient } from '@prisma/client';
import { Global, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';


@Global()
@Injectable()
export class PrismaProvider 
    extends PrismaClient implements 
    OnModuleInit, OnModuleDestroy
{
    
    onModuleInit() {
       this.$connect();
    }
    
    onModuleDestroy() {
        this.$disconnect();
    }
   
} 

