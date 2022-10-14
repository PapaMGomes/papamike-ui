export interface ICollegeCourseCategory {
    id: number
    name: string
}

export interface ICollegeCourse {
    name: string
    category: ICollegeCourseCategory
}
