<?php
include "models/CategoryModel.php";

class CategoryController extends AbstractController {
        private ?CategoryModel $categoryModel = null;
        private ?string $message = "";
    
        public function __construct(array $models, array $views) {
            parent::__construct($models, $views);
            if (isset($models['category'])) {
                $this->categoryModel = $models['category'];
            }
        }

    public function getCategoryModel(): ?CategoryModel {
        return $this->categoryModel;
    }

    public function setCategoryModel(CategoryModel $categoryModel): self {
        $this->categoryModel = $categoryModel;
        return $this;
    }

    public function getMessage(): ?string {
        return $this->message;
    }

    public function setMessage(string $message): self {
        $this->message = $message;
        return $this;
    }

    public function addCategory(): void {
        if (isset($_POST['submitCategory'])) {
            if (!empty($_POST['categoryName'])) {
                $categoryName = Utils::sanitize($_POST['categoryName']);
                
                if (!$this->categoryModel->getCategoryByName($categoryName)) {
                    $this->categoryModel->setName($categoryName)->add();
                    $this->message = "Catégorie ajoutée avec succès !";
                } else {
                    $this->message = "Cette catégorie existe déjà.";
                }
            } else {
                $this->message = "Veuillez remplir le champ catégorie.";
            }
        }
    }

    public function deleteCategory(): void {
        if (isset($_GET['delete'])) {
            $categoryId = (int)$_GET['delete'];
            
            $categoryToDelete = $this->categoryModel->getById($categoryId);
            
            if ($categoryToDelete) {
                $this->categoryModel->setName($categoryToDelete['name'])->delete();
                $this->message = "Catégorie supprimée avec succès !";
            } else {
                $this->message = "Catégorie introuvable.";
            }
        }
    }

    public function render(): void {
        $this->renderHeader();
        $this->addCategory();
        $this->deleteCategory();
        
        if ($this->categoryModel === null) {
            echo "Erreur: le modèle de catégorie n'est pas initialisé.";
            return;
        }
        
        $categories = $this->categoryModel->getAll();
        $listCategories = '';
        
        if ($categories) {
            foreach ($categories as $category) {
                $listCategories .= "<li>" . htmlspecialchars($category['name']) . 
                    " <a href='?delete=" . $category['id_category'] . "'>Supprimer</a></li>";
            }
        }
    
        if (!isset($this->getListViews()['category']) || !($this->getListViews()['category'] instanceof ViewCategory)) {
            echo "Erreur: la vue de catégorie n'est pas disponible ou n'est pas du bon type.";
            return;
        }
    
        echo $this->getListViews()['category']->setMessage($this->message)->setListCategories($listCategories)->displayView();
        $this->renderFooter();
    }
    
}