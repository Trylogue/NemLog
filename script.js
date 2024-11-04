// ページ内の言語を切り替える関数
function setLanguage(language) {
    // すべての要素を取得し、指定した言語に応じてテキストを変更する
    document.querySelectorAll('[data-lang-ja], [data-lang-en]').forEach(function (element) {
        element.textContent = element.getAttribute(`data-lang-${language}`);
    });

    // SNSリンクのURLを指定した言語に応じて変更
    const instagramLink = document.getElementById("instagramLink");
    const tiktokLink = document.getElementById("tiktokLink");

    if (language === "ja") {
        instagramLink.href = "https://www.instagram.com/sleep_researcher_ja";
        tiktokLink.href = "https://www.tiktok.com/@sleep.researcher.ja";
    } else if (language === "en") {
        instagramLink.href = "https://www.instagram.com/sleep_researcher_eng";
        tiktokLink.href = "https://www.tiktok.com/@sleep.researcher";
    }

    // 言語設定をローカルストレージに保存
    localStorage.setItem('preferredLanguage', language);
}

// ページ読み込み時に言語を設定
document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'ja';
    setLanguage(savedLanguage);
});
