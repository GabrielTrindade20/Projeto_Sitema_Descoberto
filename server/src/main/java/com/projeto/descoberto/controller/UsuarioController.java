package com.projeto.descoberto.controller;

import java.security.NoSuchAlgorithmException;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.descoberto.model.Usuario;
import com.projeto.descoberto.repository.UsuarioRepository;
import com.projeto.descoberto.service.ServiceUsuario;
import com.projeto.descoberto.util.Util;

@RequestMapping("/api")
@RestController
public class UsuarioController {

	@Autowired
	UsuarioRepository usuarioRepository;
	@Autowired
	ServiceUsuario serviceUsuario;

	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody Usuario usuario, HttpSession session) throws Exception {
	    try {
	        Usuario userLogin = serviceUsuario.loginUser(usuario.getEmail(), Util.md5(usuario.getSenha()));
	        if (userLogin != null) {
	            session.setAttribute("usuarioLogado", userLogin);
	            return ResponseEntity.ok(userLogin); // Retorna o usuário autenticado no corpo da resposta
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha incorreta!");
	        }
	    } catch (NoSuchAlgorithmException e) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro interno do servidor.");
	    }
	}


//	@RestController
//	public class AuthController {
//		@PostMapping("/login")
//		public ModelAndView login(@Valid Usuario usuario, BindingResult br, HttpSession session) 
//				   throws NoSuchAlgorithmException, Exception {
//				ModelAndView mv = new ModelAndView();
//				mv.addObject("usuario", new Usuario());
//				
//				if(br.hasErrors()) {
//					mv.setViewName("login/login");
//				}
//				Usuario userLogin = serviceUsuario.loginUser(usuario.getEmail(), 
//						                                     Util.md5(usuario.getSenha())
//						                                     );
//				if (userLogin == null) {
//					mv.addObject("msg", "Usuário ou senha incorreta!");
//					mv.setViewName("login/Login");
//				}
//				else {
//					session.setAttribute("usuarioLogado", userLogin);
//					mv.setViewName("redirect:/Turno");
//				}
//				return mv;
//			}//fim login
//		}

}