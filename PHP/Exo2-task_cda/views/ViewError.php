<?php
class ViewError implements ViewInterface {

    //! Properties
    private string $message;

    //! Getters & Setters

    /**
     * Get the value of message
     *
     * @return string
     */
    public function getMessage(): string {
        return $this->message;
    }

    /**
     * Set the value of message
     *
     * @param string $message
     *
     * @return self
     */
    public function setMessage(string $message): self {
        $this->message = $message;
        return $this;
    }

    //! Render method
    public function displayView(): string {
        ob_start();
        ?>
        <section>
            <h1>Error</h1>
            <p><?php echo htmlspecialchars($this->getMessage()); ?></p>
        </section>
        <?php
        return ob_get_clean();
    }
}
