const colorsGraphWithBorder = ['#FFFFFF'];

const getBorderGraphColor = (color: string, borderColor: string) =>
    colorsGraphWithBorder.includes(color) ? borderColor : color;

export { colorsGraphWithBorder, getBorderGraphColor };
