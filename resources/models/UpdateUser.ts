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
import type { UpdateUserAllOfAttributes } from './UpdateUserAllOfAttributes';
import {
    UpdateUserAllOfAttributesFromJSON,
    UpdateUserAllOfAttributesFromJSONTyped,
    UpdateUserAllOfAttributesToJSON,
} from './UpdateUserAllOfAttributes';

/**
 * 
 * @export
 * @interface UpdateUser
 */
export interface UpdateUser {
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    type: UpdateUserTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UpdateUser
     */
    id: string;
    /**
     * 
     * @type {UpdateUserAllOfAttributes}
     * @memberof UpdateUser
     */
    attributes: UpdateUserAllOfAttributes;
}


/**
 * @export
 */
export const UpdateUserTypeEnum = {
    UpdateUsers: 'update-users'
} as const;
export type UpdateUserTypeEnum = typeof UpdateUserTypeEnum[keyof typeof UpdateUserTypeEnum];


/**
 * Check if a given object implements the UpdateUser interface.
 */
export function instanceOfUpdateUser(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function UpdateUserFromJSON(json: any): UpdateUser {
    return UpdateUserFromJSONTyped(json, false);
}

export function UpdateUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': UpdateUserAllOfAttributesFromJSON(json['attributes']),
    };
}

export function UpdateUserToJSON(value?: UpdateUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': UpdateUserAllOfAttributesToJSON(value.attributes),
    };
}
