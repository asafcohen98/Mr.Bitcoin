
import { UtilsService } from '../services/utils-service'

const utilsService = new UtilsService()

export class Contact {
    _id = utilsService.makeId()
    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '') {
    }
}
