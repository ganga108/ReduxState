
export const ACTION_ADD = 'ACTION_ADD'
export const ACTION_DELETE='ACTION_DELETE'

export const onItem = (string) => {
    return {
        type: ACTION_ADD,
        item: string
    }

}
export const onItemDeleted = (string) => {
    return {
        type:ACTION_DELETE,
        item: string
    }

}