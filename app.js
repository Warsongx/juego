class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class Game {
 

  static play(playerChoice) {
    const eleccion = this.aleatorio()
    document.getElementById("computadora-resultado").textContent = `La computadora escogio: ${eleccion}`;
    
    if (playerChoice === eleccion) return "Empate";
    if (
      (playerChoice === "piedra" && eleccion === "tijeras") ||
      (playerChoice === "piedra" && eleccion === "lagarto") ||
      (playerChoice === "papel" && eleccion === "piedra") ||
      (playerChoice === "papel" && eleccion === "spock") ||
      (playerChoice === "tijeras" && eleccion === "lagarto") || 
      (playerChoice === "tijeras" && eleccion === "papel") ||
      (playerChoice === "lagarto" && eleccion === "papel") ||
      (playerChoice === "lagarto" && eleccion === "spock") ||
      (playerChoice === "spock" && eleccion === "piedra") ||
      (playerChoice === "spock" && eleccion === "tijeras")

      
      
    ) {
      return "Ganaste";
    }
    return "Perdiste";
  }
  static aleatorio() {
    const choices = ["piedra", "papel", "tijeras", "lagarto", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }
}

class App {
  constructor() {
    this.users = JSON.parse(localStorage.getItem("users")) || [];
    this.currentUser = null;
  }

  handleLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const user = this.users.find((u) => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      this.showGame();
    } else {
      alert("Usuario o contraseña incorrecta");
    }
  }

  handleRegister() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    if (this.users.some((u) => u.username === username)) {
      alert("El usuario ya existe");
      return;
    }
    const newUser = new User(username, password);
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));
    alert("Usuario registrado con éxito");
    this.showLoginForm();
  }

  showLoginForm() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  showRegisterForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  }

  showGame() {
    document.getElementById("login-register-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
  }

  playGame(playerChoice, computerChoice) {
    const result = Game.play(playerChoice);
    document.getElementById("game-result").textContent = `Resultado: ${result}`;


  }
}

const app = new App();
