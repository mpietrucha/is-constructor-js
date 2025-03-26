import { get } from 'lodash-es'

export const usePrototypeProperty = () => {
    return 'prototype'
}

export const usePrototype = source => {
    return get(source, usePrototypeProperty())
}
