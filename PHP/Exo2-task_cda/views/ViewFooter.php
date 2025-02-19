<?php
class ViewFooter implements ViewInterface {
    public function displayView(): string {
        ob_start();
?>
    <footer>
        <p>Footer</p>
    </footer>

    </body>
    </html>
<?php
    $view = ob_get_clean();
    return $view;
    }
}