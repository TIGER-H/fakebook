export const getSelectionRange = () => {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return null; //没点击过
  return selection.getRangeAt(0); //“range”可能有多个，但一般是一个 取第一个
};

export const getSelectionPosition = (selectionRange) => {
  const editorBounds = document
    .getElementById("richEditor")
    .getBoundingClientRect();
  const rangeBounds = selectionRange.getBoundingClientRect();
  const rangeWidth = rangeBounds.right - rangeBounds.left;
  const rangeHeight = rangeBounds.bottom - rangeBounds.top;
  // toolbar: 72px x 35px
  const offsetLeft =
    rangeBounds.left - editorBounds.left + rangeWidth / 2 - 72 / 2;
  // 35px + 5px arrow + 2px space
  const offsetTop = rangeBounds.top - editorBounds.top - 42;
  return { offsetLeft, offsetTop };
};
