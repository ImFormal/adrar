import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent implements AfterViewInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private fireworks: Firework[] = [];
  private bombs: { x: number; y: number; exploded: boolean }[] = [];
  private bombParticles: Particle[] = [];
  private dog: Dog | null = new Dog();
  private pokeballs: Pokeball[] = [];

  ngAfterViewInit() {
    this.canvas = document.getElementById("animationCanvas") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");

    if (!this.ctx) {
      console.error("Impossible d'obtenir le contexte 2D du canvas.");
      return;
    }

    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
    this.animate();
  }

  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  launchFireworks() {
    const x = Math.random() * this.canvas.width;
    const y = Math.random() * (this.canvas.height / 2);
    this.fireworks.push(new Firework(x, y));
  }

  dropBomb() {
    this.bombs.push({ x: Math.random() * this.canvas.width, y: 0, exploded: false });
  }

  throwPokeball() {
    if (this.dog) {
      this.pokeballs.push(new Pokeball(this.dog.x + 50, this.dog.y - 50));
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    if (!this.ctx) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Feux d'artifice
    this.fireworks.forEach(firework => {
      firework.update();
      firework.draw(this.ctx!);
    });
    this.fireworks = this.fireworks.filter(firework => firework.particles.length > 0);

    // Bombes
    this.bombs.forEach((bomb, index) => {
      if (!bomb.exploded) {
        bomb.y += 5;
        this.ctx!.font = "30px Arial";
        this.ctx!.fillText("💣", bomb.x - 15, bomb.y + 10);

        if (bomb.y >= this.canvas.height - 50) {
          this.explodeBomb(index);
        }
      }
    });

    // Explosion des bombes
    this.bombParticles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.alpha -= 0.02;
    });
    this.bombParticles = this.bombParticles.filter(p => p.alpha > 0);

    this.bombParticles.forEach(p => {
      this.ctx!.globalAlpha = p.alpha;
      this.ctx!.fillStyle = p.color;
      this.ctx!.beginPath();
      this.ctx!.arc(p.x, p.y, 4, 0, Math.PI * 2);
      this.ctx!.fill();
    });

    this.ctx!.globalAlpha = 1; // Remettre l'alpha normal après explosion

    // Animer le chien
    if (this.dog) {
      this.dog.update();
      this.dog.draw(this.ctx!);
    }

    // Animer les Pokéballs
    this.pokeballs.forEach(pokeball => {
      pokeball.update();
      pokeball.draw(this.ctx!);

      // Vérifier la collision avec le chien
      if (this.dog && pokeball.checkCollision(this.dog)) {
        this.dog = null; // Disparition du chien
        pokeball.capture();
      }
    });

    // Supprimer les Pokéballs après leur animation
    this.pokeballs = this.pokeballs.filter(pokeball => !pokeball.finished);
  }

  explodeBomb(index: number) {
    const bomb = this.bombs[index];
    if (!bomb) return;

    for (let i = 0; i < 50; i++) {
      this.bombParticles.push(new Particle(bomb.x, bomb.y));
    }

    bomb.exploded = true;
    setTimeout(() => {
      this.bombs.splice(index, 1);
    }, 500);
  }
}

// Classe représentant le chien 🐶
class Dog {
  x: number;
  y: number;
  speed: number;
  direction: number; // 1 = droite, -1 = gauche

  constructor() {
    this.x = Math.random() * window.innerWidth;
    this.y = window.innerHeight - 100;
    this.speed = 3;
    this.direction = Math.random() > 0.5 ? 1 : -1; // Départ aléatoire gauche ou droite
  }

  update() {
    this.x += this.speed * this.direction;

    // Changer de direction si le chien touche un bord
    if (this.x <= 0 || this.x >= window.innerWidth - 50) {
      this.direction *= -1;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "40px Arial";
    ctx.fillText("🐶", this.x, this.y);
  }
}

// Classe représentant la Pokéball 🎾
class Pokeball {
  x: number;
  y: number;
  speedY: number;
  gravity: number;
  captured: boolean;
  finished: boolean;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speedY = -8;
    this.gravity = 0.5;
    this.captured = false;
    this.finished = false;
  }

  update() {
    if (!this.captured) {
      this.y += this.speedY;
      this.speedY += this.gravity;
    } else {
      this.y += Math.sin(Date.now() / 200) * 2; // Effet de secousse
      setTimeout(() => this.finished = true, 1500);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.font = "30px Arial";
    ctx.fillText("🔴", this.x, this.y);
  }

  checkCollision(dog: Dog): boolean {
    return this.y >= dog.y - 20 && this.x >= dog.x - 20 && this.x <= dog.x + 40;
  }

  capture() {
    this.captured = true;
  }
}

// Classe pour les particules (explosion des bombes)
class Particle {
  x: number;
  y: number;
  angle: number;
  speed: number;
  alpha: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.angle = Math.random() * 2 * Math.PI;
    this.speed = Math.random() * 6 + 2;
    this.alpha = 1;
    this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
  }
}

// Classe pour le feu d'artifice 🎇
class Firework {
  x: number;
  y: number;
  particles: Particle[];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.particles = [];

    for (let i = 0; i < 30; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }
  }

  update() {
    this.particles.forEach(p => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.alpha -= 0.02;
    });

    this.particles = this.particles.filter(p => p.alpha > 0);
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.particles.forEach(p => {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}
