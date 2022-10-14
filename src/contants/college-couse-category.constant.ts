export const COLLEGE_COURSES_CATEGORY = {
    baccalaureate: { id: 1, name: 'Bacharelado' },
    graduation: { id: 2, name: 'Licenciatura' },
    technologist: { id: 3, name: 'Técnologo' },
    postgraduateStudies: { id: 4, name: 'Pós-Graduação' }
}

export const COLLEGE_COURSES_CATEGORY_ITEMS = Object.entries(
    COLLEGE_COURSES_CATEGORY
).map(([, value]) => value)
