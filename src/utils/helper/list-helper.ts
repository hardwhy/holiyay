export const List = {
  generate: <T>(count: number, generator: (index: number) => T): T[] => {
    const list: T[] = [];
    for (let index = 0; index < count; index++) {
      list.push(generator(index));
    }
    return list;
  },
};
