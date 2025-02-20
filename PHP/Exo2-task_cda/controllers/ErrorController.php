<?php
class ErrorController extends AbstractController {
    
    //! Properties
    private ViewError $viewError;
    private string $message = ""; 

    //! Constructor
    public function __construct() {
        $this->viewError = new ViewError();
    }

    //! Getters & Setters

    /**
     * Get the value of viewError
     *
     * @return ViewError
     */
    public function getViewError(): ViewError {
        return $this->viewError;
    }

    /**
     * Set the value of viewError
     *
     * @param ViewError $viewError
     *
     * @return self
     */
    public function setViewError(ViewError $viewError): self {
        $this->viewError = $viewError;
        return $this;
    }

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
    public function render(): void {
        $this->viewError->setMessage($this->message);
        echo $this->viewError->displayView();
    }
}
