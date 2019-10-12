function setEllipsis(el, binding, vnode) {
  // 接收指令传参（行数、字体大小、右侧留白数）
  const lineNum = binding.value.line || 1;
  const rightBlankNum = binding.value.rightBlank || 0;
  const showTitle = binding.value.showTitle || false;

  // 获取显示的文本内容
  const text = el.innerHTML;
  if (!text.length) return;
  // 是否显示title
  if (showTitle) el.setAttribute('title', text);

  // 获取文本的行高
  const computedStyle = window.getComputedStyle(el, null);
  const textLineHeight = computedStyle.getPropertyValue('line-height');
  const textFontSize = computedStyle.getPropertyValue('font-size');

  // 设置文本超出指定行数后隐藏样式
  const limitHeight = parseInt(textLineHeight) * lineNum;
  if (limitHeight) {
    el.style.height = `${limitHeight}px`;
    el.style.overflow = 'hidden';
  }
  // 设置省略号，通过创建一个div按照同样的样式逐个字符显示文本内容，获取到达指定行数时的字符下标
  const newDiv = document.createElement('div');
  newDiv.style.width = `${el.clientWidth}px`;
  newDiv.style.lineHeight = textLineHeight;
  newDiv.style.fontSize = textFontSize;
  newDiv.style.visibility = 'hidden';
  document.body.appendChild(newDiv);
  let targetIndex;
  for (let i = 0, len = text.length; i < len; i++) {
    newDiv.innerHTML = text.substring(0, i);
    if (newDiv.clientHeight > limitHeight) {
      targetIndex = i;
      break;
    }
  }
  document.body.removeChild(newDiv);
  el.innerHTML = targetIndex ? `${text.substring(0, targetIndex - rightBlankNum - 3)}...` : text;
  el.setAttribute('data-overflow', !!targetIndex);
}

export default {
  inserted(el, binding, vnode) {
    setEllipsis(el, binding, vnode);
  },
  componentUpdated(el, binding, vnode) {
    setEllipsis(el, binding, vnode);
  },
};