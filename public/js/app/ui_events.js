document.addEventListener('DOMContentLoaded', () => {
    const offcanvasSettings = new bootstrap.Offcanvas(document.getElementById('offcanvasSettings'));
    const modalSignIn = new bootstrap.Modal(document.getElementById('modalSignIn'));

    const bindEventListener = () => {
        document.getElementById('settingsSymbol').addEventListener('click', mainNavigationShow);
        document.getElementById('signin').addEventListener('click', modalSignInShow);
    }

    const mainNavigationShow = () => {
        offcanvasSettings.show();
    }

    const mainNavigationHide = () => {
        offcanvasSettings.hide();
    }

    const modalSignInShow = () => {
        mainNavigationHide();
        modalSignIn.show();
    }

    bindEventListener();
})