import { usePrototype } from '@/prototype'
import { useNegate } from '@mpietrucha/function'
import { isEmpty, isFunction, isObject } from '@mpietrucha/is-basic'
import { createString } from '@mpietrucha/string'

export const isConstructor = input => {
    return isFunction(input) && isObject(usePrototype(input))
}

export const isClass = input => {
    return isConstructor(input) && createString(input).includes('class')
}

export const isInstanceOf = (input, constructor) => {
    return isConstructor(constructor) && input instanceof constructor
}

export const is = (input, ...parameters) => {
    if (isEmpty(parameters)) {
        return isConstructor(input)
    }

    return isInstanceOf(input, parameters.shift())
}

export const not = useNegate(is)

export const notClass = useNegate(isClass)

export const notInstanceOf = useNegate(isInstanceOf)

export const notConstructor = useNegate(isConstructor)
