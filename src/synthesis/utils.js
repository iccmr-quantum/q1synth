export const formatMutationParams = (params) => {
    return Object.entries(params).reduce((obj, [key, value]) => ({
        ...obj,
        [`_${key}`]: value
    }), {})
}