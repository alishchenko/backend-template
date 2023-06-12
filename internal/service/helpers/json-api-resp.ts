type Resource = {
  id: string,
  type: string,
  attributes: any
}

export function createResource(obj: Record<string, unknown>): Resource {
  const { id, type, ...attributes } = obj

  return {
    id: typeof(id) == 'string' ? id: id.toString(), 
    type: typeof(type) == 'string' ? type: type.toString(),
    attributes,
  }
}
