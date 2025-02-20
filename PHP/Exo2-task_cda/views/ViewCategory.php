<?php
class ViewCategory implements ViewInterface {

    //! Properties
    private ?string $message;
    private ?string $listCategories;

    //! Getters & Setters

    /**
     * Get the value of message
     *
     * @return ?string
     */
    public function getMessage(): ?string {
        return $this->message;
    }

    /**
     * Set the value of message
     *
     * @param ?string $message
     *
     * @return self
     */
    public function setMessage(?string $message): self {
        $this->message = $message;
        return $this;
    }

    /**
     * Get the value of listCategories
     *
     * @return ?string
     */
    public function getListCategories(): ?string {
        return $this->listCategories;
    }

    /**
     * Set the value of listCategories
     *
     * @param ?string $listCategories
     *
     * @return self
     */
    public function setListCategories(?string $listCategories): self {
        $this->listCategories = $listCategories;
        return $this;
    }

    //! Render method
    public function displayView(): string {
        ob_start();
        echo "<p>" . $this->getMessage() . "</p>";
        ?>
        <section>
            <h1>Categories List</h1>
            
            <form method="post" action="">
                <div>
                    <label for="categoryName">Nom de la catégorie :</label>
                    <input type="text" id="categoryName" name="categoryName" required>
                </div>
                <button type="submit" name="submitCategory">Ajouter</button>
            </form>
            
            <h2>Catégories existantes</h2>
            <ul>
                <?php echo $this->getListCategories(); ?>
            </ul>
        </section>
        <?php
        $view = ob_get_clean();
        return $view;
    }
}
