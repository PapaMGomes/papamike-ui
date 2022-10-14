import { COLLEGE_COURSES } from '@/config/constants/college-course.config'
import { COLLEGE_COURSES_CATEGORY_ITEMS } from '@/contants/college-couse-category.constant'
import { ICollegeCourse } from '@/interfaces/_college-course.interface'

export class CollegeService {
    private readonly _coursesDB = COLLEGE_COURSES

    getCategories() {
        return COLLEGE_COURSES_CATEGORY_ITEMS
    }
    getAll() {
        return this._coursesDB
    }
    getByCategoryId(categoryId: number, list?: ICollegeCourse[]) {
        const listToFilter = list ? list : this._coursesDB
        return listToFilter.filter(({ category }) => category.id === categoryId)
    }
    getByName(term: string) {
        return this._coursesDB.filter(({ name }) => {
            return name.toLowerCase().includes(term.toLowerCase())
        })
    }
}
