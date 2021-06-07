document.addEventListener('DOMContentLoaded', () => {
    const offcanvasSettings = new bootstrap.Offcanvas(document.getElementById('offcanvasSettings'));
    const modalSignIn = new bootstrap.Modal(document.getElementById('modalSignIn'));
    const modalLogIn = new bootstrap.Modal(document.getElementById('modalLogIn'));
    const modalRequestPassword = new bootstrap.Modal(document.getElementById('modalRequestPassword'));

    const bindEventListener = () => {
        document.getElementById('settingsSymbol').addEventListener('click', mainNavigationShow);
        document.getElementById('signin').addEventListener('click', modalSignInShow);
        document.getElementById('login').addEventListener('click', modalLogInShow);
        document.getElementById('modalLogInRegister').addEventListener('click', modalLogInRegister);
        document.getElementById('modalLogInPasswordRequest').addEventListener('click', modalPasswordRequest);

    }

    const mainNavigationShow = () => {
        offcanvasSettings.show();
    }

    const mainNavigationHide = () => {
        offcanvasSettings.hide();
    }

    const modalLogInShow = () => {
        mainNavigationHide();
        modalLogIn.show();
    }

    const modalLogInHide = () => {
        modalLogIn.hide();
    }

    const modalLogInRegister = () => {
        modalLogInHide();
        modalSignInShow();
    }

    const modalPasswordRequest = () => {
        modalLogInHide();
        modalRequestPassword.show();
    }

    const modalSignInShow = () => {
        mainNavigationHide();
        modalSignIn.show();
    }





    bindEventListener();
})