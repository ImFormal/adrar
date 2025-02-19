<?php 
class LogoutController extends AbstractController {

    public function logout(): void {
        session_destroy();
        $_SESSION = [];
        header('location:/Exo2-task_cda');
    }

    public function render(): void {
        $this->renderHeader();
        $this->logout();
        echo $this->getListViews()['logout']->displayView();
        $this->renderFooter();
    }
}