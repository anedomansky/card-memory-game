class Navigation {
    private reloadBtn: HTMLElement | null;

    private backBtn: HTMLElement | null;

    constructor(reloadBtnId: string, backBtnId: string) {
        this.reloadBtn = document.getElementById(reloadBtnId);
        this.backBtn = document.getElementById(backBtnId);
        if (this.reloadBtn && this.backBtn) {
            this.reloadBtn.addEventListener('click', () => window.location.reload());
            this.backBtn.addEventListener('click', () => window.history.back());
        }
    }
}

export default Navigation;
