// ページ内の言語を切り替える関数
function setLanguage(language) {
    // すべての要素を取得し、指定した言語に応じてテキストを変更する
    document.querySelectorAll('[data-lang-ja], [data-lang-en]').forEach(function (element) {
        element.textContent = element.getAttribute(`data-lang-${language}`);
    });
}
