/* tslint:disable */
/* eslint-disable */
/**
 * users-svc
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ErrorsErrorsInner } from './ErrorsErrorsInner';
import {
    ErrorsErrorsInnerFromJSON,
    ErrorsErrorsInnerFromJSONTyped,
    ErrorsErrorsInnerToJSON,
} from './ErrorsErrorsInner';

/**
 * Standard JSON:API error
 * @export
 * @interface Errors
 */
export interface Errors {
    /**
     * Non empty array of errors occurred during request processing
     * @type {Array<ErrorsErrorsInner>}
     * @memberof Errors
     */
    errors: Array<ErrorsErrorsInner>;
}

/**
 * Check if a given object implements the Errors interface.
 */
export function instanceOfErrors(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function ErrorsFromJSON(json: any): Errors {
    return ErrorsFromJSONTyped(json, false);
}

export function ErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Errors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(ErrorsErrorsInnerFromJSON)),
    };
}

export function ErrorsToJSON(value?: Errors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ((value.errors as Array<any>).map(ErrorsErrorsInnerToJSON)),
    };
}

