import { useProperty } from '@mpietrucha/object'

export const usePrototypeProperty = () => {
    return 'prototype'
}

export const usePrototype = source => {
    return useProperty(source, usePrototypeProperty())
}
