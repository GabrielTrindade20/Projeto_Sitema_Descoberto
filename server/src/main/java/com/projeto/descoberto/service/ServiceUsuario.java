package com.projeto.descoberto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.descoberto.exception.CriptoExistsException;
import com.projeto.descoberto.exception.EmailExistsException;
import com.projeto.descoberto.model.Usuario;
import com.projeto.descoberto.repository.UsuarioRepository;
import com.projeto.descoberto.util.Util;
@Service
public class ServiceUsuario {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	public void salvarUsuario(Usuario user) throws Exception{
		try {
			if(usuarioRepository.findByEmail(user.getEmail()) != null)
			{
				throw new EmailExistsException("Existe um email cadastrado para :"+
			    user.getEmail());
			}
			user.setSenha(Util.md5(user.getSenha()));
		} catch (Exception e) {
			throw new CriptoExistsException("Erro na criptografia da senha!");
		}
		usuarioRepository.save(user);
	}

}
