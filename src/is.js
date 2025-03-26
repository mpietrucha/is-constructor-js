import { usePrototype } from '@/prototype'
import { isEmpty, isFunction, isObject } from '@mpietrucha/is-basic'
import { negate, toString } from 'lodash-es'

export const isConstructor = input => {
    return isFunction(input) && isObject(usePrototype(input))
}

export const isClass = input => {
    return isConstructor(input) && toString(input).includes('class')
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

export const not = negate(is)

export const notClass = negate(isClass)

export const notInstanceOf = negate(isInstanceOf)

export const notConstructor = negate(isConstructor)
