import viewportSize from "viewport-size";

export const noOfColumn = 25;
export const numberOfRow = 10;
export const moveTime = 700;
export const checkWordTime = 2000;


export const windowHeight = () => viewportSize.getHeight();
export const windowWidth = () => viewportSize.getWidth();

export const blockSize = () => {
    const calculatedSize = (viewportSize.getWidth() - 10) / noOfColumn;
    return calculatedSize < 50 ? calculatedSize : 50;
}


export const COLORS = {
	MOVING: "#228B22",
	NOTMOVING: "#FFA500",
	POSSIBLE_WORD: "#2E2EFF",
};
