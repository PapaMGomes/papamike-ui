import { IContact } from '@/interfaces/contact.interface'
import CONTACT_TEMPLATE from './templates/contact'

type TemplateModelTypes = IContact
export class TemplateEmailModel {
    private buildTemplate(template: string, model: TemplateModelTypes) {
        for (const [key, value] of Object.entries(model)) {
            template = template.replace(`#{${key}}`, value)
        }

        return template
    }

    contact(model: IContact) {
        return this.buildTemplate(CONTACT_TEMPLATE, model)
    }
}
