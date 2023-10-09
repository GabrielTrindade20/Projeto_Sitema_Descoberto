package com.projeto.descoberto.controller;

import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
		public ModelAndView login(@Valid Usuario usuario, BindingResult br, HttpSession session) 
				   throws NoSuchAlgorithmException, Exception {
				ModelAndView mv = new ModelAndView();
				mv.addObject("usuario", new Usuario());
				
				if(br.hasErrors()) {
					mv.setViewName("login/login");
				}
				Usuario userLogin = serviceUsuario.loginUser(usuario.getEmail(), 
						                                     Util.md5(usuario.getSenha())
						                                     );
				if (userLogin == null) {
					mv.addObject("msg", "Usuário ou senha incorreta!");
					mv.setViewName("login/login");
				}
				else {
					session.setAttribute("usuarioLogado", userLogin);
					mv.setViewName("redirect:/workSpace");
				}
				return mv;
			}//fim login
		}
}
