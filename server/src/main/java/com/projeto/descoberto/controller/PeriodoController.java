package com.projeto.descoberto.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.descoberto.model.Periodo;
import com.projeto.descoberto.service.ServicePeriodo;

@RequestMapping("/api/periodo")
	@RestController
	public class PeriodoController {
	    @Autowired
	    private ServicePeriodo servicePeriodo;

	    @PostMapping
	    public ResponseEntity<?> criarPeriodo(@Valid @RequestBody Periodo periodo) {
	        // Implemente a lógica para criar um novo período
	        servicePeriodo.criarPeriodo(periodo);
	        return ResponseEntity.ok("Período criado com sucesso.");
	    }
	}

