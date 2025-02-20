<?php
class CategoryModel extends AbstractModel {
    //! Properties
    private int $id;
    private string $name;

    //! Getters & Setters

    /**
     * Get the value of id
     *
     * @return int
     */
    public function getId(): int {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @param int $id
     *
     * @return self
     */
    public function setId(int $id): self {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of name
     *
     * @return string
     */
    public function getName(): string {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param string $name
     *
     * @return self
     */
    public function setName(string $name): self {
        $this->name = $name;
        return $this;
    }

    //! Methods

/**
 * @method Adds an account to the database
 * @return void
 */
    public function add(): void {
        try {
            $requete = "INSERT INTO category(`name`) VALUE(?)";
            $req = $this->connexion()->prepare($requete);
            $name = $this->getName(); 
            $req->bindParam(1, $name, PDO::PARAM_STR);
            $req->execute();
        } catch (Exception $e) {
            echo "Erreur" . $e->getMessage();
        }
    }

    /**
     * @method Edit an account in the database
     * @return void
     */
    public function update(array $newAccount): void {
        
        try {
            $requete = "UPDATE category SET `name`=? WHERE `name`=?";
            $req = $this->connexion()->prepare($requete);
            $req->bindParam(1, $name, PDO::PARAM_STR);
            $req->bindParam(2, $name, PDO::PARAM_STR);
            $req->execute();
        } catch (Exception $e) {
            echo "Erreur" . $e->getMessage();
        }
    }
    
    /**
     * @method Delete an account in the database
     * @return void
     */
    public function delete(): void {
        try {
            $requete = "DELETE FROM category WHERE `name` = ?";
            $req = $this->connexion()->prepare($requete);
            $name = $this->getName();
            $req->bindParam(1, $name, PDO::PARAM_STR);
            $req->execute();
        } catch (Exception $e) {
            echo "Erreur" . $e->getMessage();
        }
    }
    public function getAll(): ?array {
        try {
            $requete = "SELECT id_category, `name` FROM category";
            $req = $this->connexion()->prepare($requete);
            //Exécuter la requête
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        } catch (Exception $e) {
            echo "Erreur" . $e->getMessage();
        }
    }
    public function getById(string $id): ?array {
        try {
            $requete = "SELECT id_category, `name` FROM category WHERE id_category = ?";
            $req = $this->connexion()->prepare($requete);
            $req->bindParam(1,$id, PDO::PARAM_STR);
            $req->execute();
            $data = $req->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (Exception $e) {
            echo "Erreur : " . $e->getMessage();
            return null;
        }
    }
    public function getCategoryByName(string $name): ?array {
        try {
            $requete = "SELECT id_category, `name` FROM category WHERE `name`=?";
            $req = $this->connexion()->prepare($requete);
            $req->bindParam(1, $name, PDO::PARAM_STR);
            $req->execute();
            $data = $req->fetch(PDO::FETCH_ASSOC);
            
            return $data ? $data : null;
        } catch (Exception $e) {
            echo "Erreur" . $e->getMessage();
            return null;
        }
    }
}