export const analyzeArray = (list) => {
    if (list.length == 0) return {};

    const max = Math.max(...list);
    const min = Math.min(...list);
    const length = list.length;
    const average = (list.reduce((total,curr) => total + curr,0))/length;

    return {
        max,
        min,
        average,
        length,
    };
};