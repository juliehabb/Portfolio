function startTypingAnimation () {
  const typedTextElement = document.getElementById("animated-text-word");
  if (!typedTextElement) return;

  const typingWordList = ["technology", "design"];

  let activeWordIndex = 0;
  let visibleCharCount = 0;
  let isDeletingWord = false;

  const TYPING_DELAY_MS = 90;
  const DELETING_DELAY_MS = 60;
  const PAUSE_AT_FULL_MS = 900;
  const PAUSE_AT_EMPTY_MS = 300;
  const FIRST_WORD_PAUSE_MS = 2000;

  function advanceTypingFrame() {
    const currentWord = typingWordList[activeWordIndex];

    if (isDeletingWord) {
      visibleCharCount = Math.max(0, visibleCharCount - 1);
      typedTextElement.textContent = currentWord.slice(0, visibleCharCount);

      if (visibleCharCount === 0) {
        isDeletingWord = false;
        activeWordIndex = (activeWordIndex + 1) % typingWordList.length;
        setTimeout(advanceTypingFrame, PAUSE_AT_EMPTY_MS);
        return;
      }
      setTimeout(advanceTypingFrame, DELETING_DELAY_MS);
    } else {
      visibleCharCount = Math.min(currentWord.length, visibleCharCount + 1);
      typedTextElement.textContent = currentWord.slice(0, visibleCharCount);

      if (visibleCharCount === currentWord.length) {
        isDeletingWord = true;
        const pause = activeWordIndex === 0 ? FIRST_WORD_PAUSE_MS : PAUSE_AT_FULL_MS;
        setTimeout(advanceTypingFrame, pause);
        return;
      }
      setTimeout(advanceTypingFrame, TYPING_DELAY_MS);
    }
  }
  advanceTypingFrame();
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  startTypingAnimation();
}
