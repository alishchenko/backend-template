export function IdResponse(id: number, type: string): any {
  return {
    data: {
      id: id.toString(),
      type,
    },
  }
}
