import { PrismaClient } from "@prisma/client";

// Essa declação impede que o next atualize e solicite requisição ao banco sempre que o front é atualizado
declare global {
    var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if(process.env.NODE_ENV === "production"){
    prisma = new PrismaClient();

} else {
    if(!global.cachedPrisma){
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}

export const db = prisma;