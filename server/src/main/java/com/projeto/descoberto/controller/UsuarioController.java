package com.projeto.descoberto.controller;

import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.projeto.descoberto.model.Usuario;
import com.projeto.descoberto.repository.UsuarioRepository;
import com.projeto.descoberto.service.ServiceUsuario;
import com.projeto.descoberto.util.Util;

@Controller
public class UsuarioController {

	@Autowired
	UsuarioRepository usuarioRepository;
	@Autowired
	ServiceUsuario serviceUsuario;

	@RestController
	@RequestMapping("/api")
	public class AuthController {
		@PostMapping("/login")
		public ResponseEntity<?> login(@RequestBody AuthRequest authRequest) {
			// Implemente a lógica de autenticação aqui
			// Verifique o usuário e a senha no banco de dados
			// Retorne uma resposta com um token JWT ou outra forma de autenticação
			// ou uma resposta de erro em caso de falha na autenticação
		}
	}


	@PostMapping("/salvarUsuario")
	public ModelAndView cadastroUsuario(Usuario user) throws Exception {
		ModelAndView mv = new ModelAndView();
		serviceUsuario.salvarUsuario(user);
		mv.setViewName("redirect:/login");
		return mv;
	}
}
