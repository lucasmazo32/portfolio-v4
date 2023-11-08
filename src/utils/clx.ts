export const clx = (
  ...strings: Array<
    string | Record<string, boolean | undefined> | undefined | null
  >
): string =>
  strings
    .reduce((result: string[], current) => {
      if (typeof current === 'string') {
        result.push(current)
      }

      if (current && typeof current === 'object') {
        Object.entries(current).forEach(([key, value]) => {
          if (value) {
            result.push(key)
          }
        })
      }

      return result
    }, [])
    .join(' ')
