export class PaginationService {
    filter(list: any[], page: number, pageSize: number) {
        return list.slice((page - 1) * pageSize, page * pageSize)
    }
}
