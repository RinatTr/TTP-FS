export const caseToColor = (openPrice, lastPrice) => {
  if (lastPrice > openPrice) {
    return "green"
  } else if (lastPrice < openPrice ) {
    return "red"
  } else {
    return "grey"
  }
}
