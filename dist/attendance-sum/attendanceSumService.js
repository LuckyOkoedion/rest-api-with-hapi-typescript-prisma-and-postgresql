"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendanceSumService = void 0;
const client_1 = require("@prisma/client");
class AttendanceSumService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    create(theDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.attendanceSum.create({
                    data: {
                        eventName: theDto.eventName,
                        date: theDto.date,
                        totalChildren: theDto.totalChildren,
                        totalFemale: theDto.totalFemale,
                        totalMale: theDto.totalMale
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                yield this.prisma.$disconnect();
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.attendanceSum.findUnique({
                    where: {
                        id
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                yield this.prisma.$disconnect();
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.attendanceSum.findMany();
            }
            catch (error) {
                console.log(error);
            }
            finally {
                yield this.prisma.$disconnect();
            }
        });
    }
    update(theDto, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.attendanceSum.update({
                    where: {
                        id: id
                    },
                    data: Object.assign({}, theDto)
                });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                yield this.prisma.$disconnect();
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.prisma.attendanceSum.delete({
                    where: {
                        id
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
            finally {
                yield this.prisma.$disconnect();
            }
        });
    }
}
exports.AttendanceSumService = AttendanceSumService;
