class Navigation {
    private reloadBtn: HTMLElement | null;

    private backBtn: HTMLElement | null;

    constructor() {
        this.reloadBtn = document.getElementById('reload');
        this.backBtn = document.getElementById('back');
    }

    public setup(): void {
        this.reloadBtn?.addEventListener('click', () => window.location.reload());
        this.backBtn?.addEventListener('click', () => window.history.back());
    }
}

export default Navigation;
