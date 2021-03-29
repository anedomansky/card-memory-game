interface Props {
    reloadBtnId: string;
    backBtnId: string;
}

const withNavigation = ({ reloadBtnId, backBtnId }: Props) => (o: Record<string, unknown>) => {
    const reloadBtn = document.getElementById(reloadBtnId);
    const backBtn = document.getElementById(backBtnId);

    if (reloadBtn && backBtn) {
        reloadBtn.addEventListener('click', () => window.location.reload());
        backBtn.addEventListener('click', () => window.history.back());
    }

    return {
        ...o,
        reloadBtn,
        backBtn,
    };
};

export default withNavigation;
